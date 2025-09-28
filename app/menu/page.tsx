"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Fish, Wheat, Wine } from "lucide-react"

const menuCategories = ["All", "Starters", "Mains", "Desserts", "Drinks"]
const dietaryFilters = ["All", "Vegetarian", "Vegan", "Gluten-Free", "Seafood"]

const menuItems = [
  {
    category: "Starters",
    name: "Oysters Rockefeller",
    description: "Fresh Blue Point oysters, spinach, herbs, Pernod cream",
    price: "$18",
    dietary: ["Seafood"],
    image: "/dish13.jpg",
  },
  {
    category: "Starters",
    name: "Foie Gras Terrine",
    description: "House-made terrine, brioche toast, fig compote",
    price: "$24",
    dietary: [],
    image: "/dish2.jpg",
  },
  {
    category: "Starters",
    name: "Burrata & Heirloom Tomatoes",
    description: "Creamy burrata, seasonal tomatoes, basil oil, aged balsamic",
    price: "$16",
    dietary: ["Vegetarian"],
    image: "/dish3.jpg",
  },
  {
    category: "Mains",
    name: "Wagyu Beef Tenderloin",
    description: "8oz prime cut, truffle jus, roasted bone marrow, seasonal vegetables",
    price: "$65",
    dietary: [],
    image: "/dish4.jpg",
  },
  {
    category: "Mains",
    name: "Pan-Seared Halibut",
    description: "Atlantic halibut, lemon beurre blanc, roasted vegetables, herb oil",
    price: "$38",
    dietary: ["Seafood"],
    image: "/dish6.jpg",
  },
  {
    category: "Mains",
    name: "Duck Confit",
    description: "Slow-cooked duck leg, cherry gastrique, potato gratin, wilted greens",
    price: "$42",
    dietary: [],
    image: "/dish5.jpg",
  },
  {
    category: "Mains",
    name: "Mushroom Wellington",
    description: "Wild mushroom duxelles, puff pastry, red wine reduction, root vegetables",
    price: "$32",
    dietary: ["Vegetarian"],
    image: "/dish7.jpg",
  },
  {
    category: "Desserts",
    name: "Chocolate Soufflé",
    description: "Dark chocolate soufflé, vanilla bean ice cream, gold leaf",
    price: "$14",
    dietary: ["Vegetarian"],
    image: "/dish12.jpg",
  },
  {
    category: "Desserts",
    name: "Crème Brûlée",
    description: "Vanilla bean custard, caramelized sugar, fresh berries",
    price: "$12",
    dietary: ["Vegetarian"],
    image: "/dish11.jpg",
  },
  {
    category: "Desserts",
    name: "Lemon Tart",
    description: "Meyer lemon curd, almond crust, candied lemon, mint",
    price: "$13",
    dietary: ["Vegetarian"],
    image: "/dish6.jpg",
  },
  {
    category: "Drinks",
    name: "Sommelier's Selection",
    description: "Curated wine pairing for your meal",
    price: "$25",
    dietary: [],
    image: "/wine2.jpg",
  },
  {
    category: "Drinks",
    name: "Signature Cocktail",
    description: "House-crafted cocktail with premium spirits",
    price: "$16",
    dietary: [],
    image: "/wine1.jpg",
  },
]

const getDietaryIcon = (dietary: string) => {
  switch (dietary) {
    case "Vegetarian":
      return <Leaf className="h-4 w-4 text-green-600" />
    case "Vegan":
      return <Leaf className="h-4 w-4 text-green-700" />
    case "Gluten-Free":
      return <Wheat className="h-4 w-4 text-amber-600" />
    case "Seafood":
      return <Fish className="h-4 w-4 text-blue-600" />
    default:
      return null
  }
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietary, setSelectedDietary] = useState("All")

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
    const dietaryMatch = selectedDietary === "All" || item.dietary.includes(selectedDietary)
    return categoryMatch && dietaryMatch
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-black/60 to-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/dish2.jpg')",
            }}
          />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl md:text-2xl font-light">
              Discover our carefully curated selection of exceptional dishes
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {menuCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Dietary Options</h3>
                <div className="flex flex-wrap gap-2">
                  {dietaryFilters.map((filter) => (
                    <Button
                      key={filter}
                      variant={selectedDietary === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDietary(filter)}
                      className={
                        selectedDietary === filter
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          : "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      }
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold">{item.name}</h3>
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {item.price}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    {item.dietary.length > 0 && (
                      <div className="flex gap-2">
                        {item.dietary.map((diet) => (
                          <div key={diet} className="flex items-center gap-1">
                            {getDietaryIcon(diet)}
                            <span className="text-xs text-muted-foreground">{diet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wine Pairing CTA */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto text-center px-6">
            <Wine className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Wine Pairing Available</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enhance your dining experience with our sommelier's expertly selected wine pairings
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#wine-pairing">Explore Wine Selection</a>
            </Button>
          </div>
        </section>
        
        {/* Wine Pairing Section */}
<section id="wine-pairing" className="py-20 bg-background border-t border-border">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="font-serif text-4xl font-bold text-center mb-12">Wine Pairing Selection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example wines — you can expand this list */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2">Chardonnay Reserve</h3>
          <p className="text-muted-foreground mb-4">
            A crisp and elegant Chardonnay, perfect with seafood and light starters.
          </p>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">$28 / Glass</Badge>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2">Pinot Noir Vintage</h3>
          <p className="text-muted-foreground mb-4">
            Smooth and fruit-forward, pairs beautifully with duck, beef, or mushroom dishes.
          </p>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">$34 / Glass</Badge>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2">Champagne Brut</h3>
          <p className="text-muted-foreground mb-4">
            Classic French Champagne, ideal for desserts or celebrations.
          </p>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">$45 / Glass</Badge>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}
