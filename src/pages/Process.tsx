import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import processFlowers from "@/assets/process-flowers.jpg";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Temple Flower Collection",
      description: "Our team partners with temples across India to collect flowers immediately after ceremonies. This prevents them from entering waterways and causing pollution.",
      details: [
        "Daily collection from 50+ temples",
        "Respectful handling of sacred flowers",
        "Prevents water pollution",
        "Creates employment opportunities",
      ],
    },
    {
      number: "02",
      title: "Cleaning & Sun-Drying",
      description: "Flowers are carefully cleaned to remove any debris, then sun-dried using traditional methods. This preserves their natural fragrance and properties.",
      details: [
        "Gentle cleaning process",
        "Natural sun-drying technique",
        "Preserves essential oils",
        "Zero chemical treatment",
      ],
    },
    {
      number: "03",
      title: "Hand-Rolling & Crafting",
      description: "Our skilled women artisans hand-roll each incense stick and craft every product with care. Traditional techniques meet modern quality standards.",
      details: [
        "Hand-rolled by artisans",
        "Traditional craftsmanship",
        "Fair wages paid",
        "Quality control at every step",
      ],
    },
    {
      number: "04",
      title: "Drying & Quality Check",
      description: "Products undergo careful drying and rigorous quality testing. Only the finest pieces make it to packaging.",
      details: [
        "Controlled drying environment",
        "Multi-point quality checks",
        "Fragrance testing",
        "Burn time verification",
      ],
    },
    {
      number: "05",
      title: "Eco-Friendly Packaging",
      description: "Final products are packaged in recyclable, biodegradable materials with minimal waste. Beautiful presentation meets environmental responsibility.",
      details: [
        "100% recyclable materials",
        "Biodegradable packaging",
        "Minimal plastic use",
        "Reusable containers",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Flower-Upcycling™ Process
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How we transform temple flowers into premium wellness products through our proprietary sustainable process
          </p>
        </section>

        {/* Process Image */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-premium">
            <img
              src={processFlowers}
              alt="Temple flowers being collected"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-20 bg-gradient-hero rounded-2xl p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
              The Problem We're Solving
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">8M+</div>
                <p className="text-sm text-muted-foreground">
                  Flowers offered at temples daily in India
                </p>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">800T</div>
                <p className="text-sm text-muted-foreground">
                  Tons of flower waste generated annually
                </p>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-primary mb-2">Rivers</div>
                <p className="text-sm text-muted-foreground">
                  Polluted by decomposing flowers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Our 5-Step Process
            </h2>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold">
                        {step.number}
                      </div>
                      <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Card className={`shadow-premium ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <CardContent className="p-8">
                      <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Process Step {step.number}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
              Our Impact So Far
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="font-heading text-4xl font-bold mb-2">22,000+</div>
                <div className="text-sm opacity-90">kg flowers upcycled</div>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold mb-2">350+</div>
                <div className="text-sm opacity-90">women employed</div>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">natural products</div>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold mb-2">Zero</div>
                <div className="text-sm opacity-90">waste produced</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
