"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Ticket, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const carouselEvents = [
  {
    title: "Live Jazz Night",
    description: "Experience an evening of smooth jazz with top musicians.",
    image: "/live-jazz.webp",
  },
  {
    title: "Wine & Dine Evening",
    description: "Exclusive wine pairings with our chef’s special menu.",
    image: "/wine-dine.webp",
  },
  {
    title: "Guest Chef Showcase",
    description: "A Michelin-star guest chef takes over our kitchen.",
    image: "/chef-showcasing.webp",
  },
]

const eventTypes = [
  {
    name: "Weddings",
    image: "/wedding.webp",
    description: "Celebrate your big day with elegance, decor, and gourmet dining.",
  },
  {
    name: "Birthdays",
    image: "/happy-birthday.webp",
    description: "Make your birthday unforgettable with themed menus and fun settings.",
  },
  {
    name: "Baby Showers",
    image: "/babyshower.webp",
    description: "Cherish new beginnings with themed decor and cuisine.",
  },
  {
    name: "Graduations",
    image: "/graduation.webp",
    description: "Celebrate academic success with friends, family, and a festive atmosphere.",
  },
]

const upcomingEvents = [
  {
    title: "Acoustic Evening with John Doe",
    date: "October 12, 2025",
    location: "Maria Havens Lounge",
    price: "$50",
    image: "/acoustic.jpg",
  },
  {
    title: "New Year’s Gala",
    date: "December 31, 2025",
    location: "Grand Ballroom",
    price: "$120",
    image: "/new-year1.jpg",
  },
  {
    title: "Valentine’s Dinner Special",
    date: "February 14, 2026",
    location: "Main Dining Hall",
    price: "$80",
    image: "/valentine1.jpg",
  },
]

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery7.jpg",
]

export default function EventsPage() {
  const [index, setIndex] = useState(0)

  // Auto-rotate carousel every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselEvents.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Carousel */}
        <section className="relative h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={carouselEvents[index].image}
                alt={carouselEvents[index].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white">
                <div className="max-w-3xl px-6">
                  <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
                    {carouselEvents[index].title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    {carouselEvents[index].description}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="#upcoming-events">
                      <Calendar className="mr-2 h-5 w-5" />
                      See Upcoming Events
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {carouselEvents.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full ${
                  i === index ? "bg-accent" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Host Your Special Event
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {eventTypes.map((type, i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      {type.name}
                    </h3>
                    <p className="text-muted-foreground">{type.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      <Link href="/reservations">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming-events" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, i) => (
                <Card
                  key={i}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-serif text-2xl font-semibold">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-accent text-accent-foreground"
                    >
                      {event.price}
                    </Badge>
                    <Button asChild className="w-full">
                      <Link href="/tickets">
                        <Ticket className="mr-2 h-4 w-4" />
                        Buy Tickets
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl font-bold text-center mb-12">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Organiser Section */}
        <section id="organiser" className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Organiser Image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/organiser.jpg"
                alt="Event Organiser"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Organiser Message */}
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold">Meet Your Host</h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                “It’s my greatest joy to bring people together and create
                unforgettable experiences. Whether it’s a wedding, a birthday,
                or a grand celebration, my team and I are here to make it truly
                magical. I warmly invite you to join us at our upcoming events!”
              </p>
              <p className="font-semibold text-xl">
                — Michael Adams, Event Organiser
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
