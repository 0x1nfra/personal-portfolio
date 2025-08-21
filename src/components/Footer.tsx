import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Twitter, Linkedin, Github, Mail, ArrowUpRight, MessageCircleMore } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/0x1nfra', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/0x1nfra', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/irfanmurad/', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Logo and CTA Section - Enhanced spacing and typography */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105">
                  <span className="text-primary-foreground font-bold text-lg">IM</span>
                </div>
                <span className="font-bold text-2xl tracking-tight text-foreground">
                  Irfan Murad
                </span>
              </div>

              <div className="space-y-8 max-w-lg">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-foreground leading-tight">
                    Got a project in mind?
                  </h3>
                  <p className="text-muted-foreground text-xl font-medium">
                    Let&apos;s create something amazing together
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <Link
                      href="mailto:irfanfmurad@gmail.com"
                      className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group p-2 -m-2 rounded-lg hover:bg-accent/20"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        <MessageCircleMore className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-lg">Get Quote</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link
                      href="mailto:irfanfmurad@gmail.com"
                      className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors group p-2 -m-2 rounded-lg hover:bg-accent/20"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-lg">irfanfmurad@gmail.com</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Social Links - Enhanced layout and styling */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Navigation
              </h4>
              <nav className="flex flex-col gap-5">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium group inline-flex items-center gap-2 text-base p-1 -m-1 rounded-lg hover:bg-accent/20"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                Connect
              </h4>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted/30 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg group"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Follow me for updates on projects, insights, and industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative my-16">
          <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-medium">
            © 2025 Irfan Murad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
