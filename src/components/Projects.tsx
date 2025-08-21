'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'

// TODO: Implement CMS integration for dynamic projects
const projects = [
  {
    id: 'kopitiam-website',
    title: 'Kopitiam Website',
    subtitle: 'Sunrise Kopitiam saw 40% more walk-ins after launching their professional website',
    image: '/modern-kopitiam-homepage.png',
    liveUrl: 'https://sunrise-kopitiam.example.com',
    slug: 'kopitiam-website',
  },
  {
    id: 'print-shop-cms',
    title: 'Print Shop CMS',
    subtitle:
      'Bloom Printing reduced admin time by 3 hours weekly with self-managed content updates',
    image: '/placeholder-6sbsp.png',
    liveUrl: 'https://bloom-printing.example.com',
    slug: 'print-shop-cms',
  },
  {
    id: 'ecommerce-store',
    title: 'E-commerce Store',
    subtitle:
      'Handmade by Amy increased monthly sales by 60% after moving from marketplace to own Shopify store',
    image: '/handmade-crafts-shopify-store.png',
    liveUrl: 'https://handmade-by-amy.example.com',
    slug: 'ecommerce-store',
  },
  {
    id: 'service-business-site',
    title: 'Service Business Site',
    subtitle: 'KL Property Consultants closed 5 new deals within first month of website launch',
    image: '/property-consultant-website.png',
    liveUrl: 'https://kl-property.example.com',
    slug: 'service-business-site',
  },
]

export default function Projects() {
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    projects.reduce((acc, project) => ({ ...acc, [project.id]: true }), {}),
  )

  const handleImageLoad = (projectId: string) => {
    setLoadingImages((prev) => ({ ...prev, [projectId]: false }))
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground mb-2">Projects</p>
            <h2 className="text-3xl font-bold text-foreground mb-2">My Work</h2>
            <p className="text-muted-foreground max-w-2xl">
              See how I&apos;ve helped Malaysian businesses grow with professional websites that
              deliver real results
            </p>
          </div>
          <Button asChild className="self-start md:self-auto">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  {loadingImages[project.id] && (
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                  )}
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} website screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onLoad={() => handleImageLoad(project.id)}
                    style={{ display: loadingImages[project.id] ? 'none' : 'block' }}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.subtitle}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <Link href={`/projects/${project.slug}`}>Read More</Link>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    View Live
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
