"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-300 mb-2">
            © {new Date().getFullYear()} Agustín Uriel Cundari. {t("footer.rights")}
          </p>
          <p className="text-slate-400 flex items-center justify-center gap-2">
            {t("footer.built")} <Heart className="h-4 w-4 text-red-500" /> Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
