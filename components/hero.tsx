"use client"

import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            {/* Profile Image Container */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl overflow-hidden">
              <img src="/profile.jpg" alt="Agustín Cundari" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Agustín Cundari</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4 sm:mb-6">
              {t("hero.title")}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              {t("hero.subtitle").replace(
                "9",
                Math.floor(
                  (new Date().getTime() - new Date("2015-02-01").getTime()) / (1000 * 60 * 60 * 24 * 365.25),
                ).toString(),
              )}
            </p>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              {t("hero.cta")}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t("hero.contact")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
