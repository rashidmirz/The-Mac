'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between md:justify-center md:gap-12">
        <Link href="#" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
          <Image
            src="/logo-icon.jpg"
            alt="THE MAC"
            width={200}
            height={200}
            unoptimized
            className="object-contain h-12 sm:h-14 md:h-16 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg md:text-xl font-bold tracking-wider text-white" style={{ fontWeight: 700 }}>THE MAC</span>
            <span className="text-[7px] sm:text-[10px] font-light tracking-widest text-white/50 uppercase leading-tight">Modern Architectural Concept</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-xs font-light tracking-wide text-white/70 hover:text-teal-500 transition-colors duration-300 uppercase">
            Services
          </Link>
          <Link href="#portfolio" className="text-xs font-light tracking-wide text-white/70 hover:text-teal-500 transition-colors duration-300 uppercase">
            Portfolio
          </Link>
          <Link href="#about" className="text-xs font-light tracking-wide text-white/70 hover:text-teal-500 transition-colors duration-300 uppercase">
            About
          </Link>
          <Link href="#contact" className="text-xs font-light tracking-wide text-white/70 hover:text-teal-500 transition-colors duration-300 uppercase">
            Contact
          </Link>
          <div className="w-px h-4 bg-white/20"></div>
          <a href="#contact" className="px-6 py-2 border border-teal-500/60 text-teal-500 hover:border-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 font-light text-xs tracking-widest uppercase">
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button — larger touch target */}
        <button
          className="md:hidden p-2 -mr-2 touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation — full screen overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-black/98 backdrop-blur-xl md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-2 p-6 pt-8">
          {[
            { href: '#services', label: 'Services' },
            { href: '#portfolio', label: 'Portfolio' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-light text-white/80 hover:text-teal-500 transition-colors py-4 border-b border-white/[0.06] tracking-wider uppercase touch-manipulation"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-8 py-4 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all font-light text-sm tracking-widest uppercase text-center touch-manipulation"
          >
            Start Project
          </a>

          {/* Mobile contact shortcuts */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
            <a href="tel:+919510584343" className="flex items-center gap-3 text-white/50 text-sm font-light touch-manipulation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-teal-500/50">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +91 95105 84343
            </a>
            <a href="mailto:themacofficial03@gmail.com" className="flex items-center gap-3 text-white/50 text-sm font-light touch-manipulation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-teal-500/50">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              themacofficial03@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
