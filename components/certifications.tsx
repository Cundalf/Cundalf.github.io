"use client"

import { Award, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function Certifications() {
  const { t } = useLanguage()

  const certifications = [
    {
      title: "Product Discovery for Agile Business Certified",
      issuer: "Scrum México",
      date: "Diciembre 2024",
      recent: true,
      skills: ["Product Discovery", "Agile Business"],
    },
    {
      title: "Experto Universitario de Programación en videojuegos con Unreal Engine",
      issuer: "Centro de e-Learning UTN FRBA",
      date: "Octubre 2023",
      recent: true,
      skills: ["Unreal Engine", "Game Development"],
    },
    {
      title: "Certified Scrum Developer® (CSD®)",
      issuer: "Scrum Alliance",
      date: "Marzo 2023",
      recent: true,
      skills: ["Scrum", "Agile Development"],
    },
    {
      title: "Programa de Formación Profesional en Videojuegos",
      issuer: "Extensión Universitaria - UTN Buenos Aires",
      date: "Julio 2023",
      recent: true,
      skills: ["Unity", "Game Design", "Cocos Creator"],
    },
    {
      title: "Professional Full-Stack Developer",
      issuer: "Centro de e-Learning UTN FRBA",
      date: "Septiembre 2021",
      recent: false,
      skills: ["Full Stack Development"],
    },
    {
      title: "Node: De cero a experto",
      issuer: "Udemy",
      date: "Diciembre 2020",
      recent: false,
      skills: ["Node.js", "Backend Development"],
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("certifications.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Award className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-slate-900 dark:text-white leading-tight">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-semibold">
                          {cert.issuer}
                        </CardDescription>
                      </div>
                    </div>
                    {cert.recent && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {t("certifications.recent")}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
