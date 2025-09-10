import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  Lightbulb,
  HelpCircle,
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Let&apos;s Work Together</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? I&apos;m here to help Malaysian businesses build
            reliable, affordable digital solutions. Let&apos;s discuss how we can make your vision a
            reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - spans 2 columns */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send Me a Message</CardTitle>
                <CardDescription>
                  Tell me about your project and I&apos;ll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <form className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-input border-border text-foreground"
                      required
                    />
                  </div>

                  <div className="space-y-2 flex-1 flex flex-col">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and budget range..."
                      className="bg-input border-border text-foreground resize-none flex-1 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                  >
                    Send Message
                  </Button>
                </form>
                {/* TODO: Connect to email service for form submissions */}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Socials */}
          {/* TODO: add backend integration for contact information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:irfanfmurad@gmail.com"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">irfanfmurad@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/60189039041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  aria-label="WhatsApp"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+60189039041</p>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Discord</p>
                    <p className="text-sm text-muted-foreground">@ianrikriff</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TODO: add backend integration for connect information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/irfanmurad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://github.com/0x1nfra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href="https://x.com/0x1nfra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Free Project Consultation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Let&apos;s spend 30 minutes discussing your project goals, timeline, and how I can
                  help. We&apos;ll cover your requirements, budget considerations, and next steps -
                  no commitment required.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-2">What to expect:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Project scope and requirements discussion</li>
                    <li>• Timeline and budget planning</li>
                    <li>• Technology recommendations</li>
                    <li>• Clear next steps and proposal outline</li>
                  </ul>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Free Consultation
                </Button>
                {/* TODO: Connect to Notion Calendar booking system */}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  What I&apos;m Excited About
                </h3>
                <p className="text-muted-foreground mb-4">
                  Currently focused on helping Malaysian SMEs digitize their operations with modern
                  web applications. I&apos;m particularly excited about e-commerce solutions,
                  business management systems, and mobile-first designs that work great for local
                  markets.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Taking on:</strong> E-commerce sites, business dashboards, booking
                  systems, and custom web applications. Always interested in projects that make a
                  real difference for local businesses.
                </p>
                {/* TODO: Make this section dynamic with CMS */}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl text-card-foreground">
                Frequently Asked Questions
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                How quickly do you respond?
              </h4>
              <p className="text-muted-foreground">
                I typically respond within 24-48 hours during weekdays. For urgent matters, WhatsApp
                is the fastest way to reach me.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                What&apos;s your change request policy?
              </h4>
              <p className="text-muted-foreground">
                Minor tweaks and adjustments are included. Major scope changes are discussed upfront
                with transparent pricing. I believe in clear communication to avoid surprises.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                How do you work with clients?
              </h4>
              <p className="text-muted-foreground">
                Simple and straightforward: We discuss your needs, I provide a clear proposal, then
                we work in phases with regular updates. Payment terms are flexible for Malaysian
                businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-2">
                Do you work with small businesses?
              </h4>
              <p className="text-muted-foreground">
                I specialize in affordable solutions for Malaysian SMEs. Every business deserves
                professional web presence, regardless of size.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
