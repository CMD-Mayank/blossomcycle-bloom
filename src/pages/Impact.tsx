import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Heart, Droplet, Recycle, TrendingUp } from "lucide-react";

const Impact = () => {
  const impactAreas = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      stats: [
        { value: "22,000+", label: "kg flowers diverted from rivers" },
        { value: "100%", label: "biodegradable products" },
        { value: "Zero", label: "chemical waste" },
        { value: "Carbon", label: "neutral operations" },
      ],
      description: "By upcycling temple flowers, we prevent water pollution, reduce waste, and create products that return harmlessly to the earth.",
    },
    {
      icon: Users,
      title: "Social Impact",
      stats: [
        { value: "350+", label: "women artisans employed" },
        { value: "₹12L+", label: "in fair wages paid" },
        { value: "45+", label: "villages reached" },
        { value: "100%", label: "women-led production" },
      ],
      description: "We provide dignified employment, fair wages, and skill development opportunities to women from marginalized communities.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      stats: [
        { value: "50+", label: "temple partnerships" },
        { value: "1000+", label: "families supported" },
        { value: "Free", label: "skill training provided" },
        { value: "Healthcare", label: "benefits included" },
      ],
      description: "Our model creates ripple effects across communities, supporting families, temples, and local economies.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Started with 5 artisans and 1 temple partnership",
    },
    {
      year: "2021",
      title: "Scaling Up",
      description: "Expanded to 50 artisans across 10 temples",
    },
    {
      year: "2022",
      title: "National Reach",
      description: "200 artisans, 30 temples, nationwide delivery",
    },
    {
      year: "2023",
      title: "Impact Leadership",
      description: "350+ artisans, 50+ temples, international recognition",
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "22,000+ kg upcycled, certified B-Corp status",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measuring what matters: environmental protection, social empowerment, and community transformation
          </p>
        </section>

        {/* Impact Areas */}
        <section className="mb-20">
          <div className="space-y-16">
            {impactAreas.map((area, index) => (
              <div key={area.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="shadow-premium overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 lg:p-12 bg-gradient-hero">
                        <area.icon className="h-12 w-12 text-primary mb-4" />
                        <h2 className="font-heading text-3xl font-bold mb-4">
                          {area.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {area.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {area.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="font-heading text-2xl font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-secondary p-8 lg:p-12 flex items-center justify-center">
                        <area.icon className="h-48 w-48 text-primary opacity-20" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 shadow-soft hover-scale">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Metrics */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-12 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              Sustainability Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Droplet className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Water Saved</h3>
                <div className="text-3xl font-bold mb-2">2.5M+</div>
                <p className="text-sm opacity-90">Liters of clean water preserved</p>
              </div>
              <div className="text-center">
                <Recycle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Waste Diverted</h3>
                <div className="text-3xl font-bold mb-2">22 Tons</div>
                <p className="text-sm opacity-90">Organic waste upcycled</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Carbon Offset</h3>
                <div className="text-3xl font-bold mb-2">150 Tons</div>
                <p className="text-sm opacity-90">CO₂ emissions prevented</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Recognition & Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "B-Corp Certified",
              "UN SDG Award",
              "Women's Empowerment",
              "Carbon Neutral",
            ].map((cert) => (
              <Card key={cert} className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impact;
