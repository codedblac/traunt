import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Quote, ChefHat, Calendar, Camera } from "lucide-react"

const featuredDishes = [
  {
    name: "Seared Duck Breast",
    description: "Cherry gastrique, roasted vegetables, potato gratin",
    price: "$42",
    image: "/dish2.jpg",
  },
  {
    name: "Pan-Seared Halibut",
    description: "Lemon beurre blanc, seasonal vegetables, herb oil",
    price: "$38",
    image: "/dish4.jpg",
  },
  {
    name: "Wagyu Beef Tenderloin",
    description: "Truffle jus, roasted bone marrow, seasonal greens",
    price: "$65",
    image: "/dish6.jpg",
  },
]

const testimonials = [
  {
    quote: "An extraordinary culinary experience. Every dish was a masterpiece of flavor and presentation.",
    author: "Sarah Mitchell",
    rating: 5,
  },
  {
    quote: "The attention to detail and service quality exceeded all expectations. Truly exceptional.",
    author: "James Rodriguez",
    rating: 5,
  },
  {
    quote: "A perfect evening of fine dining. The ambiance and cuisine create an unforgettable experience.",
    author: "Emily Chen",
    rating: 5,
  },
]

const galleryImages = [
  "/env2.jpg",
  "/click2.jpg",
  "/counter2.jpg",
  "/pizza1.jpg",
  "/chef1.jpg",
  "/grill1.jpg",
  "/juice1.jpg",
  "/juice2.jpg",
  "/'maria-hero.jpg'",
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/maria-hero.jpg')",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Welcome to Maria Havens</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Experience exceptional cuisine in an atmosphere of refined elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3"
              >
                <Link href="/reservations">Reserve a Table</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Featured Dishes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our chef's signature creations, crafted with the finest seasonal ingredients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredDishes.map((dish, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold">{dish.name}</h3>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {dish.price}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{dish.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Maria Havens has been a beacon of culinary excellence, where traditional techniques
                  meet innovative flavors. Our commitment to sourcing the finest ingredients and creating memorable
                  dining experiences has made us a destination for discerning food enthusiasts.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Under the guidance of our award-winning chef, every dish tells a story of passion, creativity, and
                  dedication to the culinary arts.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Link href="/about">
                    <ChefHat className="mr-2 h-4 w-4" />
                    Learn More About Us
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img src="/chef1.jpg" alt="Chef in kitchen" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Gallery</h2>
              <p className="text-lg text-muted-foreground">
                Step into our world of culinary artistry and elegant ambiance
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="/gallery">
                  <Camera className="mr-2 h-4 w-4" />
                  View Full Gallery
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
              <p className="text-lg text-muted-foreground">
                Discover why Maria Havens is the choice for exceptional dining experiences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex justify-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="font-serif text-4xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
            <p className="text-xl mb-8 opacity-90">
              Reserve your table today and discover why Maria Haven is the pinnacle of fine dining
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3"
              >
                <Link href="/reservations">
                  <Calendar className="mr-2 h-5 w-5" />
                  Make Reservation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
