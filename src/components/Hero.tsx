import { Button } from '@/components/ui/button'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import React from 'react'

export default async function Hero() {
  //   // Fetch media from Payload
  //   const payload = await getPayload({ config })
  //   const media = await payload.find({
  //     collection: 'media',
  //     limit: 1,
  //     where: {
  //       alt: {
  //         equals: 'Profile Picture',
  //       },
  //     },
  //   })

  const payload = await getPayload({ config })
  const media = await payload.find({
    collection: 'media',
    limit: 1,
    where: {
      alt: {
        equals: 'Profile Picture',
      },
    },
  })

  const mediaDoc = media.docs[0]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section - Left */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
                I Build
                <span className="block text-primary">Websites</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Fast, professional websites that don&apos;t break the bank. As a freelance
                developer, I offer the same quality as big agencies but at prices small businesses
                can actually afford.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:cursor-pointer text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-border text-foreground hover:cursor-pointer hover:bg-muted hover:text-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 bg-transparent hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Photo Section - Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-muted/20 rounded-2xl blur-2xl transform rotate-3"></div>
              <div className="relative bg-card border border-border rounded-2xl p-3 shadow-xl">
                {mediaDoc ? (
                  <Image
                    src={mediaDoc.url as string}
                    alt={mediaDoc.alt || 'Portfolio image'}
                    width={mediaDoc.width || 400}
                    height={mediaDoc.height || 500}
                    className="w-80 h-96 md:w-96 md:h-[500px] object-cover rounded-xl"
                  />
                ) : (
                  // Fallback image if no media is found
                  <div className="w-80 h-96 md:w-96 md:h-[500px] bg-muted rounded-xl flex items-center justify-center">
                    <span className="text-muted-foreground">Profile Image</span>
                  </div>
                )}
              </div>

              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-primary/20">
                Available for hire
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium shadow-lg text-muted-foreground">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-muted/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-muted/20 rounded-full blur-xl"></div>
    </section>
  )
}
