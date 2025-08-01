import { NextResponse } from "next/server"

// Mock data - replace with actual database connection
const mockLinks = [
  {
    _id: "1",
    title: "Instagram Pemdes Tulungrejo",
    url: "https://instagram.com/tulungrejo",
    category: "Sosial Media",
    image: "https://res.cloudinary.com/demo/image/upload/instagram-icon.jpg",
  },
  {
    _id: "2",
    title: "Instagram Desa Wisata Tulungrejo",
    url: "https://instagram.com/desawisatatulungrejo",
    category: "Sosial Media",
    image: "https://res.cloudinary.com/demo/image/upload/instagram-icon.jpg",
  },
  {
    _id: "3",
    title: "Tiktok Desa Tulungrejo",
    url: "https://tiktok.com/@tulungrejo",
    category: "Sosial Media",
    image: "https://res.cloudinary.com/demo/image/upload/tiktok-icon.jpg",
  },
  {
    _id: "4",
    title: "Kontak Pelayanan Administrasi",
    url: "https://wa.me/6281234567890",
    category: "Layanan Masyarakat",
    image: "https://res.cloudinary.com/demo/image/upload/whatsapp-icon.jpg",
  },
  {
    _id: "5",
    title: "Email Resmi Desa Tulungrejo",
    url: "mailto:info@tulungrejo.desa.id",
    category: "Layanan Masyarakat",
    image: "https://res.cloudinary.com/demo/image/upload/email-icon.jpg",
  },
  {
    _id: "6",
    title: "Website Resmi Desa Tulungrejo",
    url: "https://tulungrejo.desa.id",
    category: "Informasi & Survei",
    image: "https://res.cloudinary.com/demo/image/upload/website-icon.jpg",
  },
  {
    _id: "7",
    title: "Survei Kepuasan Masyarakat",
    url: "https://forms.google.com/survey-tulungrejo",
    category: "Informasi & Survei",
    image: "https://res.cloudinary.com/demo/image/upload/survey-icon.jpg",
  },
  {
    _id: "8",
    title: "BPBD Kota Batu",
    url: "https://bpbd.batukota.go.id",
    category: "Kontak Darurat",
    image: "https://res.cloudinary.com/demo/image/upload/emergency-icon.jpg",
  },
  {
    _id: "9",
    title: "Pemadam Kebakaran",
    url: "tel:113",
    category: "Kontak Darurat",
    image: "https://res.cloudinary.com/demo/image/upload/fire-dept-icon.jpg",
  },
  {
    _id: "10",
    title: "Public Safety Center Kota Batu",
    url: "tel:112",
    category: "Kontak Darurat",
    image: "https://res.cloudinary.com/demo/image/upload/police-icon.jpg",
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(mockLinks)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 })
  }
}
