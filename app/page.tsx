"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
