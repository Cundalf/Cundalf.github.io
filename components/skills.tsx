"use client"

import { Code, Database, Cloud, Gamepad2, Settings, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: <Code className="h-8 w-8" />,
      skills: ["JavaScript", "TypeScript", "React", "Angular", "HTML5", "CSS3", "jQuery", "Bootstrap"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("skills.backend"),
      icon: <Layers className="h-8 w-8" />,
      skills: ["Node.js", "PHP", "Python", "C#", "Java", "Visual Basic"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("skills.database"),
      icon: <Database className="h-8 w-8" />,
      skills: ["MySQL", "SQLite", "Redis", "Intersystems Cache"],
      color: "from-purple-500 to-violet-500",
    },
    {
      title: t("skills.devops"),
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS (EC2, ECS)", "Docker", "Kubernetes", "GitLab CI/CD", "Linux", "DevOps"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: t("skills.gamedev"),
      icon: <Gamepad2 className="h-8 w-8" />,
      skills: ["Unity", "Unreal Engine 4/5", "C#", "Game Design", "Cocos Creator"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: t("skills.other"),
      icon: <Settings className="h-8 w-8" />,
      skills: ["Git", "Scrum", "OpenAI", "ELK Stack", "Celery", "GeneXus"],
      color: "from-slate-500 to-gray-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t("skills.title")}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
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
    </section>
  )
}
