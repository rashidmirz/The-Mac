import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Team } from '@/components/team'

import { Contact } from '@/components/contact'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Premium Architecture Studio | Luxury Design & Architecture',
  description:
    'Award-winning architecture firm specializing in luxury residential, commercial, and hospitality design projects.',
  openGraph: {
    title: 'Premium Architecture Studio',
    description: 'Creating iconic architectural spaces with timeless design and innovation.',
    url: 'https://architecture.example.com',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="bg-[#020202] text-foreground overflow-hidden">
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
