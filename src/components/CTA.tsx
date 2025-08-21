import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-muted/20" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/60 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          Launch Your Business Online for Less
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Save more than 40% on professional web development. I&apos;m offering special rates to my
          first 20 clients to build my portfolio and help Malaysian businesses get online fast.
        </p>

        <div className="inline-block">
          <p className="text-xl md:text-2xl font-bold text-primary bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
            Only 12 spots remaining
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Your Quote
          </Button>
        </div>

        {/* TODO: Connect counter to CMS for dynamic updates */}
        {/* TODO: Hook up "Get Quote" button routing */}
      </div>
    </section>
  )
}
