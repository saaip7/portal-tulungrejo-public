import { useState, useEffect } from 'react'
import { linksService, type LinkData } from '@/lib/services/links'

export const useLinks = () => {
  const [links, setLinks] = useState<LinkData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLinks = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await linksService.getAllLinks()
      setLinks(data)
    } catch (err) {
      console.error("Error fetching links:", err)
      setError(err instanceof Error ? err.message : 'Failed to fetch links')
      
      // Fallback to mock data if API call fails
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
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLinks()
  }, [])

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

  return {
    links,
    groupedLinks,
    loading,
    error,
    refetch: fetchLinks,
  }
}
