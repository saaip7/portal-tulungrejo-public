"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface LinkCardProps {
  title: string
  url: string
  image?: string
  onClick: (url: string) => void
}

export function LinkCard({ title, url, image, onClick }: LinkCardProps) {
  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/80 backdrop-blur-sm border-green-200"
      onClick={() => onClick(url)}
    >
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          {image ? (
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} icon`}
              width={40}
              height={40}
              className="rounded-lg"
            />
          ) : (
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-green-600" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{title}</h3>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
      </CardContent>
    </Card>
  )
}
