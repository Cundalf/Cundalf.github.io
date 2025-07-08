"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.certifications": "Certificaciones",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Desarrollador Full Stack",
    "hero.subtitle": "Creando soluciones digitales innovadoras con más de 9 años de experiencia",
    "hero.description":
      "Soy una persona curiosa, comprometida y con mucha predisposición para el aprendizaje. Me apasiona resolver problemas y buscar soluciones que realmente hagan la diferencia.",
    "hero.cta": "Ver mi trabajo",
    "hero.contact": "Contactar",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.current": "Actual",
    "experience.grupo-esfera.title": "Desarrollador de Software",
    "experience.grupo-esfera.company": "Grupo Esfera",
    "experience.grupo-esfera.period": "Enero 2022 - Presente",
    "experience.grupo-esfera.description":
      "Desarrollo de aplicaciones web y sistemas empresariales utilizando tecnologías modernas. Implementación de CI/CD, DevOps y arquitecturas cloud.",

    "experience.freelance.title": "Desarrollador Freelance",
    "experience.freelance.company": "Profesional Independiente",
    "experience.freelance.period": "Julio 2024 - Octubre 2024",
    "experience.freelance.description":
      "Desarrollo de sistema de monitoreo y estadísticas utilizando el Stack ELK con Python, Celery y Redis.",

    "experience.lomas.title": "Desarrollador de Software",
    "experience.lomas.company": "Sanatorio Las Lomas S.A.",
    "experience.lomas.period": "Febrero 2015 - Enero 2022",
    "experience.lomas.description":
      "Desarrollo y mantenimiento de aplicaciones, servicios y bases de datos. Coordinación de equipo de desarrollo de hasta 3 personas.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Bases de Datos",
    "skills.devops": "DevOps & Cloud",
    "skills.gamedev": "Desarrollo de Juegos",
    "skills.other": "Otros Conocimientos",

    // Certifications
    "certifications.title": "Certificaciones",
    "certifications.recent": "Recientes",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Hablemos sobre tu próximo proyecto",
    "contact.description": "Estoy siempre abierto a nuevas oportunidades y desafíos interesantes.",
    "contact.email": "Enviar email",
    "contact.linkedin": "Ver LinkedIn",
    "contact.github": "Ver GitHub",
    "contact.itch": "Ver Itch.io",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Construido con",
  },
  en: {
    // Navigation
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "Creating innovative digital solutions with over 9 years of experience",
    "hero.description":
      "I am a curious, committed person with a great predisposition for learning. I am passionate about solving problems and finding solutions that really make a difference.",
    "hero.cta": "View my work",
    "hero.contact": "Contact me",

    // Experience
    "experience.title": "Professional Experience",
    "experience.current": "Current",
    "experience.grupo-esfera.title": "Software Developer",
    "experience.grupo-esfera.company": "Grupo Esfera",
    "experience.grupo-esfera.period": "January 2022 - Present",
    "experience.grupo-esfera.description":
      "Development of web applications and enterprise systems using modern technologies. Implementation of CI/CD, DevOps and cloud architectures.",

    "experience.freelance.title": "Freelance Developer",
    "experience.freelance.company": "Self-employed",
    "experience.freelance.period": "July 2024 - October 2024",
    "experience.freelance.description":
      "Development of monitoring and statistics system using ELK Stack with Python, Celery and Redis.",

    "experience.lomas.title": "Software Developer",
    "experience.lomas.company": "Sanatorio Las Lomas S.A.",
    "experience.lomas.period": "February 2015 - January 2022",
    "experience.lomas.description":
      "Development and maintenance of applications, services and databases. Team coordination of up to 3 developers.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Databases",
    "skills.devops": "DevOps & Cloud",
    "skills.gamedev": "Game Development",
    "skills.other": "Other Knowledge",

    // Certifications
    "certifications.title": "Certifications",
    "certifications.recent": "Recent",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about your next project",
    "contact.description": "I am always open to new opportunities and interesting challenges.",
    "contact.email": "Send email",
    "contact.linkedin": "View LinkedIn",
    "contact.github": "View GitHub",
    "contact.itch": "View Itch.io",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("en")) {
      setLanguage("en")
    } else {
      setLanguage("es") // Default to Spanish
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
