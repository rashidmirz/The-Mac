'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/[0.04] relative">
      {/* Gradient accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

            {/* Column 1 — Logo & Address */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="relative w-48 h-16">
                <Image
                  src="/logo-icon.jpg"
                  alt="THE MAC"
                  fill
                  unoptimized
                  sizes="192px"
                  className="object-contain object-left brightness-[0.85]"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-teal-500/60 uppercase tracking-widest font-medium mb-2">Studio Address</p>
                  <p className="text-white/45 font-light text-sm leading-relaxed">
                    C-503, Rajyash Rise NH64 Near Vishala Rajyash City, Vishala, Ahmedabad, Gujarat 380007
                  </p>
                </div>

                <div>
                  <p className="text-xs text-teal-500/60 uppercase tracking-widest font-medium mb-2">Contact</p>
                  <a
                    href="tel:+919510584343"
                    className="block text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm mb-1"
                  >
                    +91 95105 84343
                  </a>
                  <a
                    href="mailto:themacofficial03@gmail.com"
                    className="block text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm"
                  >
                    themacofficial03@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div className="space-y-6">
              <p className="text-xs text-teal-500/60 uppercase tracking-widest font-medium">Quick Links</p>
              <ul className="space-y-4">
                <li>
                  <Link href="#services" className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 — Connect */}
            <div className="space-y-6">
              <p className="text-xs text-teal-500/60 uppercase tracking-widest font-medium">Connect</p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-teal-500/30 group-hover:text-teal-500 transition-colors duration-300">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/the-mac-3573a1375?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    className="text-white/45 hover:text-teal-500 font-light transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-teal-500/30 group-hover:text-teal-500 transition-colors duration-300">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 font-light text-xs tracking-wide">
            © {new Date().getFullYear()} THE MAC. All rights reserved.
          </p>
          <p className="text-white/15 font-light text-xs tracking-wide">
            Where vision meets precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
