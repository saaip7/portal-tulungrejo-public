import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-16">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/placeholder.svg?height=256&width=1200"
          alt="Tulungrejo Agricultural Landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Footer Content */}
      <div className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Desa Tulungrejo</h3>
              <p className="text-green-100 text-sm">
                Portal informasi digital untuk masyarakat Desa Tulungrejo, menyediakan akses mudah ke berbagai layanan
                dan informasi penting.
              </p>
            </div>

            {/* Middle Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Kontak</h3>
              <div className="text-green-100 text-sm space-y-2">
                <p>📍 Desa Tulungrejo, Kota Batu</p>
                <p>📞 (0341) 123-4567</p>
                <p>✉️ info@tulungrejo.desa.id</p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Jam Pelayanan</h3>
              <div className="text-green-100 text-sm space-y-2">
                <p>Senin - Jumat: 08:00 - 16:00</p>
                <p>Sabtu: 08:00 - 12:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-700 mt-8 pt-6 text-center">
            <p className="text-green-100 text-sm">
              © 2025 Desa Tulungrejo. Kolaborasi dengan Lestari Bumiku | KKN-PPM UGM 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
