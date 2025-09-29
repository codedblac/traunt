import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Users, Utensils } from "lucide-react"

const timeline = [
  {
    year: "2001",
    title: "The Beginning",
    description: "Maria Havens opened its doors with a vision to create an extraordinary dining experience.",
  },
  {
    year: "2005",
    title: "First Michelin Star",
    description: "Recognition of our commitment to culinary excellence with our first Michelin star.",
  },
  {
    year: "2010",
    title: "Expansion & Renovation",
    description: "Complete renovation and expansion to accommodate our growing community of food enthusiasts.",
  },
  {
    year: "2015",
    title: "James Beard Award",
    description: "Chef Laurent received the prestigious James Beard Award for Outstanding Chef.",
  },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Launched our farm-to-table program and zero-waste kitchen initiative.",
  },
  {
    year: "2024",
    title: "Today",
    description: "Continuing to push culinary boundaries while honoring traditional techniques.",
  },
]

const values = [
  {
    icon: <Utensils className="h-8 w-8 text-accent" />,
    title: "Culinary Excellence",
    description: "We source the finest ingredients and employ time-honored techniques to create exceptional dishes.",
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Passionate Service",
    description: "Our team is dedicated to providing warm, attentive service that makes every guest feel special.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Community",
    description: "We believe in supporting local farmers, artisans, and creating connections through food.",
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Innovation",
    description: "While respecting tradition, we continuously explore new flavors and presentation techniques.",
  },
]

const team = [
  {
    name: "Chef Laurent Dubois",
    position: "Executive Chef & Owner",
    description:
      "With over 25 years of culinary experience, Chef Laurent brings French technique and global inspiration to every dish.",
    image: "/chef-laurent-dubois-executive-chef.png",
    awards: ["James Beard Award", "Michelin Star", "AAA Five Diamond"],
  },
  {
    name: "Sarah Chen",
    position: "Pastry Chef",
    description:
      "Sarah's innovative desserts perfectly balance classic techniques with modern presentation and unexpected flavor combinations.",
    image: "/pastry-chef-sarah-chen-dessert-specialist.png",
    awards: ["Best Pastry Chef 2023", "Culinary Institute Graduate"],
  },
  {
    name: "Marcus Thompson",
    position: "Sommelier",
    description:
      "Marcus curates our extensive wine collection and creates perfect pairings to complement each dish on our menu.",
    image: "/sommelier-marcus-thompson-wine-expert.png",
    awards: ["Master Sommelier", "Wine Spectator Award"],
  },
  {
    name: "Elena Rodriguez",
    position: "General Manager",
    description:
      "Elena ensures every aspect of your dining experience exceeds expectations, from reservation to farewell.",
    image: "/general-manager-elena-rodriguez.png",
    awards: ["Hospitality Excellence Award", "15 Years Experience"],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-black/60 to-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/env3.jpg",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl font-light">
              Two decades of culinary passion and unwavering commitment to excellence
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At Maria Havens, we believe that dining is more than just a meal—it's an experience that engages all the
              senses. Our mission is to create unforgettable moments through exceptional cuisine, impeccable service,
              and an atmosphere that celebrates the art of fine dining.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every dish we serve tells a story of passion, creativity, and respect for the ingredients that nature
              provides. We are committed to sustainability, community, and the continuous pursuit of culinary
              excellence.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">From humble beginnings to culinary recognition</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground mb-4 text-lg px-4 py-2">
                      {item.year}
                    </Badge>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="mb-6">{value.icon}</div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The passionate professionals behind your exceptional dining experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.awards.map((award, awardIndex) => (
                        <Badge key={awardIndex} variant="outline" className="text-xs">
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
