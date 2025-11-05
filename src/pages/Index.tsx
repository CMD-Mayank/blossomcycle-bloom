import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Sparkles, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const categories = [
    {
      name: "Incense Sticks",
      description: "Hand-rolled premium incense",
      href: "/shop?category=incense-sticks",
      icon: Sparkles,
    },
    {
      name: "Incense Cones",
      description: "Artisan-crafted cones",
      href: "/shop?category=incense-cones",
      icon: Sparkles,
    },
    {
      name: "Essential Oils",
      description: "Pure botanical extracts",
      href: "/shop?category=essential-oils",
      icon: Leaf,
    },
    {
      name: "Gift Boxes",
      description: "Curated wellness sets",
      href: "/shop?category=gift-boxes",
      icon: Heart,
    },
  ];

  const stats = [
    { value: "22,000+", label: "kg flowers upcycled" },
    { value: "350+", label: "women artisans empowered" },
    { value: "100%", label: "natural & charcoal-free" },
    { value: "Zero", label: "waste production" },
  ];

  const testimonials = [
    {
      text: "The quality and fragrance are unmatched. Knowing these are made from temple flowers makes them even more special.",
      author: "Priya Sharma",
      location: "Mumbai",
    },
    {
      text: "Finally, incense that's truly natural. No headaches, just pure, calming aromatherapy.",
      author: "Rajesh Kumar",
      location: "Bangalore",
    },
    {
      text: "Beautiful packaging, incredible scents, and supporting a sustainable cause. What's not to love?",
      author: "Anita Desai",
      location: "Delhi",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              From Sacred Flowers to Soulful Wellness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Premium incense and home-fragrance products handcrafted using upcycled temple flowers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-premium shadow-premium hover:shadow-soft">
                  Shop Bestsellers
                </Button>
              </Link>
              <Link to="/process">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Flower-Upcycling™
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Explore Our Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product handcrafted with love, sustainability, and ancient wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={category.name} to={category.href}>
                <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-all shadow-soft hover:shadow-premium">
                  <CardContent className="p-6 text-center">
                    <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Flower-Upcycling™ Process
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We transform temple flowers into premium wellness products through a meticulous, eco-friendly process
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { step: "1", title: "Collection", desc: "Temple flower gathering" },
                { step: "2", title: "Cleaning", desc: "Sun-drying process" },
                { step: "3", title: "Crafting", desc: "Hand-rolling by artisans" },
                { step: "4", title: "Quality", desc: "Testing & packaging" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <Link to="/process">
              <Button variant="outline" size="lg">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
