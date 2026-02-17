'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Skip mouse tracking on mobile for performance
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-16 md:pt-20 noise-overlay vignette">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Fixed attachment disabled on mobile (causes lag)
          ...(isMobile ? {} : { backgroundAttachment: 'fixed' }),
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/88 to-black/90"></div>
      </div>

      {/* Animated Gradient Mesh Orbs — hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-teal-500/[0.04] via-transparent to-transparent rounded-full blur-[120px] animate-breathe"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tl from-teal-900/[0.05] via-transparent to-transparent rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Gold Accent Lines — hidden on small screens */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-teal-500/60 via-teal-500/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-teal-500/60 via-teal-500/10 to-transparent"></div>
      </div>

      {/* Animated Circles — hidden on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 border border-teal-500/[0.06] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-teal-500/[0.04] rounded-full animate-rotate-slow"></div>
      </div>

      {/* Floating Particles — fewer on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(isMobile ? 3 : 8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-500/30 rounded-full animate-float-particle"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${5 + (i % 3) * 10}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + i * 0.8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Scan Line Effect — desktop only */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent animate-scan-line"></div>
      </div>

      {/* Mouse Follow Glow — desktop only */}
      {!isMobile && (
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-teal-500/[0.04] to-transparent rounded-full blur-[100px] z-0 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl w-full">
        <div
          className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
          {/* Top Badge */}
          <div className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-2.5 md:py-3 border border-teal-500/30 rounded-full backdrop-blur-md hover:border-teal-500 hover:bg-teal-500/5 transition-all duration-500 group bg-black/40">
            <span className="text-[10px] md:text-xs font-light tracking-widest text-teal-500 group-hover:text-teal-500">
              ✦ PREMIUM ARCHITECTURE ✦
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white/95 mb-2 md:mb-4 tracking-wide text-balance leading-tight">
              Spaces That
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-teal-500 tracking-wide text-balance leading-tight drop-shadow-[0_0_40px_rgba(20,184,166,0.15)]">
              Transform
            </h1>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-teal-500/60"></div>
            <span className="text-teal-500/80 text-sm">◆</span>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-teal-500/60"></div>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-white/60 font-light max-w-3xl mx-auto mb-8 md:mb-12 text-balance leading-relaxed px-2">
            We craft extraordinary architectural experiences where innovation, refined aesthetics, and environmental consciousness converge to create spaces that endure and inspire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16">
            <a href="#portfolio" className="group w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-teal-500 text-white font-light text-xs md:text-sm tracking-widest hover:bg-teal-500/90 transition-all duration-500 uppercase border border-teal-500 hover:shadow-2xl hover:shadow-teal-500/40 relative overflow-hidden rounded-sm text-center">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-white/15 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
            <a href="#contact" className="group w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 border border-white/20 text-white/80 font-light text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase relative overflow-hidden rounded-sm backdrop-blur-sm bg-white/[0.02] text-center">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
