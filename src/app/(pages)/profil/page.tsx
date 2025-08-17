"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Download } from "lucide-react";
import { HeroSlideshow } from "@/components/hero-slideshow";
import monografiData from "@/data/monografi.json";

export default function ProfilDesa() {
  // const handleDownloadProfile = () => {
  //   // Link to Google Drive document
  //   window.open(
  //     "https://drive.google.com/file/d/1vI3MxzWzjHQaquqUiycCvsz8FOyclPDc/view",
  //     "_blank"
  //   );
  // };

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
        {/* History Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Sejarah Desa
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Sejarah Desa Tulungrejo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Desa Tulungrejo terletak di lereng utara Kota Batu, Kecamatan
                  Bumiaji. Luasnya sekitar 807 hektare dan terbagi menjadi lima
                  dusun: Gondang, Kekep, Gerdu, Junggo, dan Wonorejo. Dengan
                  jumlah penduduk lebih dari 9.000 jiwa, sebagian besar
                  masyarakat menggantungkan hidup pada sektor pertanian. Apel,
                  kentang, wortel, dan tomat menjadi komoditas unggulan serta
                  identitas desa.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Sejarah Tulungrejo membentang sejak era Hindu-Buddha hingga
                  masa kemerdekaan. Bukti-bukti historis menunjukkan kawasan ini
                  sudah penting sejak masa Majapahit. Penyebaran Islam juga
                  membawa pengaruh budaya melalui tokoh-tokoh seperti Eyang Jugo
                  dan Mbah Mbatu, yang meninggalkan warisan tradisi yang masih
                  hidup hingga kini.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Pada masa kolonial Belanda, Tulungrejo berkembang sebagai
                  pusat perkebunan, diperkenalkannya apel menjadi tonggak besar
                  bagi desa ini. Masa penjajahan Jepang dan Agresi Militer
                  Belanda membawa penderitaan, namun juga memperlihatkan
                  semangat perlawanan rakyat.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Pasca kemerdekaan, pertanian apel terus berkembang pesat
                  hingga menjadi ikon Kota Batu. Kini, selain apel, masyarakat
                  juga mengembangkan hortikultura, bunga hias, serta wisata agro
                  dan ekowisata untuk menjawab tantangan zaman.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Sebagai desa multikultural, Tulungrejo memiliki Pura Giri
                  Arjuno (didirikan 2005) yang menjadi simbol toleransi dan
                  pusat spiritual umat Hindu di lereng Gunung Arjuno.
                </p>
                <div className="mt-6 text-center">
                  <a href="/sejarah" aria-label="Pelajari sejarah lebih lanjut">
                    <Button className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Pelajari sejarah lebih lanjut
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SOTK Desa */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            SOTK Desa
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  Struktur Organisasi dan Tata Kerja Pemerintah Desa Tulungrejo
                </p>
                <div className="relative w-full max-w-4xl mx-auto">
                  <Image
                    src="/profil/sotk.jpg"
                    alt="Struktur Organisasi dan Tata Kerja Desa Tulungrejo"
                    width={1536}
                    height={1196}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Monografi Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Monografi Desa
          </h2>

          {/* Profil Desa & Batas Wilayah */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Profil Wilayah
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Luas Wilayah</h3>
                  <p className="text-gray-600">
                    {monografiData.profil_desa.luas_wilayah_km2} km² (
                    {monografiData.profil_desa.luas_wilayah_ha} ha)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah Dusun</h3>
                  <p className="text-gray-600">
                    {monografiData.profil_desa.jumlah_dusun} dusun
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah RT/RW</h3>
                  <p className="text-gray-600">
                    {monografiData.profil_desa.jumlah_rt} RT /{" "}
                    {monografiData.profil_desa.jumlah_rw} RW
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Batas Wilayah</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Utara: {monografiData.batas_wilayah.utara}</li>
                    <li>• Timur: {monografiData.batas_wilayah.timur}</li>
                    <li>• Selatan: {monografiData.batas_wilayah.selatan}</li>
                    <li>• Barat: {monografiData.batas_wilayah.barat}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Demografi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Total Penduduk
                  </h3>
                  <p className="text-gray-600">
                    {monografiData.total_penduduk.jumlah.toLocaleString()} jiwa
                  </p>
                  <p className="text-sm text-gray-500">
                    Laki-laki:{" "}
                    {monografiData.total_penduduk.laki_laki.toLocaleString()} |
                    Perempuan:{" "}
                    {monografiData.total_penduduk.perempuan.toLocaleString()}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah KK</h3>
                  <p className="text-gray-600">
                    {monografiData.total_penduduk.jumlah_kk.toLocaleString()}{" "}
                    kepala keluarga
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah Rumah</h3>
                  <p className="text-gray-600">
                    {monografiData.total_penduduk.jumlah_rumah.toLocaleString()}{" "}
                    rumah
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Jarak ke Pusat Pemerintahan
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>
                      • Kec. Bumiaji:{" "}
                      {
                        monografiData.jarak_ke_pusat_pemerintahan
                          .kantor_kecamatan_bumiaji_km
                      }{" "}
                      km
                    </li>
                    <li>
                      • Kota Batu:{" "}
                      {
                        monografiData.jarak_ke_pusat_pemerintahan
                          .sekretariat_daerah_kota_batu_km
                      }{" "}
                      km
                    </li>
                    <li>
                      • Prov. Jawa Timur:{" "}
                      {
                        monografiData.jarak_ke_pusat_pemerintahan
                          .ibu_kota_provinsi_km
                      }{" "}
                      km
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Penduduk per Dusun */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Jumlah Penduduk per Dusun
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-800">
                        Dusun
                      </th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-800">
                        Laki-laki
                      </th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-800">
                        Perempuan
                      </th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-800">
                        Total
                      </th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-800">
                        KK
                      </th>
                      <th className="text-center py-2 px-3 font-semibold text-gray-800">
                        Rumah
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {monografiData.jumlah_penduduk_per_dusun.map(
                      (dusun, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2 px-3 font-medium text-gray-800">
                            {dusun.nama_dusun}
                          </td>
                          <td className="py-2 px-3 text-center text-gray-600">
                            {dusun.laki_laki.toLocaleString()}
                          </td>
                          <td className="py-2 px-3 text-center text-gray-600">
                            {dusun.perempuan.toLocaleString()}
                          </td>
                          <td className="py-2 px-3 text-center font-semibold text-gray-800">
                            {dusun.jumlah.toLocaleString()}
                          </td>
                          <td className="py-2 px-3 text-center text-gray-600">
                            {dusun.jumlah_kk.toLocaleString()}
                          </td>
                          <td className="py-2 px-3 text-center text-gray-600">
                            {dusun.jumlah_rumah.toLocaleString()}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Pekerjaan & Pendidikan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Mata Pencaharian (%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pertanian</span>
                    <span className="font-semibold text-gray-700">
                      {monografiData.pekerjaan_masyarakat.pertanian}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Swasta</span>
                    <span className="font-semibold text-gray-700">
                      {monografiData.pekerjaan_masyarakat.swasta}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">PNS/TNI/Polri</span>
                    <span className="font-semibold text-gray-700">
                      {monografiData.pekerjaan_masyarakat.pns_tni_polri}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Lainnya</span>
                    <span className="font-semibold text-gray-700">
                      {monografiData.pekerjaan_masyarakat.lainnya}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  Tingkat Pendidikan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Belum/Tidak Sekolah</span>
                    <span className="font-medium">
                      {monografiData.tingkat_pendidikan.belum_tidak_sekolah.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Belum Tamat SD</span>
                    <span className="font-medium">
                      {monografiData.tingkat_pendidikan.belum_tamat_sd.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SD</span>
                    <span className="font-medium">
                      {monografiData.tingkat_pendidikan.sd.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SLTP</span>
                    <span className="font-medium">
                      {monografiData.tingkat_pendidikan.sltp.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SLTA</span>
                    <span className="font-medium">
                      {monografiData.tingkat_pendidikan.slta.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">D1/D2/D3</span>
                    <span className="font-medium">
                      {(
                        monografiData.tingkat_pendidikan.d1 +
                        monografiData.tingkat_pendidikan.d2 +
                        monografiData.tingkat_pendidikan.d3
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">S1/S2</span>
                    <span className="font-medium">
                      {(
                        monografiData.tingkat_pendidikan.s1 +
                        monografiData.tingkat_pendidikan.s2
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center text-sm text-gray-600 mt-6">
            Data Monografi 2024
          </div>
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
            <p className="text-gray-700 text-sm mt-2">Dokumen lengkap profil desa dalam format PDF</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
