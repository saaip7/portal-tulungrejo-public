"use client"

import Image from "next/image"
import Link from "next/link"
import { useLinks } from "@/hooks/useLinks"
import { useRouter } from 'next/navigation'
import { RefreshCw } from "lucide-react"

export function Footer() {
  const { refreshCache, isCacheValid } = useLinks()
  const router = useRouter()

  const handleForceRefresh = () => {
    refreshCache()
    // notify other listeners in the app to force refetch
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('links:refresh'))
    }
    // Also ask Next.js to revalidate server components and re-fetch data
    try {
      router.refresh()
    } catch {
      // fallback: no-op
    }
  }

  const cacheStateLabel = isCacheValid() ? "Cached (1 hour)" : "No Cache"

  return (
    <footer className="mt-8 sm:mt-12 md:mt-16">
      {/* Image Section */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/bottom/bottom-2.png"
          alt="Gedung Balai Desa Tulungrejo"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      {/* Footer Content */}
      <div className="bg-white text-gray-800 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-[5vw]">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            {/* Left Side - Menu Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 font-medium text-sm order-2 sm:order-1">
              <Link href="/" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Beranda
              </Link>
              <Link href="/profil" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Profil
              </Link>
              <Link href="/visi-misi" className="text-gray-800 hover:text-blue-800 transition-colors duration-200">
                Visi & Misi
              </Link>
            </div>

            {/* Right Side - Collaboration Text + Cache Control */}
            <div className="text-center sm:text-right order-1 sm:order-2 flex items-center gap-3">
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                Kolaborasi dengan{" "}
                <a 
                  href="https://www.instagram.com/lestaribumiaji/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:text-blue-800 transition-colors duration-200 underline"
                >
                  Lestari Bumiaji
                </a>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> | </span>
                <span className="sm:inline">KKN-PPM UGM 2025</span>
              </p>

              {/* Cache reset button (small) */}
              <div className="flex items-center ml-2">
                <button
                  onClick={handleForceRefresh}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 shadow-sm"
                  title={`Force refresh cache (${cacheStateLabel})`}
                  aria-label="Force refresh cache"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
