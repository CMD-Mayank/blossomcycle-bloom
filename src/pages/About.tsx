import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming sacred temple flowers into premium wellness products while empowering women artisans and protecting our planet.
          </p>
        </section>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Every day, over 8 million flowers are offered at temples across India. These sacred blooms, after fulfilling their divine purpose, often end up polluting our rivers and waterways. We saw an opportunity to honor these flowers while creating something meaningful.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                BlossomCycle Naturals was born from a simple yet powerful idea: What if we could give these temple flowers a second life? What if we could create premium wellness products while supporting women artisans and protecting the environment?
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've upcycled over 22,000 kg of temple flowers, empowered more than 350 women artisans, and created a thriving community of conscious consumers who believe in sustainable luxury.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-premium">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To create the world's finest natural incense and wellness products while solving the temple flower waste problem, empowering marginalized women, and building a sustainable circular economy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-premium">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  A world where every product tells a story of sustainability, every purchase empowers communities, and luxury coexists harmoniously with environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Artisan Empowerment */}
        <section className="mb-20 bg-gradient-hero rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Empowering Women Artisans
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At the heart of BlossomCycle are the skilled women artisans who handcraft each product. We provide fair wages, safe working conditions, flexible hours, and opportunities for skill development.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Many of our artisans are primary breadwinners who were previously unemployed or underemployed. Through our program, they've gained financial independence, learned new skills, and become leaders in their communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-primary mb-2">350+</div>
                <div className="text-sm text-muted-foreground">Women Artisans</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-primary mb-2">₹12L+</div>
                <div className="text-sm text-muted-foreground">Wages Paid</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-primary mb-2">45+</div>
                <div className="text-sm text-muted-foreground">Villages Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Our Sustainability Commitment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Zero Waste Production</h3>
                  <p className="text-muted-foreground">
                    Every part of the flower is utilized. What can't be used in products becomes compost for our organic gardens.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">100% Natural Ingredients</h3>
                  <p className="text-muted-foreground">
                    No charcoal, no chemicals, no synthetic fragrances. Just pure botanical ingredients and essential oils.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Eco-Friendly Packaging</h3>
                  <p className="text-muted-foreground">
                    Recyclable, biodegradable, and minimal. Our packaging is designed to protect products while respecting the planet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Carbon Neutral Shipping</h3>
                  <p className="text-muted-foreground">
                    We offset 100% of shipping emissions through verified carbon reduction projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
