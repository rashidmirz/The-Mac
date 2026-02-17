'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Interior',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 2,
      title: 'Contemporary Living Space',
      image: 'https://images.unsplash.com/photo-1600210174552-5ac1371e3b1d?w=800&q=80',
    },
    {
      id: 3,
      title: 'Luxury Bedroom Design',
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae0?w=800&q=80',
    },
    {
      id: 4,
      title: 'Modern Villa Exterior',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
      id: 5,
      title: 'Urban Living Complex',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    },
    {
      id: 6,
      title: 'Minimalist Interior Design',
      image: 'https://images.unsplash.com/photo-1600210176138-13bddb0a1efb?w=800&q=80',
    },
    {
      id: 7,
      title: 'Contemporary Office Space',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    },
    {
      id: 8,
      title: 'Luxury Bathroom Suite',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    },
    {
      id: 9,
      title: 'Wooden Architecture Detail',
      image: 'https://images.unsplash.com/photo-1600585154355-78ed5aae4d3b?w=800&q=80',
    },
    {
      id: 10,
      title: 'Elegant Dining Room',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e9e8c6?w=800&q=80',
    },
    {
      id: 11,
      title: 'Modern Kitchen Design',
      image: 'https://images.unsplash.com/photo-1600566752376-12c8ab7d8a38?w=800&q=80',
    },
    {
      id: 12,
      title: 'Spa & Wellness Center',
      image: 'https://images.unsplash.com/photo-1604329142231-39cd5e1b38f5?w=800&q=80',
    },
    {
      id: 13,
      title: 'Commercial Retail Space',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
      id: 14,
      title: 'Boutique Hotel Lobby',
      image: 'https://images.unsplash.com/photo-1600570152476-408d0d698e83?w=800&q=80',
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 8)

  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-4 sm:px-6 bg-[#020202] border-t border-white/[0.04] noise-overlay vignette">
      {/* Background Image — Ultra Dark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Animated Orb */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[10%] left-[40%] w-[500px] h-[500px] bg-gradient-radial from-teal-500/[0.04] to-transparent rounded-full blur-[130px] animate-pulse-glow"></div>
        <div className="absolute top-[5%] right-[15%] w-[300px] h-[300px] bg-gradient-to-bl from-teal-900/[0.03] to-transparent rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 z-0 grid-pattern pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-teal-500/20 rounded-full animate-float-particle"
            style={{
              left: `${20 + i * 15}%`,
              bottom: `${8 + (i % 2) * 12}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${7 + i * 1.2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block px-6 py-3 border border-teal-500/25 rounded-full bg-teal-500/[0.03] backdrop-blur-sm">
            <span className="text-xs font-light tracking-widest text-teal-500">✦ PORTFOLIO ✦</span>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/90 mb-4">
              Iconic
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.1)]">
              Projects
            </h2>
          </div>
          <p className="text-base text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            A curated collection of our most exceptional architectural achievements.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3] border border-white/[0.04] hover:border-teal-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6] group-hover:brightness-[0.5]"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>
                  <div className="w-8 h-px bg-teal-500 mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-white text-lg md:text-xl font-medium tracking-wide" style={{ fontWeight: 500 }}>
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-teal-500/30 transition-all duration-500 rounded-sm"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-10 py-4 border-2 border-teal-500 text-teal-500 font-light text-sm tracking-widest uppercase transition-all duration-500 hover:bg-teal-500 hover:text-white rounded-sm flex items-center gap-3"
            >
              View All Projects
              <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-1" />
            </button>
          </div>
        )}

        {/* Collapse Button */}
        {showAll && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(false)}
              className="group relative px-10 py-4 border-2 border-teal-500 text-teal-500 font-light text-sm tracking-widest uppercase transition-all duration-500 hover:bg-teal-500 hover:text-white rounded-sm flex items-center gap-3"
            >
              Show Less
              <ChevronDown className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-1 rotate-180" />
            </button>
          </div>
        )}

        {/* Project Count */}
        <div className="text-center mt-8">
          <p className="text-sm font-light tracking-widest text-teal-500/60">
            {displayedProjects.length} OF {projects.length} PROJECTS
          </p>
        </div>

      </div>
    </section>
  )
}
