"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LinkSection } from "@/components/link-section"
import { Footer } from "@/components/footer"
import { useLinks } from "@/hooks/useLinks"

export default function TulungrejoPortal() {
  const { groupedLinks, loading, error, isUsingFallback, dismissFallback } = useLinks()

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }


  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto mb-4"></div>
          <p className="text-blue-800">Memuat portal informasi...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-red-700 mb-4">Gagal memuat data dari server</p>
          <p className="text-red-600 text-sm">Menggunakan data fallback</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-[10vw] py-8">
        {isUsingFallback && (
          <div className="mb-6">
            <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                <div className="text-sm">Gagal memuat data dari server — menampilkan data cadangan.</div>
              </div>
              <div>
                <button onClick={dismissFallback} className="text-sm text-yellow-800 underline">Tutup</button>
              </div>
            </div>
          </div>
        )}
  {/* Cache Status Indicator removed — moved into footer */}
        
        {Object.entries(groupedLinks).map(([category, categoryLinks]) => (
          <LinkSection key={category} category={category} links={categoryLinks} onLinkClick={handleLinkClick} />
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
