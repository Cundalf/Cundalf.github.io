"use client"

import { Mail, Linkedin, Github, Gamepad2, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "acundari95@gmail.com",
      href: "mailto:acundari95@gmail.com",
      action: t("contact.email"),
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/cundalf",
      href: "https://www.linkedin.com/in/cundalf",
      action: t("contact.linkedin"),
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/Cundalf",
      href: "https://github.com/Cundalf",
      action: t("contact.github"),
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Itch.io",
      value: "cundalf.itch.io",
      href: "https://cundalf.itch.io/",
      action: t("contact.itch"),
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">{t("contact.subtitle")}</p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{t("contact.description")}</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg text-slate-900 dark:text-white">{method.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">{method.value}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <a
                      href={method.href}
                      target={method.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={method.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                    >
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location info */}
          <Card className="text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="h-5 w-5" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
