'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      number: '01',
      title: '2D Planning',
      description: 'Precision-crafted 2D floor plans and site layouts that form the blueprint of every great project. Detailed dimensions and spatial optimization.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
          <line x1="15" y1="15" x2="15" y2="21" />
        </svg>
      ),
      features: ['Floor Plans', 'Site Layouts', 'Spatial Analysis'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    },
    {
      number: '02',
      title: '3D Rendering',
      description: 'Photorealistic 3D visualizations that bring architectural concepts to life before construction begins. Stunning detail and accuracy.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      features: ['Photorealistic', 'Walkthroughs', 'Virtual Tours'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    },
    {
      number: '03',
      title: 'MEP Drawing',
      description: 'Comprehensive Mechanical, Electrical & Plumbing designs ensuring seamless integration of all building systems for optimal performance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      features: ['HVAC Design', 'Electrical Layout', 'Plumbing Systems'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    },
    {
      number: '04',
      title: 'Interior Design',
      description: 'Bespoke interior spaces that reflect personality and purpose. From material selection to furniture layout, every detail perfected.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      features: ['Space Planning', 'Material Selection', 'Furniture Design'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    },
    {
      number: '05',
      title: 'Exterior Design',
      description: 'Captivating facade designs and exterior treatments that create lasting first impressions. Modern aesthetics with durable materials.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="4" y="10" width="16" height="11" rx="1" />
          <path d="M12 2L3 10h18L12 2z" />
          <line x1="8" y1="14" x2="8" y2="17" />
          <line x1="16" y1="14" x2="16" y2="17" />
          <line x1="12" y1="14" x2="12" y2="21" />
        </svg>
      ),
      features: ['Facade Design', 'Material Cladding', 'Curb Appeal'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      number: '06',
      title: 'Landscape Design',
      description: 'Harmonious outdoor environments that complement architecture. Gardens, hardscaping, water features and sustainable green spaces.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17 8c.7-1 1-2.2 1-3.5C18 2.5 16 1 12 1S6 2.5 6 4.5C6 5.8 6.3 7 7 8" />
          <path d="M12 1v21" />
          <path d="M6 12c-1.3.7-2.2 1.3-2.7 2-.5.8-.3 1.7.5 2.5 1.5 1.5 4 1.5 5.5 0" />
          <path d="M18 12c1.3.7 2.2 1.3 2.7 2 .5.8.3 1.7-.5 2.5-1.5 1.5-4 1.5-5.5 0" />
          <line x1="3" y1="22" x2="21" y2="22" />
        </svg>
      ),
      features: ['Garden Design', 'Hardscaping', 'Water Features'],
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    },
    {
      number: '07',
      title: 'Planning & Drafting',
      description: 'Expert architectural drafting services with precise technical drawings, construction documentation and regulatory compliance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      ),
      features: ['Technical Drawings', 'Documentation', 'Code Compliance'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    },
    {
      number: '08',
      title: 'Elevation Section',
      description: 'Detailed elevation and cross-section drawings showcasing building heights, proportions, materials and architectural character.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polyline points="3 21 3 3 21 3" />
          <path d="M7 21V11h4v10" />
          <path d="M13 21V7h4v14" />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      ),
      features: ['Front Elevation', 'Cross Sections', 'Detail Drawings'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
      number: '09',
      title: 'Structure Design',
      description: 'Robust structural engineering solutions ensuring safety, durability and efficiency. From foundations to roof systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 20h20" />
          <path d="M5 20V8l7-5 7 5v12" />
          <path d="M9 20v-5h6v5" />
          <rect x="9" y="9" width="6" height="4" />
        </svg>
      ),
      features: ['Foundation Design', 'Load Analysis', 'Steel & RCC'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    },
  ]

  return (
    <section id="services" className="relative py-20 md:py-32 px-4 sm:px-6 bg-[#030303] overflow-hidden noise-overlay">
      {/* Background Image — Ultra Dark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[25%] w-[600px] h-[600px] bg-gradient-to-br from-teal-500/[0.04] to-transparent rounded-full blur-[150px] animate-breathe"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-teal-900/[0.04] to-transparent rounded-full blur-[120px] animate-breathe" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 grid-pattern pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-teal-500/25 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 14}%`,
              bottom: `${10 + (i % 3) * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${7 + i}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-6 mb-20">
          <div className="inline-block px-6 py-3 border border-teal-500/30 rounded-full bg-teal-500/[0.03] backdrop-blur-sm">
            <span className="text-xs font-light tracking-widest text-teal-500">✦ OUR EXPERTISE ✦</span>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-balance text-white/90 mb-4">
              Our
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-balance text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.1)]">
              Services
            </h2>
          </div>
          <p className="text-base text-white/50 font-light max-w-3xl leading-relaxed">
            We deliver end-to-end architectural and design solutions — from initial concept sketches to final construction documentation. Every project reflects precision, creativity, and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative overflow-hidden rounded-sm bg-[#080808] border border-white/[0.06] hover:border-teal-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/[0.06]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/85 group-hover:bg-black/80 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-full border border-teal-500/20 group-hover:border-teal-500/50 flex items-center justify-center text-teal-500/40 group-hover:text-teal-500 group-hover:scale-110 transition-all duration-500 bg-teal-500/[0.03] group-hover:bg-teal-500/[0.08]">
                    {service.icon}
                  </div>
                  <div className="text-4xl font-light text-white/[0.04] group-hover:text-teal-500/20 transition-all duration-500">
                    {service.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-light text-white/90 mb-3 group-hover:text-teal-500 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 font-light leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-teal-500/50 border border-teal-500/15 px-2.5 py-1 rounded-full font-light group-hover:border-teal-500/50 group-hover:text-teal-500 transition-all duration-500 uppercase tracking-wider"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Arrow */}
                <div className="inline-flex items-center gap-2 text-xs font-light text-teal-500/50 group-hover:text-teal-500 transition-all duration-500 uppercase tracking-widest">
                  <span>Learn More</span>
                  <svg
                    className={`w-4 h-4 transition-all duration-500 ${hoveredService === index ? 'translate-x-2' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>

                {/* Border Accent */}
                <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-teal-500/60 to-transparent transition-all duration-700"></div>
                <div className="absolute bottom-0 right-0 h-px w-0 group-hover:w-full bg-gradient-to-l from-teal-500/60 to-transparent transition-all duration-700 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center border-t border-white/[0.06] pt-16">
          <p className="text-white/50 font-light mb-6">Ready to start your next architectural project?</p>
          <a href="#contact" className="group px-8 py-4 bg-teal-500 text-white font-light text-sm tracking-widest hover:bg-teal-500/90 transition-all duration-500 uppercase border border-teal-500 relative overflow-hidden">
            <span className="relative z-10">Consult Our Experts</span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
