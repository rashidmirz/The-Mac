'use client'

import Image from 'next/image'

export function Team() {

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 bg-[#020202] border-t border-white/[0.04] noise-overlay">
      {/* Background Image — Ultra Dark */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-teal-500/[0.03] to-transparent rounded-full blur-[140px] animate-breathe"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-gradient-to-tl from-teal-900/[0.04] to-transparent rounded-full blur-[120px] animate-breathe" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Geometric Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-teal-500 via-teal-500/20 to-transparent"></div>
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-teal-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-teal-500/20 rounded-full animate-float-particle"
            style={{
              left: `${25 + i * 18}%`,
              bottom: `${12 + (i % 2) * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Section Header */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 border border-teal-500/25 rounded-full bg-teal-500/[0.03] backdrop-blur-sm w-fit">
                <span className="text-xs font-light tracking-widest text-teal-500">✦ ABOUT US ✦</span>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white/90 mb-4">
                  Crafting
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.1)]">
                  Excellence
                </h2>
              </div>
            </div>

            <p className="text-white/50 font-light leading-relaxed text-base md:text-lg">
              Founded in 2024, our firm has established itself as a leader in luxury architecture and design. We believe architecture is more than creating buildings—it's about crafting experiences that enrich lives and shape communities.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/[0.06]">
              <div>
                <div className="text-2xl md:text-3xl font-light text-teal-500 mb-2">2+</div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-light">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-light text-teal-500 mb-2">100+</div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-light">Projects Delivered</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-light text-teal-500 mb-2">100+</div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-light">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 md:h-full min-h-72 md:min-h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Our studio"
              fill
              unoptimized
              className="object-cover border border-white/[0.06] brightness-[0.7]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/80 via-transparent to-black/30"></div>
          </div>
        </div>



        {/* Values Section */}
        <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t border-white/[0.06]">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white/90 mb-12 md:mb-16">
            Our <span className="text-teal-500 drop-shadow-[0_0_20px_rgba(20,184,166,0.1)]">Core Values</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries with forward-thinking design solutions.',
              },
              {
                title: 'Excellence',
                description: 'Unwavering commitment to the highest standards in every project.',
              },
              {
                title: 'Sustainability',
                description: 'Creating buildings that respect our environment and future generations.',
              },
              {
                title: 'Collaboration',
                description: 'Working closely with clients and teams to bring visions to reality.',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="group p-10 border border-white/[0.05] hover:border-teal-500/40 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/[0.06] cursor-pointer rounded-sm backdrop-blur-sm"
              >
                <div className="w-8 h-px bg-teal-500/40 mb-6 group-hover:w-12 transition-all duration-500"></div>
                <h4 className="text-xl font-light text-teal-500/80 mb-4 group-hover:text-teal-500 transition-colors duration-500">{value.title}</h4>
                <p className="text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
