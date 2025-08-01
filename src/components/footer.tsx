import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-16">
      {/* Image Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/bottom/bottom-2.png"
          alt="Gedung Balai Desa Tulungrejo"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Footer Content */}
      <div className="bg-white text-gray-800 py-4 px-[5vw]">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8">
            {/* Left Side - Menu Links */}
            <div className="flex flex-row space-x-6 font-medium text-sm">
              <a href="/" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Beranda
              </a>
              <a href="/profil" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Profil
              </a>
              <a href="/visi-misi" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Visi & Misi
              </a>
            </div>

            {/* Right Side - Collaboration Text */}
            <div className="text-right">
              <p className="text-gray-800 text-sm">
                Kolaborasi dengan{" "}
                <a 
                  href="https://www.instagram.com/lestaribumiaji/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:text-blue-800 transition-colors duration-200 underline"
                >
                  Lestari Bumiaji
                </a>
                {" "}| KKN-PPM UGM 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
