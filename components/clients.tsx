'use client'

import Image from 'next/image'

export function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Jhatakia Construction Company',
      logo: '/clients/client-1.jpg',
      alt: 'Jhatakia Construction',
    },
    {
      id: 2,
      name: 'A³ Projects',
      logo: '/clients/client-2.png',
      alt: 'A3 Projects',
    },
    {
      id: 3,
      name: 'Paradise Nests',
      logo: '/clients/client-3.png',
      alt: 'Paradise Nests',
    },
    {
      id: 4,
      name: 'Safar-e-Aman',
      logo: '/clients/client-4.jpg',
      alt: 'Safar-e-Aman',
    },
    {
      id: 5,
      name: 'Visionary Partner',
      logo: '/clients/client-1.jpg',
      alt: 'Visionary Partner',
    },
    {
      id: 6,
      name: 'Strategic Alliance',
      logo: '/clients/client-6.jpg',
      alt: 'Strategic Alliance',
    },
    {
      id: 7,
      name: 'Future Concepts',
      logo: '/clients/client-7.jpg',
      alt: 'Future Concepts',
    },
    {
      id: 8,
      name: 'Architectural Design Studio',
      logo: '/clients/client-8.png',
      alt: 'Architectural Design Studio',
    },
  ]

  return (
    <section id="clients" className="relative py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-background to-background border-t border-teal-500/10">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/[0.02] via-transparent to-transparent"></div>
        <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 md:mb-20">
          <div className="inline-block px-6 py-3 border border-teal-500/25 rounded-full bg-teal-500/[0.03] backdrop-blur-sm">
            <span className="text-xs font-light tracking-widest text-teal-500">✦ TRUSTED PARTNERS ✦</span>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground/90 mb-3">
              Our Esteemed
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-teal-500">
              Clients
            </h2>
          </div>
          <p className="text-base text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
            We partner with distinguished organizations to bring their architectural visions to life.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-md border border-border rounded-lg p-8 h-60 flex items-center justify-center transition-all duration-500 group-hover:border-teal-500/30 group-hover:bg-card/80 group-hover:shadow-2xl group-hover:shadow-teal-500/10">
                {/* Logo Container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={180}
                    height={180}
                    unoptimized
                    className="object-contain w-auto h-auto max-w-[160px] max-h-[140px] transition-all duration-500 group-hover:scale-110 filter brightness-100 group-hover:drop-shadow-lg"
                    quality={95}
                    priority={false}
                  />
                </div>

                {/* Hover Overlay - Client Name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <p className="text-sm font-light tracking-wide text-teal-500 text-center">
                    {client.name}
                  </p>
                </div>

                {/* Accent Border Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-hover:from-teal-500/10 group-hover:via-teal-500/5 group-hover:to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light text-teal-500">8+</p>
            <p className="text-sm font-light tracking-wide text-foreground/60">PREMIUM CLIENTS</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light text-teal-500">100%</p>
            <p className="text-sm font-light tracking-wide text-foreground/60">SATISFACTION RATE</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-light text-teal-500">∞</p>
            <p className="text-sm font-light tracking-wide text-foreground/60">LASTING PARTNERSHIPS</p>
          </div>
        </div>
      </div>
    </section>
  )
}