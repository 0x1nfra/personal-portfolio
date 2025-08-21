import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import Projects from '@/components/Projects'
import CTA from '@/components/CTA'

export default function HomePage() {
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
