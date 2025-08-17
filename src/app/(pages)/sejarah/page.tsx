"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Users, Download } from "lucide-react"
import Link from "next/link"
import { HeroSlideshow } from "@/components/hero-slideshow"

export default function SejarahDesa() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const villageLeaders = [
    // Masa Kolonial
    { name: "Sutrono Al-Buki", years: "1835–1878", period: "Masa Kolonial" },
    { name: "Kartinah", years: "1878–1893", period: "Masa Kolonial" },
    { name: "Ruki", years: "1893–1916", period: "Masa Kolonial" },
    { name: "Dul Wongsosari", years: "1916–1922", period: "Masa Kolonial" },
    { name: "Siyah", years: "1922–1925", period: "Masa Kolonial" },
    { name: "Mukri", years: "1925–1932", period: "Masa Kolonial" },
    { name: "Martorejo Periode I", years: "1932–1947", period: "Masa Kolonial" },
    // Masa Revolusi
    { name: "Makali", years: "1947–1948", period: "Masa Revolusi" },
    { name: "Achmad", years: "1948–1950", period: "Masa Revolusi" },
    { name: "Martorejo Periode II", years: "1950–1967", period: "Masa Revolusi" },
    // Masa Pembangunan
    { name: "Mulyono", years: "1967", period: "Masa Pembangunan" },
    { name: "Soekaryo", years: "1967–1972", period: "Masa Pembangunan" },
    { name: "Armanoe M", years: "1972–1990", period: "Masa Pembangunan" },
    { name: "Prawoto", years: "1990–2007", period: "Masa Pembangunan" },
    { name: "Prasetyono", years: "2007–2013", period: "Masa Pembangunan" },
    { name: "Suliono", years: "2013–sekarang", period: "Masa Pembangunan" },
  ]

  // Color map for each historical period (uses Tailwind color names)
  const periodColorMap: Record<string, {
    dot: string
    bgActive: string
    borderActive: string
    badgeBg: string
    badgeText: string
  }> = {
    "masa kolonial": {
      dot: "bg-amber-600",
      bgActive: "bg-amber-50",
      borderActive: "border-amber-500",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
    },
    "masa revolusi": {
      dot: "bg-rose-600",
      bgActive: "bg-rose-50",
      borderActive: "border-rose-500",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-800",
    },
    "masa pembangunan": {
      dot: "bg-emerald-600",
      bgActive: "bg-emerald-50",
      borderActive: "border-emerald-500",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineElement = timelineRef.current
        const rect = timelineElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const timelineHeight = timelineElement.offsetHeight

        // Calculate how much of the timeline is visible
        const visibleTop = Math.max(0, windowHeight - rect.top)
        const visibleHeight = Math.min(visibleTop, timelineHeight)
        const progress = Math.min(visibleHeight / timelineHeight, 1)

        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadHistory = () => {
    window.open("/documents/sejarah-desa-tulungrejo-2025.pdf", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSlideshow
        slides={[
          {
            image: "/hero/hero1.png",
            title: "Portal Informasi Desa Tulungrejo",
            description:
              "Temukan sosial media, layanan publik, dan informasi darurat desa dalam satu tempat.",
            buttonText: "Jelajahi Portal",
            buttonLink: "/",
          },
          {
            image: "/hero/hero2-1 crop.jpg",
            title: "Profil Desa Tulungrejo",
            description:
              "Pelajari sejarah, struktur organisasi, dan potensi desa yang kaya akan budaya dan tradisi.",
            buttonText: "Lihat Profil",
            buttonLink: "/profil",
          },
          {
            image: "/hero/hero 3.png",
            title: "Visi & Misi Desa",
            description:
              "Pahami visi, misi, dan tujuan pembangunan desa untuk masa depan yang berkelanjutan.",
            buttonText: "Baca Visi Misi",
            buttonLink: "/visi-misi",
          },
        ]}
        autoPlayInterval={6000}
      />

      <main className="container mx-auto px-4 pb-8 max-w-6xl">
        {/* Sejarah Lengkap */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 text-center text-2xl flex items-center justify-center gap-2">
                <Crown className="w-6 h-6" />
                Sejarah Desa Tulungrejo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Terletak di lereng utara Kota Batu, Desa Tulungrejo merupakan salah satu kawasan dataran tinggi dengan
                  udara sejuk dan tanah yang sangat subur. Desa ini termasuk dalam wilayah Kecamatan Bumiaji, dengan
                  luas sekitar 807 hektare dan terbagi ke dalam lima dusun: Gondang, Kekep, Gerdu, Junggo, dan Wonorejo.
                  Dari jumlah penduduk yang mencapai lebih dari 9.000 jiwa, mayoritas menggantungkan hidup pada sektor
                  pertanian dan hortikultura. Apel, kentang, wortel, dan tomat menjadi komoditas unggulan yang telah
                  membentuk identitas desa ini selama puluhan tahun.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Namun Tulungrejo bukan hanya soal pertanian. Di balik hamparan kebun dan ladang yang menghijau, desa
                  ini menyimpan sejarah panjang yang membentang sejak masa kerajaan Hindu-Buddha, Islam, kolonial,
                  hingga era kemerdekaan dan pembangunan modern. Setiap generasi di Tulungrejo telah mewariskan
                  nilai-nilai luhur yang tercermin dalam budaya dan tradisi mereka—dari ritual Atur Pisungsung dan Susuk
                  Wangan yang menghormati alam, hingga bentuk arsitektur dan ruang sosial yang menyatu dengan sejarah.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Meskipun belum ditemukan prasasti khusus di Tulungrejo, banyak bukti sejarah di sekitarnya menunjukkan
                  bahwa kawasan ini termasuk dalam lanskap spiritual dan pertanian kerajaan Majapahit. Prasasti Jiwu II
                  dari tahun 1486 M, misalnya, menyebut wilayah ini sebagai tanah perdikan atau sima—tanda bahwa daerah
                  ini dianggap penting secara spiritual dan strategis oleh istana.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Masuknya Islam ke Tulungrejo terjadi secara bertahap, dibawa oleh para pengembara, pejuang, dan tokoh
                  spiritual dari berbagai daerah. Tokoh seperti Eyang Jugo, Mbah Mbatu (Abu Ghonaim), dan Bambang Selo
                  Utomo dikenang sebagai pembawa ajaran Islam yang membaur dengan adat lokal. Di kawasan perbatasan
                  Dusun Gerdu dan Junggo, masyarakat membangun Balai Agung Watugambang, yang kemudian menjadi simbol
                  konsolidasi dan kebangkitan masyarakat berbasis nilai Islam dan budaya Jawa.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Pada masa kolonial Belanda, Tulungrejo berkembang menjadi kawasan perkebunan penting. Komoditas
                  seperti kopi, kina, dan apel diperkenalkan oleh pengusaha Eropa, dan lahan-lahan produktif dibagi
                  dalam sistem blok atau "bon". Bangunan kolonial seperti Fruphus (yang kini menjadi Kantor Desa) dan
                  Hotel Selecta dibangun pada masa ini, serta sistem sosial mulai mengalami pergeseran dari gotong
                  royong ke arah struktur kerja kapitalistik.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Ketika Jepang mengambil alih kekuasaan di Indonesia tahun 1942, masyarakat Tulungrejo mengalami masa
                  sulit. Lahan pertanian diambil alih untuk kebutuhan perang, dan hasil panen harus disetorkan ke
                  pemerintah militer Jepang. Bahkan, gua-gua buatan dibangun sebagai tempat penyimpanan logistik.
                  Kekurangan pangan dan ancaman kerja paksa menjadi momok harian.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Tahun 1947, Tulungrejo kembali menjadi titik penting dalam sejarah nasional saat Belanda melancarkan
                  Agresi Militer I. Karena berada di jalur utara menuju Kota Batu, desa ini menjadi garis depan
                  perlawanan rakyat. Warga menebang pohon, merusak jalan, dan menghadang kendaraan militer Belanda.
                  Beberapa bangunan sempat dibumihanguskan agar tidak digunakan musuh. Meski akhirnya pasukan Belanda
                  berhasil menguasai wilayah ini, semangat perlawanan tidak pernah padam.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Pasca-kemerdekaan, masyarakat Tulungrejo mulai menata kembali kehidupan mereka. Di tahun 1950-an, para
                  petani mengembangkan varietas apel lokal seperti Manalagi, melanjutkan warisan apel yang sebelumnya
                  dibawa oleh kolonial. Pada era 1970–80an, pertanian apel semakin berkembang pesat, diperkuat dengan
                  munculnya varietas Wangli yang menjadi kebanggaan petani Tulungrejo.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Namun seiring perubahan zaman, pertanian monokultur mulai menghadapi tantangan. Menurunnya kesuburan
                  tanah, masuknya buah impor, dan perubahan iklim global membuat petani kembali berinovasi. Mereka kini
                  mengembangkan pertanian campuran, termasuk bunga hias dan sayuran, serta mulai bergerak ke arah wisata
                  agro dan ekowisata.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Tahun 2005 menjadi tonggak penting saat Pura Giri Arjuno resmi didirikan. Pura ini tidak hanya menjadi
                  pusat spiritual umat Hindu di lereng Gunung Arjuno, tetapi juga menjadi simbol keterbukaan Tulungrejo
                  sebagai desa multikultural yang mampu merangkul warisan masa lalu dalam bentuk yang relevan di masa
                  kini.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify">
                  Hari ini, Tulungrejo bukan hanya desa penghasil apel atau tempat berudara sejuk. Ia adalah ruang hidup
                  yang menyatukan sejarah, budaya, dan spiritualitas dalam harmoni yang terus berkembang. Di tengah
                  derasnya arus modernisasi, Tulungrejo tetap menjaga nilai-nilai leluhur, sekaligus terbuka pada
                  potensi baru yang membawa manfaat bagi generasi mendatang.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline Kepemimpinan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Timeline Kepemimpinan Desa</h2>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Kepala Desa Tulungrejo (1835 - Sekarang)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={timelineRef} className="relative">
                {/* Animated Timeline Line */}
                <div className="absolute left-8 top-0 w-1 bg-gray-200 h-full"></div>
                <div
                  className="absolute left-8 top-0 w-1 bg-blue-600 transition-all duration-300 ease-out"
                  style={{ height: `${scrollProgress * 100}%` }}
                ></div>

                <div className="space-y-8">
                  {villageLeaders.map((leader, index) => {
                    const isActive = scrollProgress > index / villageLeaders.length

                    // normalize period key to lowercase for lookup
                    const key = leader.period.toLowerCase()
                    const colors = periodColorMap[key] || periodColorMap["masa pembangunan"]

                    return (
                      <div key={index} className="relative flex items-center">
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                            isActive ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        ></div>

                        {/* Content */}
                        <div className="ml-16 flex-1">
                          <div
                            className={`p-4 rounded-lg border-l-4 transition-all duration-500 ${
                                isActive
                                  ? "bg-blue-50 border-blue-500 shadow-md transform translate-x-0"
                                  : "bg-gray-50 border-gray-300 transform translate-x-4 opacity-70"
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-gray-800">{leader.name}</h3>
                                <p className="text-sm text-gray-600">{leader.years}</p>
                              </div>
                              <div className="text-right">
                                <span className={`text-xs px-2 py-1 rounded-full ${colors.badgeBg} ${colors.badgeText}`}>
                                  {leader.period}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Download Button */}
        <section className="mb-12">
          <div className="text-center">
            <Link href="/documents/updated">
              <Button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Profil Desa Tulungrejo Tahun 2025
              </Button>
            </Link>
            <p className="text-gray-600 text-sm mt-2">Dokumen lengkap profil desa dalam format PDF</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
