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
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-101 bg-white border-gray-200"
      onClick={() => onClick(url)}
    >
      <CardContent className=" flex items-center space-x-3">
        {/* Icon */}
        <div className="flex-shrink-0">
          {image ? (
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors text-sm truncate">
            {title}
          </h3>
        </div>
        
        {/* External Link Icon */}
        <div className="flex-shrink-0">
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-800 transition-colors" />
        </div>
      </CardContent>
    </Card>
  )
}
