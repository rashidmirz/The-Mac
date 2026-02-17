'use client'

import Image from 'next/image'

export function Testimonials() {
  const clients = [
    { name: 'Safar Infrastructure', logo: '/logos/safar-infrastructure.png' },
    { name: 'Safar Enterprise', logo: '/logos/safar-enterprise.jpg' },
    { name: 'Arcksite Construction', logo: '/logos/arcksite-construction.jpg' },
    { name: 'Jhatakia Construction', logo: '/logos/jhatakia-construction.svg' },
    { name: 'A3 Projects', logo: '/logos/a3-projects.svg' },
    { name: 'Paradise Nests', logo: '/logos/paradise-nests.svg' },
    { name: 'Safar Aman', logo: '/logos/safar-aman.svg' },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#020202] border-t border-white/[0.04] overflow-hidden noise-overlay">
      {/* Deep dark gradient bg */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020202] via-[#050505] to-[#020202]"></div>

      {/* Animated Orb */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/[0.03] to-transparent rounded-full blur-[150px] animate-pulse-glow"></div>
      </div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-[35%] w-px h-full bg-teal-500"></div>
        <div className="absolute top-0 right-[35%] w-px h-full bg-teal-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-6 py-3 border border-teal-500/25 rounded-full bg-teal-500/[0.03] backdrop-blur-sm">
            <span className="text-xs font-light tracking-widest text-teal-500">✦ OUR CLIENTS ✦</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white/90">
            Building <span className="text-teal-500 font-semibold drop-shadow-md">Trust</span>, Designing{' '}
            <span className="text-teal-500 font-semibold drop-shadow-md">Futures</span>
          </h2>
          <p className="text-base text-white/40 font-light max-w-2xl mx-auto leading-relaxed">
            Partnering with visionaries who believe great spaces create extraordinary experiences.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="relative">
          {/* Row 1 — Scrolling */}
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll-left" style={{ width: 'max-content' }}>
              {[...clients, ...clients, ...clients].map((client, i) => (
                <div
                  key={`row1-${i}`}
                  className="group flex-shrink-0 w-60 h-32 border border-white/[0.04] hover:border-teal-500/30 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-sm rounded-sm flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-teal-500/[0.04] p-4"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="object-contain max-h-20 w-auto group-hover:scale-105 transition-transform duration-500 brightness-[0.8] group-hover:brightness-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/[0.06] max-w-3xl mx-auto">
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: '100+', label: 'Happy Clients' },
            { value: '2+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-teal-500 mb-2 drop-shadow-md">{stat.value}</div>
              <p className="text-xs text-white/35 uppercase tracking-widest font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333%));
          }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
