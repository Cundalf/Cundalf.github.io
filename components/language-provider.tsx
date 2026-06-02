"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
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
    "hero.title": "Software Engineer · Seguridad en IA · Full Stack",
    "hero.subtitle": "+{years} años de experiencia.",
    "about.line1":
      "Perfil en T: construyo sistemas de punta a punta — frontend, backend, infraestructura, seguridad y CI/CD.",
    "about.line2":
      "Me especializo en seguridad aplicada a IA: diseño y testeo flujos y chatbots pensando primero en cómo pueden romperse. Referente técnico y capacitador dentro de los equipos.",
    "hero.cta": "Ver mi trabajo",
    "hero.contact": "Contactar",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.current": "Actual",
    "experience.grupo-esfera.title": "Referente Técnico & Software Engineer",
    "experience.grupo-esfera.company": "Grupo Esfera",
    "experience.grupo-esfera.period": "Enero 2022 - Presente",
    "experience.grupo-esfera.description":
      "Implementación de flujos de IA y chatbots seguros y escalables. Optimización de costos de infraestructura. Diseño de CI/CD con runners en instancias spot de AWS (reducción de tiempos en aproximadamente 45% y costos en aproximadamente 30%). Referente técnico y capacitador interno en IA.",

    "experience.freelance.title": "Arquitecto de Soluciones & Desarrollador",
    "experience.freelance.company": "Profesional Independiente",
    "experience.freelance.period": "Julio 2024 - Octubre 2024",
    "experience.freelance.description":
      "Diseño y desarrollo de sistema robusto de monitoreo y estadísticas utilizando el Stack ELK con Python, Celery y Redis para resolver cuellos de botella de datos.",

    "experience.lomas.title": "Full Stack Developer & Team Lead",
    "experience.lomas.company": "Sanatorio Las Lomas S.A.",
    "experience.lomas.period": "Febrero 2015 - Enero 2022",
    "experience.lomas.description":
      "Desarrollo, mantenimiento y modernización de aplicaciones, servicios de salud y bases de datos. Coordinación de equipo de desarrollo técnico de hasta 3 personas.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.security": "Seguridad en IA",
    "skills.database": "Bases de Datos",
    "skills.devops": "DevOps & Cloud",
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
    "hero.title": "Software Engineer · AI Security · Full Stack",
    "hero.subtitle": "+{years} years of experience.",
    "about.line1":
      "T-shaped profile: I build systems end-to-end — frontend, backend, infrastructure, security and CI/CD.",
    "about.line2":
      "I specialize in AI security: designing and testing flows and chatbots by thinking first about how they can break. Technical reference and trainer within teams.",
    "hero.cta": "View my work",
    "hero.contact": "Contact me",

    // Experience
    "experience.title": "Professional Experience",
    "experience.current": "Current",
    "experience.grupo-esfera.title": "Technical Lead & Software Engineer",
    "experience.grupo-esfera.company": "Grupo Esfera",
    "experience.grupo-esfera.period": "January 2022 - Present",
    "experience.grupo-esfera.description":
      "Implementation of secure and scalable AI workflows and chatbots. Infrastructure cost optimization. CI/CD design with AWS spot instances runners (reducing deploy times by approximately 45% and costs by approximately 30%). Technical reference and internal AI trainer.",

    "experience.freelance.title": "Solutions Architect & Developer",
    "experience.freelance.company": "Self-employed",
    "experience.freelance.period": "July 2024 - October 2024",
    "experience.freelance.description":
      "Design and development of a robust monitoring and statistics system using the ELK Stack with Python, Celery and Redis to solve data bottlenecks.",

    "experience.lomas.title": "Full Stack Developer & Team Lead",
    "experience.lomas.company": "Sanatorio Las Lomas S.A.",
    "experience.lomas.period": "February 2015 - January 2022",
    "experience.lomas.description":
      "Development, maintenance, and modernization of healthcare applications, services, and databases. Technical coordination of a development team of up to 3 developers.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.security": "AI Security",
    "skills.database": "Databases",
    "skills.devops": "DevOps & Cloud",
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

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = (translations[language] as any)[key] || key
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        translation = translation.replace(`{${k}}`, v.toString())
      })
    }
    return translation
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
