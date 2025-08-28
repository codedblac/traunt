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
import { Calendar, Clock, Users, Phone, MessageCircle, CheckCircle } from "lucide-react"

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
]

const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Reservation submitted:", formData)
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
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Reservation Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your reservation. We've sent a confirmation email to {formData.email}. We look forward to
                welcoming you to Lumière.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Make Another Reservation
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
              backgroundImage: "url('/luxury-restaurant-reservation-elegant-table.png')",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Reservations</h1>
            <p className="text-xl md:text-2xl font-light">Secure your table for an unforgettable dining experience</p>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Make a Reservation</CardTitle>
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="mt-1"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time *</Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="partySize">Party Size *</Label>
                        <Select
                          value={formData.partySize}
                          onValueChange={(value) => handleInputChange("partySize", value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {partySizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size} {size === "1" ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Dietary restrictions, special occasions, accessibility needs..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Reservation Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold">Dining Hours</p>
                        <p className="text-sm text-muted-foreground">Tuesday - Sunday: 5:00 PM - 10:00 PM</p>
                        <p className="text-sm text-muted-foreground">Closed Mondays</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold">Party Size</p>
                        <p className="text-sm text-muted-foreground">For parties of 10 or more, please call directly</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold">Cancellation Policy</p>
                        <p className="text-sm text-muted-foreground">
                          Please provide 24 hours notice for cancellations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Alternative Booking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Prefer to speak with someone directly? We're here to help.</p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a href="tel:+15551234567">
                          <Phone className="mr-2 h-4 w-4" />
                          Call (555) 123-4567
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      >
                        <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp Reservation
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">Dress Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We maintain a smart casual to business casual dress code. Jackets are appreciated but not required
                      for gentlemen.
                    </p>
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
