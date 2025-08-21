import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import Projects from '@/components/Projects'
import CTA from '@/components/CTA'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return (
    <div className="home">
      <div className="content">
        <Hero />
        <Projects />
        <Testimonials />
        <Services />
        <CTA />
        <Contact />
      </div>
    </div>
  )
}
