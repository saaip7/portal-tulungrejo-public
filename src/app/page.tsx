"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LinkSection } from "@/components/link-section"
import { Footer } from "@/components/footer"

interface LinkData {
  _id: string
  title: string
  url: string
  category: string
  image?: string
}

export default function TulungrejoPortal() {
  const [links, setLinks] = useState<LinkData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLinks()
  }, [])

  const fetchLinks = async () => {
    try {
      // Simulated API call - replace with actual endpoint
      const mockData: LinkData[] = [
        {
          _id: "1",
          title: "Instagram Pemdes Tulungrejo",
          url: "https://instagram.com/tulungrejo",
          category: "Sosial Media Resmi",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "2",
          title: "Instagram Desa Wisata Tulungrejo",
          url: "https://instagram.com/desawisatatulungrejo",
          category: "Sosial Media Resmi",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "3",
          title: "Tiktok Desa Tulungrejo",
          url: "https://tiktok.com/@tulungrejo",
          category: "Sosial Media Resmi",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "4",
          title: "Kontak Pelayanan Administrasi",
          url: "https://wa.me/6281234567890",
          category: "Kontak dan Pelayanan",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "5",
          title: "Email Resmi Desa Tulungrejo",
          url: "mailto:info@tulungrejo.desa.id",
          category: "Kontak dan Pelayanan",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "6",
          title: "Website Resmi Desa Tulungrejo",
          url: "https://tulungrejo.desa.id",
          category: "Informasi Lainnya",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "7",
          title: "Survei Kepuasan Masyarakat",
          url: "https://forms.google.com/survey-tulungrejo",
          category: "Informasi Lainnya",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "8",
          title: "BPBD Kota Batu",
          url: "https://bpbd.batukota.go.id",
          category: "Kontak Darurat",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "9",
          title: "Pemadam Kebakaran",
          url: "tel:113",
          category: "Kontak Darurat",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "10",
          title: "Public Safety Center Kota Batu",
          url: "tel:112",
          category: "Kontak Darurat",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "11",
          title: "Rumah Sakit Punten",
          url: "tel:0341-123456",
          category: "Kontak Darurat",
          image: "/placeholder.svg?height=40&width=40",
        },
        {
          _id: "12",
          title: "Puskesmas Bumiaji",
          url: "tel:0341-654321",
          category: "Kontak Darurat",
          image: "/placeholder.svg?height=40&width=40",
        },
      ]

      setLinks(mockData)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching links:", error)
      setLoading(false)
    }
  }

  const groupedLinks = links.reduce(
    (acc, link) => {
      if (!acc[link.category]) {
        acc[link.category] = []
      }
      acc[link.category].push(link)
      return acc
    },
    {} as Record<string, LinkData[]>,
  )

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700">Memuat portal informasi...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
          <LinkSection key={category} category={category} links={categoryLinks} onLinkClick={handleLinkClick} />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
