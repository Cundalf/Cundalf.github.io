"use client"

import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white leading-relaxed mb-5">
            {t("about.line1")}
          </p>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            {t("about.line2")}
          </p>
        </div>
      </div>
    </section>
  )
}
