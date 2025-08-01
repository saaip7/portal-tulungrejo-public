"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, CheckCircle, TrendingUp } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function VisiMisi() {
  const missionPoints = [
    {
      title: "Meningkatkan Kesejahteraan Masyarakat",
      description:
        "Mengembangkan ekonomi desa melalui sektor pertanian, pariwisata, dan UMKM untuk meningkatkan pendapatan masyarakat.",
    },
    {
      title: "Memperkuat Tata Kelola Pemerintahan",
      description:
        "Menyelenggarakan pemerintahan yang transparan, akuntabel, dan partisipatif dengan melibatkan seluruh elemen masyarakat.",
    },
    {
      title: "Mengembangkan Infrastruktur Desa",
      description:
        "Membangun dan memperbaiki infrastruktur dasar seperti jalan, irigasi, dan fasilitas umum untuk mendukung aktivitas masyarakat.",
    },
    {
      title: "Meningkatkan Kualitas Pendidikan",
      description:
        "Mendukung program pendidikan dan pelatihan untuk meningkatkan kualitas sumber daya manusia di desa.",
    },
    {
      title: "Menjaga Kelestarian Lingkungan",
      description:
        "Melaksanakan program konservasi alam dan pengelolaan lingkungan yang berkelanjutan untuk generasi mendatang.",
    },
    {
      title: "Mengembangkan Potensi Wisata",
      description:
        "Mengoptimalkan potensi wisata alam dan budaya untuk meningkatkan pendapatan asli desa dan membuka lapangan kerja.",
    },
  ]

  const developmentGoals = [
    {
      title: "Desa Mandiri Ekonomi",
      description: "Menciptakan kemandirian ekonomi melalui pengembangan sektor unggulan dan pemberdayaan masyarakat.",
      icon: TrendingUp,
    },
    {
      title: "Desa Digital",
      description: "Mengimplementasikan teknologi digital dalam pelayanan publik dan pengembangan ekonomi desa.",
      icon: Target,
    },
    {
      title: "Desa Wisata Berkelanjutan",
      description: "Mengembangkan pariwisata yang ramah lingkungan dan memberikan manfaat optimal bagi masyarakat.",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
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
          <Card className="bg-white/80 backdrop-blur-sm border-green-200">
            <CardHeader className="text-center">
              <CardTitle className="text-green-800 flex items-center justify-center gap-2 text-2xl">
                <Eye className="w-6 h-6" />
                VISI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed italic">
                  "Terwujudnya Desa Tulungrejo sebagai Desa Wisata yang Mandiri, Sejahtera, dan Berkelanjutan dengan
                  Tata Kelola Pemerintahan yang Baik"
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 flex items-center justify-center gap-2">
              <Target className="w-8 h-8" />
              MISI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionPoints.map((mission, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">{mission.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{mission.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Development Goals */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">Tujuan Pembangunan</h2>
            <p className="text-gray-600 mt-2">Target pencapaian jangka menengah Desa Tulungrejo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentGoals.map((goal, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <goal.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3">{goal.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Nilai-Nilai Desa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">GOTONG ROYONG</h3>
                  <p className="text-green-100 text-sm">Bekerja sama dalam membangun desa</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">TRANSPARANSI</h3>
                  <p className="text-green-100 text-sm">Keterbukaan dalam pengelolaan desa</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">INOVASI</h3>
                  <p className="text-green-100 text-sm">Mengembangkan ide-ide kreatif</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">BERKELANJUTAN</h3>
                  <p className="text-green-100 text-sm">Pembangunan ramah lingkungan</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
