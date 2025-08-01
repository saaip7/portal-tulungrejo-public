"use client"

import { LinkCard } from "./link-card"

interface LinkData {
  _id: string
  title: string
  url: string
  category: string
  image?: string
}

interface LinkSectionProps {
  category: string
  links: LinkData[]
  onLinkClick: (url: string) => void
}

export function LinkSection({ category, links, onLinkClick }: LinkSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <LinkCard key={link._id} title={link.title} url={link.url} image={link.image} onClick={onLinkClick} />
        ))}
      </div>
    </section>
  )
}
