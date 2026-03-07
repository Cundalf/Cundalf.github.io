import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const yearsOfExperience = Math.floor(
  (new Date().getTime() - new Date("2015-02-01").getTime()) / (1000 * 60 * 60 * 24 * 365.25),
)

export const metadata: Metadata = {
  title: "Agustín Cundari - Problem Solver & Software Engineer",
  description: `Ingeniero de Software y 'Navaja Suiza' tecnológica con más de ${yearsOfExperience} años de experiencia. Especialista en IA, CI/CD, infraestructura y optimización.`,
  keywords: ["Problem Solver", "Ingeniero de Software", "Software Engineer", "Desarrollador Full Stack", "Arquitecto de Soluciones", "Inteligencia Artificial", "CI/CD", "DevOps", "AWS", "Cost Optimization", "JavaScript", "React", "Node.js", "Python"],
  authors: [{ name: "Agustín Cundari" }],
  creator: "Agustín Cundari",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://cundalf.github.io",
    title: "Agustín Cundari - Problem Solver & Software Engineer",
    description: `Ingeniero de Software y 'Navaja Suiza' tecnológica con más de ${yearsOfExperience} años de experiencia. Especialista en IA, CI/CD, infraestructura y optimización.`,
    siteName: "Agustín Cundari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Cundari - Problem Solver & Software Engineer",
    description: `Ingeniero de Software y 'Navaja Suiza' tecnológica con más de ${yearsOfExperience} años de experiencia. Especialista en IA, CI/CD, infraestructura y optimización.`,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.png", color: "#2563eb" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Agustín Cundari",
              url: "https://cundalf.github.io",
              jobTitle: "Software Engineer & Problem Solver",
              sameAs: [
                "https://github.com/Cundalf"
              ],
              knowsAbout: [
                "Software Engineering",
                "Artificial Intelligence",
                "AWS",
                "CI/CD",
                "DevOps",
                "Cost Optimization",
                "Cloud Architecture",
                "Frontend Development",
                "Backend Development"
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
