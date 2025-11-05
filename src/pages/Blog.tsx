import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      slug: "why-natural-incense-matters",
      title: "Why Natural Incense Matters",
      excerpt: "Discover the hidden dangers in conventional incense and why switching to natural alternatives can transform your health and environment.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Wellness",
    },
    {
      slug: "flower-upcycling-environment",
      title: "How Flower-Upcycling Saves the Environment",
      excerpt: "Temple flowers contribute to massive water pollution. Learn how upcycling creates a circular economy that benefits everyone.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Sustainability",
    },
    {
      slug: "aromatherapy-science",
      title: "The Science of Aromatherapy",
      excerpt: "Explore the fascinating research behind how natural fragrances affect our mood, health, and wellbeing.",
      date: "January 5, 2025",
      readTime: "7 min read",
      category: "Science",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stories, insights, and wisdom about sustainable wellness, aromatherapy, and conscious living
          </p>
        </section>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="hover-scale shadow-soft hover:shadow-premium transition-all">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-hero"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="group p-0">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
