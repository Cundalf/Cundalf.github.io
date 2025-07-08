"use client"

import { Calendar, MapPin, Badge } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.grupo-esfera.title"),
      company: t("experience.grupo-esfera.company"),
      period: t("experience.grupo-esfera.period"),
      description: t("experience.grupo-esfera.description"),
      location: "Argentina",
      current: true,
      technologies: ["OpenAI", "GitLab", "CI/CD", "AWS EC2", "AWS ECS", "Docker", "DevOps"],
    },
    {
      title: t("experience.freelance.title"),
      company: t("experience.freelance.company"),
      period: t("experience.freelance.period"),
      description: t("experience.freelance.description"),
      location: "Remote",
      current: false,
      technologies: ["ELK Stack", "Python", "Celery", "Redis", "Kubernetes"],
    },
    {
      title: t("experience.lomas.title"),
      company: t("experience.lomas.company"),
      period: t("experience.lomas.period"),
      description: t("experience.lomas.description"),
      location: "San Isidro, Buenos Aires",
      current: false,
      technologies: ["PHP", "JavaScript", "MySQL", "Visual Basic", "CodeIgniter", "jQuery"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("experience.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                      exp.current
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white dark:bg-slate-900 border-blue-300 dark:border-blue-700"
                    }`}
                  />

                  <div className="ml-16 w-full">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl text-slate-900 dark:text-white">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </CardDescription>
                          </div>
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 w-fit">
                              {t("experience.current")}
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
