"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-400 mb-2 text-sm">
            © {new Date().getFullYear()} Agustín Uriel Cundari. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
