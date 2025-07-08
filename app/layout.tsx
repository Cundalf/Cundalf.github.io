import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agustín Cundari - Full Stack Developer",
  description: "Desarrollador Full Stack con más de 9 años de experiencia creando soluciones digitales innovadoras",
  keywords: ["desarrollador", "full stack", "javascript", "react", "node.js", "python", "aws"],
  authors: [{ name: "Agustín Cundari" }],
  creator: "Agustín Cundari",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://cundalf.github.io",
    title: "Agustín Cundari - Full Stack Developer",
    description: "Desarrollador Full Stack con más de 9 años de experiencia creando soluciones digitales innovadoras",
    siteName: "Agustín Cundari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Cundari - Full Stack Developer",
    description: "Desarrollador Full Stack con más de 9 años de experiencia creando soluciones digitales innovadoras",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
