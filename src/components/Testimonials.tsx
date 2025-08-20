'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  // TODO: payload integration
  {
    id: 1,
    name: 'Lim Wei Ming',
    title: 'Owner',
    company: 'Sunrise Kopitiam',
    avatar: '/malaysian-kopitiam-owner.png',
    testimonial:
      "Got my kopitiam online in just 4 days! Now customers can see our menu and location before coming. We're getting more new faces every week, especially younger customers who found us on Google.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    title: 'Founder',
    company: 'Bloom Printing Services',
    avatar: '/malaysian-printing-owner.png',
    testimonial:
      'Best decision ever! I can update our service prices and add new printing options myself without calling anyone. Saved me hundreds in developer fees already. The system is so easy to use.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    title: 'CEO',
    company: 'TechStart Solutions',
    avatar: '/malaysian-tech-ceo.png',
    testimonial:
      'The professional website helped us land our first big client. They said we looked more established than our competitors. Worth every ringgit for the credibility it gave our startup.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amy Tan',
    title: 'Owner',
    company: 'Handmade by Amy',
    avatar: '/malaysian-crafts-owner.png',
    testimonial:
      'Moved from Shopee to my own branded store and keeping 100% of profits now! No more platform fees eating into my earnings. My customers love the personalized shopping experience too.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Hassan Abdullah',
    title: 'Director',
    company: 'KL Property Consultants',
    avatar: '/malaysian-property-consultant.png',
    testimonial:
      'Fast delivery and very affordable. Had our property listings website ready in 5 days. The mobile-friendly design is perfect since most clients browse properties on their phones.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-center font-medium text-muted-foreground mb-6">Testimonials</p>
        {/* <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-6">Testimonials</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Malaysian Business Owners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses across Malaysia
          </p>
        </div> */}

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full shadow-lg bg-transparent"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full shadow-lg bg-transparent"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {/* Testimonial Content */}
          {/* TODO: payload integration */}
          <div className="mx-8 p-8 text-center min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center h-full"
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed max-w-3xl mx-auto min-h-[120px] flex items-center justify-center">
                  &quot;{currentTestimonial.testimonial}&quot;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={currentTestimonial.avatar || '/placeholder.svg'}
                      alt={currentTestimonial.name}
                    />
                    <AvatarFallback>
                      {currentTestimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.title}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary w-4'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Optional: Company logos placeholder (commented out for future implementation) */}
        {/*
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by businesses across Malaysia</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            // Company logos would go here
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
