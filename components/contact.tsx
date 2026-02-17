'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const whatsappNumber = '919510584343'

    const serviceLabels: Record<string, string> = {
      '2d-planning': '2D Planning',
      '3d-rendering': '3D Rendering',
      'interior-design': 'Interior Design',
      'exterior-design': 'Exterior Design',
      'mep-drawing': 'MEP Drawing',
      'landscape-design': 'Landscape Design',
      'structure-design': 'Structure Design',
      'other': 'Other',
    }

    const serviceName = serviceLabels[formData.service] || formData.service
    const text = `*New Inquiry via Website*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${serviceName}
*Message:* ${formData.message}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappUrl, '_blank')
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      label: 'Studio Address',
      lines: ['C-503, Rajyash Rise NH64', 'Near Vishala Rajyash City,', 'Vishala, Ahmedabad, Gujarat 380007'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'Call Us',
      lines: ['+91 95105 84343'],
      links: ['tel:+919510584343'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email Us',
      lines: ['themacofficial03@gmail.com'],
      links: ['mailto:themacofficial03@gmail.com'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 bg-[#020202] border-t border-white/[0.04] overflow-hidden noise-overlay vignette">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[15%] left-[40%] w-[600px] h-[600px] bg-gradient-radial from-teal-500/[0.03] to-transparent rounded-full blur-[150px] animate-breathe"></div>
        <div className="absolute top-[10%] right-[20%] w-[350px] h-[350px] bg-gradient-to-bl from-teal-900/[0.03] to-transparent rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-6">
          <div className="inline-block px-4 md:px-6 py-2.5 md:py-3 border border-teal-500/25 rounded-full bg-teal-500/[0.03] backdrop-blur-sm">
            <span className="text-xs font-medium tracking-widest text-teal-500">✦ GET IN TOUCH ✦</span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide text-white leading-[1.15] mb-2" style={{ fontWeight: 500 }}>
              Let&apos;s Build
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-teal-500 leading-[1.15] drop-shadow-[0_0_40px_rgba(20,184,166,0.2)]" style={{ fontWeight: 700 }}>
              Your Vision
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-teal-500/50"></div>
            <span className="text-teal-500/60 text-xs">◆</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-teal-500/50"></div>
          </div>
          <p className="text-sm sm:text-base text-white/60 font-light max-w-2xl mx-auto leading-relaxed px-2">
            Every iconic structure begins with a single conversation. We&apos;re ready to listen, design, and deliver beyond expectations.
          </p>
        </div>

        {/* Two-column: Form + Contact Info */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">

          {/* Left — Inquiry Form (takes 3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-5 sm:p-8 md:p-10 border border-white/[0.06] bg-white/[0.02] rounded-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full border border-teal-500/30 flex items-center justify-center text-teal-500/60">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white/90 tracking-wide">Send an Inquiry</h3>
                  <p className="text-[11px] text-white/35 font-light tracking-wider uppercase">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full border-2 border-teal-500/60 flex items-center justify-center text-teal-500 animate-fade-in-up">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-teal-500 tracking-wide">Inquiry Sent!</h4>
                  <p className="text-white/50 font-light text-sm">Thank you! Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-teal-500/50 font-light mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-teal-500/50 rounded-sm px-4 py-3.5 text-sm text-white/80 font-light placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:shadow-lg focus:shadow-teal-500/[0.03]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-teal-500/50 font-light mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-teal-500/50 rounded-sm px-4 py-3.5 text-sm text-white/80 font-light placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:shadow-lg focus:shadow-teal-500/[0.03]"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-teal-500/50 font-light mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-teal-500/50 rounded-sm px-4 py-3.5 text-sm text-white/80 font-light placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:shadow-lg focus:shadow-teal-500/[0.03]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-teal-500/50 font-light mb-2">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-teal-500/50 rounded-sm px-4 py-3.5 text-sm text-white/80 font-light outline-none transition-all duration-300 focus:bg-white/[0.05] appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="" className="bg-[#111]">Select a service</option>
                        <option value="2d-planning" className="bg-[#111]">2D Planning</option>
                        <option value="3d-rendering" className="bg-[#111]">3D Rendering</option>
                        <option value="interior-design" className="bg-[#111]">Interior Design</option>
                        <option value="exterior-design" className="bg-[#111]">Exterior Design</option>
                        <option value="mep-drawing" className="bg-[#111]">MEP Drawing</option>
                        <option value="landscape-design" className="bg-[#111]">Landscape Design</option>
                        <option value="structure-design" className="bg-[#111]">Structure Design</option>
                        <option value="other" className="bg-[#111]">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-teal-500/50 font-light mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project — type, area, budget range, timeline..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-teal-500/50 rounded-sm px-4 py-3.5 text-sm text-white/80 font-light placeholder:text-white/20 outline-none transition-all duration-300 focus:bg-white/[0.05] resize-none focus:shadow-lg focus:shadow-teal-500/[0.03]"
                    />
                  </div>



                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full px-8 py-4 bg-teal-500 text-white font-medium text-sm tracking-widest hover:bg-teal-500/90 transition-all duration-500 uppercase border border-teal-500 relative overflow-hidden rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          Send via WhatsApp
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — Contact Info + Hours (takes 2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-6 border border-white/[0.04] hover:border-teal-500/30 bg-white/[0.01] hover:bg-white/[0.03] rounded-sm transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/[0.04] backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-full border border-teal-500/15 group-hover:border-teal-500/40 flex items-center justify-center text-teal-500/30 group-hover:text-teal-500 flex-shrink-0 transition-all duration-500 bg-teal-500/[0.02] group-hover:bg-teal-500/[0.06]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-teal-500/40 group-hover:text-teal-500 font-light mb-2 transition-colors duration-500">
                    {item.label}
                  </h3>
                  <div className="space-y-1">
                    {item.lines.map((line, j) =>
                      item.links ? (
                        <a key={j} href={item.links[j]} className="block text-white/60 font-light hover:text-teal-500 transition-colors duration-300 text-sm">
                          {line}
                        </a>
                      ) : (
                        <p key={j} className="text-white/60 font-light text-sm">{line}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="group p-6 border border-white/[0.04] hover:border-teal-500/30 bg-white/[0.01] hover:bg-white/[0.03] rounded-sm backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/[0.04]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full border border-teal-500/15 group-hover:border-teal-500/40 flex items-center justify-center text-teal-500/30 group-hover:text-teal-500 flex-shrink-0 transition-all duration-500 bg-teal-500/[0.02] group-hover:bg-teal-500/[0.06]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-teal-500/40 group-hover:text-teal-500 font-light transition-colors duration-500">Business Hours</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-3 text-[13px] pl-14">
                <span className="text-white/35 group-hover:text-white/50 font-light transition-colors duration-500">Mon – Fri</span>
                <span className="text-white/55 group-hover:text-white/70 font-light text-right transition-colors duration-500">9:00 AM – 6:00 PM</span>
                <span className="text-white/35 group-hover:text-white/50 font-light transition-colors duration-500">Saturday</span>
                <span className="text-white/55 group-hover:text-white/70 font-light text-right transition-colors duration-500">10:00 AM – 4:00 PM</span>
                <span className="text-white/35 group-hover:text-white/50 font-light transition-colors duration-500">Sunday</span>
                <span className="text-white/55 group-hover:text-white/70 font-light text-right transition-colors duration-500">By Appointment</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="group p-6 border border-white/[0.04] hover:border-teal-500/30 bg-white/[0.01] hover:bg-white/[0.03] rounded-sm backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/[0.04]">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-teal-500/40 group-hover:text-teal-500 font-light mb-4 transition-colors duration-500">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  {
                    name: 'LinkedIn',
                    href: '#',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    href: 'https://www.instagram.com/themacofficial_/',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/[0.06] hover:border-teal-500/40 flex items-center justify-center text-white/25 hover:text-teal-500 transition-all duration-500 hover:bg-teal-500/[0.04]"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom tagline */}
        <div className="mt-20 pt-10 border-t border-white/[0.04] text-center">
          <p className="text-white/20 font-light text-sm tracking-widest italic">
            &quot;Where vision meets precision — one blueprint at a time.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
