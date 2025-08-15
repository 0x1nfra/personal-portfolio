import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react'

const footerLinks = {
  column1: [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Blog Updates', href: '/blog' },
  ],
  column2: [
    { name: 'Facebook Page', href: '#' },
    { name: 'Twitter Feed', href: '#' },
    { name: 'LinkedIn Profile', href: '#' },
    { name: 'Instagram Gallery', href: '#' },
    { name: 'YouTube Channel', href: '#' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/0x1nfra', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/0x1nfra', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/irfanmurad/', label: 'LinkedIn' },
  // { icon: Facebook, href: '#', label: 'Facebook' },
  // { icon: Instagram, href: '#', label: 'Instagram' },
  // { icon: Youtube, href: '#', label: 'YouTube' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  // { name: 'Cookies Settings', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-lg">Irfan Murad</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground max-w-md">Lets build together</h3>

              <p className="text-muted-foreground max-w-md">
                Connect with me for your next project.
              </p>

              {/* Social Icons Section */}
              <div className="lg:col-span-3 flex justify-start lg:justify-start">
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

              {/* <div className="flex space-x-3">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  Button
                </Button>
                <Button variant="outline">Button</Button>
              </div> */}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            {/* <div className="space-y-4">
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 Irfan Murad. All rights reserved.</p>

          {/* TODO: add documents for these links */}
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
        </div>
      </div>
    </footer>
  )
}
