"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const menuItems = [
  { name: "Beranda", href: "/" },
  { name: "Profil Desa", href: "/profil" },
  { name: "Visi Misi", href: "/visi-misi" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-grey">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[5vw]">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-20 h-8 sm:w-24 sm:h-10">
                <Image
                  src="/logo_trj.png"
                  alt="Logo Desa Tulungrejo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 96px"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 font-medium text-sm lg:text-base transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Floating Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Floating Menu */}
          <div className="absolute top-16 sm:top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="mt-2 sm:mt-4 space-y-1 sm:space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 sm:px-4 sm:py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-sm sm:text-base rounded-xl transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
