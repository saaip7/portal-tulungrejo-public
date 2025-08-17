"use client"

import { useEffect, useRef, useState } from "react"

type Leader = { name: string; years: string; period: string }

interface Props {
  villageLeaders: Leader[]
  periodColorMap: Record<string, { badgeBg: string; badgeText: string }>
}

export default function TimelineSejarah({ villageLeaders, periodColorMap }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineElement = timelineRef.current
        const rect = timelineElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const timelineHeight = timelineElement.offsetHeight

        const visibleTop = Math.max(0, windowHeight - rect.top)
        const visibleHeight = Math.min(visibleTop, timelineHeight)
  const progress = Math.min(visibleHeight / timelineHeight, 1)

  setScrollProgress(progress)
      }
    }
  window.addEventListener("scroll", handleScroll)
    handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      <div className="absolute left-8 top-0 w-1 bg-gray-200 h-full"></div>
      <div
        className="absolute left-8 top-0 w-1 bg-blue-600 transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      />

      <div className="space-y-8">
        {villageLeaders.map((leader, index) => {
          const isActive = scrollProgress > index / villageLeaders.length
          const key = leader.period.toLowerCase()
          const colors = periodColorMap[key] || periodColorMap["masa pembangunan"]

          return (
            <div key={index} className="relative flex items-center">
              <div
                className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                  isActive ? "bg-blue-600" : "bg-gray-300"
                }`}
              />

              <div className="ml-16 flex-1">
                <div
                  className={`p-4 rounded-lg border-l-4 transition-all duration-500 ${
                    isActive
                      ? "bg-blue-50 border-blue-500 shadow-md transform translate-x-0"
                      : "bg-gray-50 border-gray-300 transform translate-x-4 opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{leader.name}</h3>
                      <p className="text-sm text-gray-600">{leader.years}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${colors.badgeBg} ${colors.badgeText}`}>
                        {leader.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
