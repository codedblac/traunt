"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

const inquiryTypes = [
  "General Inquiry",
  "Reservation",
  "Private Events",
  "Catering",
  "Press & Media",
  "Careers",
  "Feedback",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex items-center justify-center min-h-[80vh] bg-background">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-black/60 to-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/luxury-restaurant-contact-elegant-entrance.png')",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light">We'd love to hear from you. Get in touch with our team.</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardContent className="p-8">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Fine Dining Street
                    <br />
                    Culinary District
                    <br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Reservations & Inquiries</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@lumiererestaurant.com" className="hover:text-accent transition-colors">
                      info@mariahavens.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">General Inquiries</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-8">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Tue - Sun: 5:00 PM - 10:00 PM
                    <br />
                    Closed Mondays
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="mt-1"
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Find Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">123 Fine Dining Street, Culinary District</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of the Culinary District, Maria Havens is easily accessible by public
                      transportation. Valet parking is available for your convenience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Need immediate assistance? Reach out to us directly.</p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a href="tel:+15551234567">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a href="mailto:info@lumiererestaurant.com">
                          <Mail className="mr-2 h-4 w-4" />
                          Email Us
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Parking & Transportation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>
                        <strong>Valet Parking:</strong> Available Tuesday - Sunday from 4:30 PM
                      </p>
                      <p>
                        <strong>Public Transit:</strong> 2 blocks from Central Station
                      </p>
                      <p>
                        <strong>Ride Share:</strong> Drop-off zone available on Fine Dining Street
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
