import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Globe, Edit3, ShoppingCart } from 'lucide-react'

export default function Services() {
  /* TODO: add payload implementation here */
  const services = [
    {
      icon: Globe,
      title: 'Business Website',
      subtitle:
        'Fast, professional websites ready in days. Perfect for businesses that need an online presence quickly without the complexity',
      features: [
        'Professional design that builds trust',
        'Mobile-friendly for all devices',
        'Showcase your services and contact details',
        'Ready to launch in 3-5 days',
      ],
      priceRange: 'RM500',
      popular: false,
    },
    {
      icon: Edit3,
      title: 'Website + Content Manager',
      subtitle:
        'Update your content anytime, no developer needed. Ideal for businesses that frequently change their offerings',
      features: [
        'Easy content management system',
        'Update prices and services yourself',
        'No monthly developer fees',
        "We'll teach you how to use it",
      ],
      priceRange: 'RM1,000',
      popular: true,
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Storefront',
      subtitle:
        'Sell directly to customers, keep more profits. Stop relying on Shopee/Lazada - build your own branded store',
      features: [
        'Your own branded online store',
        'Keep 100% of your profits',
        'Inventory and order management',
        'Payment gateway integration (Stripe)',
      ],
      priceRange: 'RM2,000',
      popular: false,
    },
  ]

  return (
    <section className="py-4 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-6">Services</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Affordable Web Solutions for Malaysian Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional websites that don&apos;t break the bank. Get online quickly and start
            growing your business today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* TODO: add payload implementation here */}
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative h-full transition-all duration-300 hover:shadow-lg ${service.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col h-full">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">
                        From {service.priceRange}
                      </span>
                      <span className="text-xs text-muted-foreground">One-time cost</span>
                    </div>

                    <Button className="w-full" variant={service.popular ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Not sure which option fits your business?
          </h3>
          <p className="text-muted-foreground mb-4">
            Tell us about your business goals and find the right solution for your budget.
          </p>
          {/* TODO: add scheduling function with Notion */}
          <Button size="lg" className="px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
