import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Mail } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

// TODO: add legal documents
const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/0x1nfra', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/0x1nfra', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/irfanmurad/', label: 'LinkedIn' },
  // { icon: Facebook, href: '#', label: 'Facebook' },
  // { icon: Instagram, href: '#', label: 'Instagram' },
  // { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IM</span>
              </div>
              <span className="font-bold text-lg">Irfan Murad</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground max-w-md">Lets build together</h3>

              <p className="text-muted-foreground max-w-md">
                Connect with me for your next project.
              </p>
            </div>
          </div>

          {/* Navigation Links - Vertical & Centered */}
          <nav className="flex flex-col gap-3 items-center text-center justify-self-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Section - More Width */}
          {/* TODO: add sending email functions */}
          <div className="space-y-4 justify-self-end w-full max-w-xs">
            <h3 className="text-sm font-medium">Contact</h3>
            <div className="space-y-3">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Button type="submit" size="sm" className="w-full">
                Get In Touch
              </Button>
            </div>

            {/* Social Icons Section */}
            <div className="pt-2">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                    target="_blank"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 Irfan Murad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
