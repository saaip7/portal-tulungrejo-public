"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Target, Download } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"
import visiMisiData from "@/data/visi-misi.json"

export default function VisiMisi() {
  const handleDownloadVisiMisi = () => {
    // Link to Google Drive document
    window.open("https://drive.google.com/file/d/1vI3MxzWzjHQaquqUiycCvsz8FOyclPDc/view", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSlideshow
        slides={[
          {
            image: "/placeholder.svg?height=240&width=1200&text=Visi+Misi+Desa",
            title: "Visi & Misi",
            description: "Arah dan tujuan pembangunan Desa Tulungrejo",
          },
          {
            image: "/placeholder.svg?height=240&width=1200&text=Pembangunan+Desa",
            title: "Pembangunan Berkelanjutan",
            description: "Membangun desa dengan prinsip keberlanjutan",
          },
          {
            image: "/placeholder.svg?height=240&width=1200&text=Masa+Depan+Desa",
            title: "Masa Depan Cerah",
            description: "Menuju desa mandiri dan sejahtera",
          },
        ]}
        autoPlayInterval={6000}
      />

      <main className="container mx-auto px-4 pb-8 max-w-6xl">
        {/* Vision Section */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-blue-800 flex items-center justify-center gap-2 text-2xl">
                <Eye className="w-6 h-6" />
                VISI DESA TULUNGREJO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-justify">{visiMisiData.visi_desa.deskripsi}</p>
                <div className="text-center bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <blockquote className="text-xl md:text-2xl font-bold text-blue-800 leading-relaxed italic">
                    "{visiMisiData.visi_desa.rumusan}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-blue-800 flex items-center justify-center gap-2 text-2xl">
                <Target className="w-6 h-6" />
                MISI DESA TULUNGREJO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-justify">{visiMisiData.misi_desa.deskripsi}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visiMisiData.misi_desa.rumusan.map((misi, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-sm">{misi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infographic Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Infografis Visi Misi</h2>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardContent className="p-6">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  <Image
                  src="/profil/visi-misi.jpg"
                  alt="Infografis Visi Misi Desa Tulungrejo"
                  layout="responsive"
                  width={800}
                  height={600}
                  className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Download Button */}
        <section className="mb-12">
          <div className="text-center">
            <Button
              onClick={handleDownloadVisiMisi}
              className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Profil Desa Tulungrejo Tahun 2025
            </Button>
            <p className="text-gray-700 text-sm mt-2">Dokumen lengkap profil desa dalam format PDF</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
