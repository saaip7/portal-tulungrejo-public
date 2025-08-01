import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portal Informasi Desa Tulungrejo",
  description: "Temukan berbagai tautan penting dan layanan digital Desa Tulungrejo di sini.",
  keywords: "Desa Tulungrejo, Portal Informasi, Layanan Digital, Sosial Media",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
