"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden sm:flex flex-col items-center">
      {/* Track - 75% bigger: h-32 -> h-56, lg:h-32 -> lg:h-56 */}
      <div className="w-px h-44 lg:h-56 bg-gray-600 relative">
        {/* Progress bar - 75% wider */}
        <div
          className="w-1.5 bg-gradient-to-b from-blue-500 to-purple-500 absolute left-[-2px] top-0 transition-all duration-300 ease-out rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
        {/* Indicator dot - 75% bigger: w-3 h-3 -> w-5 h-5 */}
        <div
          className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute -left-2 transition-all duration-300 ease-out shadow-lg shadow-purple-500/30"
          style={{ top: `${scrollProgress}%`, transform: "translateY(-50%)" }}
        />
      </div>
      {/* Percentage text - slightly bigger */}
      <div className="text-sm text-muted-foreground mt-3 font-mono">{Math.round(scrollProgress)}</div>
    </div>
  )
}
