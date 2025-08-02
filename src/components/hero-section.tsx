import { HeroSlideshow } from "./hero-slideshow"

const slides = [
  {
    image: "/hero/hero1.png",
    title: "Portal Informasi Desa Tulungrejo",
    description: "Temukan sosial media, layanan publik, dan informasi darurat desa dalam satu tempat.",
    buttonText: "Jelajahi Portal",
    buttonLink: "/",
  },
  {
    image: "/hero/hero2-1 crop.jpg",
    title: "Profil Desa Tulungrejo",
    description: "Pelajari sejarah, struktur organisasi, dan potensi desa yang kaya akan budaya dan tradisi.",
    buttonText: "Lihat Profil",
    buttonLink: "/profil",
  },
  {
    image: "/hero/hero 3.png",
    title: "Visi & Misi Desa",
    description: "Pahami visi, misi, dan tujuan pembangunan desa untuk masa depan yang berkelanjutan.",
    buttonText: "Baca Visi Misi",
    buttonLink: "/visi-misi",
  },
]

export function HeroSection() {
  return <HeroSlideshow slides={slides} autoPlayInterval={5000} />
}
