'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo/Brand - Enhanced with better typography */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-sm">IM</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              Irfan Murad
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Menu - Enhanced spacing and hover effects */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                About me
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/services"
                className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects"
                className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={cn(
                  'group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions - Enhanced CTA button */}
        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            className="hidden sm:inline-flex rounded-lg px-4 py-2 font-medium shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105"
          >
            Get Quote
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container px-6 py-4 space-y-2">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About me
            </Link>
            <Link
              href="/services"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button
                size="sm"
                className="w-full rounded-lg font-medium shadow-sm transition-all duration-200 hover:shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
