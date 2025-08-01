import { HeroSlideshow } from "./hero-slideshow"

const slides = [
  {
    image: "/hero/hero1.png",
    title: "Portal Informasi Desa Tulungrejo",
    description: "Temukan sosial media, layanan publik, dan informasi darurat desa dalam satu tempat.",
  },
  {
    image: "/hero/hero2-1 crop.jpg",
    title: "Coban talun Tulungrejo",
    description: "Nikmati keindahan alam pegunungan dan udara segar di desa wisata kami.",
  },
  {
    image: "/hero/hero 3.png",
    title: "Atur Pisungsung",
    description: "Dukung produk pertanian lokal dan ekonomi masyarakat desa.",
  },
]

export function HeroSection() {
  return <HeroSlideshow slides={slides} autoPlayInterval={5000} />
}
