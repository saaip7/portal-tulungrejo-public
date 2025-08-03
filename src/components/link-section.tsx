"use client"

import { LinkCard } from "./link-card"

interface Category {
  _id: string
  name: string
  slug: string
  order: number
  createdAt: string
  updatedAt: string
  __v: number
}

interface LinkData {
  _id: string
  title: string
  url: string
  category: Category
  image?: string
  isActive: boolean
  order: number
  createdAt: string
  __v: number
}

interface LinkSectionProps {
  category: string
  links: LinkData[]
  onLinkClick: (url: string) => void
}

export function LinkSection({ category, links, onLinkClick }: LinkSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-grey-800 mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <LinkCard key={link._id} title={link.title} url={link.url} image={link.image} onClick={onLinkClick} />
        ))}
      </div>
    </section>
  )
}
