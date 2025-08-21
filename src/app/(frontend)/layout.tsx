import React from 'react'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './styles.css'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
