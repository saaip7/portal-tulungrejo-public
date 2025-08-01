"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Calendar, Building } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function ProfilDesa() {
  const villageOfficials = [
    {
      name: "Bapak Suyanto",
      position: "Kepala Desa",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Ibu Siti Aminah",
      position: "Sekretaris Desa",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Bapak Ahmad Wijaya",
      position: "Bendahara Desa",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Bapak Bambang Sutrisno",
      position: "Kepala Urusan Pemerintahan",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const facilities = [
    { name: "Balai Desa", icon: Building, description: "Pusat pemerintahan dan pelayanan masyarakat" },
    { name: "Puskesmas Pembantu", icon: Building, description: "Layanan kesehatan dasar untuk warga" },
    { name: "SD Negeri Tulungrejo", icon: Building, description: "Pendidikan dasar untuk anak-anak desa" },
    { name: "Masjid Al-Ikhlas", icon: Building, description: "Tempat ibadah dan kegiatan keagamaan" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <Navbar />

      {/* Hero Section */}
      <HeroSlideshow
        slides={[
          {
            image: "/placeholder.svg?height=240&width=1200&text=Profil+Desa+Tulungrejo",
            title: "Profil Desa Tulungrejo",
            description: "Mengenal lebih dekat Desa Tulungrejo",
          },
          {
            image: "/placeholder.svg?height=240&width=1200&text=Sejarah+Desa",
            title: "Sejarah dan Budaya",
            description: "Warisan leluhur yang terus dilestarikan",
          },
          {
            image: "/placeholder.svg?height=240&width=1200&text=Masyarakat+Desa",
            title: "Masyarakat Desa",
            description: "Kehidupan harmonis masyarakat Tulungrejo",
          },
        ]}
        autoPlayInterval={6000}
      />

      <main className="container mx-auto px-4 pb-8 max-w-6xl">
        {/* Overview Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Informasi Umum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Lokasi</h3>
                  <p className="text-gray-600">Kecamatan Bumiaji, Kota Batu, Jawa Timur</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Luas Wilayah</h3>
                  <p className="text-gray-600">12,5 km²</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Ketinggian</h3>
                  <p className="text-gray-600">800-1.200 mdpl</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Batas Wilayah</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Utara: Desa Punten</li>
                    <li>• Selatan: Desa Bumiaji</li>
                    <li>• Timur: Desa Sumbergondo</li>
                    <li>• Barat: Desa Pandanrejo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Demografi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah Penduduk</h3>
                  <p className="text-gray-600">3.245 jiwa</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah KK</h3>
                  <p className="text-gray-600">892 kepala keluarga</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Kepadatan Penduduk</h3>
                  <p className="text-gray-600">260 jiwa/km²</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mata Pencaharian Utama</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Pertanian: 45%</li>
                    <li>• Pariwisata: 25%</li>
                    <li>• Perdagangan: 20%</li>
                    <li>• Lainnya: 10%</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Sejarah Desa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Desa Tulungrejo memiliki sejarah panjang yang dimulai pada abad ke-18. Nama "Tulungrejo" berasal dari
                  bahasa Jawa yang berarti "menolong untuk mencapai kemakmuran". Desa ini awalnya merupakan daerah hutan
                  yang kemudian dibuka oleh para pendatang dari Jawa Tengah.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pada masa kolonial Belanda, wilayah ini dikembangkan sebagai daerah perkebunan kopi dan teh karena
                  kondisi geografis yang mendukung. Setelah kemerdekaan Indonesia, Desa Tulungrejo terus berkembang
                  menjadi daerah wisata alam yang terkenal dengan pemandangan pegunungan yang indah.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Saat ini, Desa Tulungrejo dikenal sebagai salah satu destinasi agrowisata terbaik di Kota Batu, dengan
                  berbagai atraksi wisata seperti kebun apel, wisata petik buah, dan pemandangan alam yang menakjubkan.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Village Officials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Perangkat Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {villageOfficials.map((official, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200 text-center">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={official.image || "/placeholder.svg"}
                      alt={official.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{official.name}</h3>
                  <p className="text-green-600 text-sm">{official.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Fasilitas Desa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{facility.name}</h3>
                    <p className="text-gray-600 text-sm">{facility.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
