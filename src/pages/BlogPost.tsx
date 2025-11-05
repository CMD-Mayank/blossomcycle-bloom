import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, any> = {
    "why-natural-incense-matters": {
      title: "Why Natural Incense Matters",
      date: "January 15, 2025",
      readTime: "5 min read",
      content: `
        <p>In a world increasingly concerned with wellness and environmental sustainability, the incense we burn in our homes deserves closer attention. Conventional incense often contains harmful chemicals, synthetic fragrances, and charcoal that can negatively impact both our health and the environment.</p>

        <h2>The Hidden Dangers of Conventional Incense</h2>
        <p>Many commercial incense sticks contain:</p>
        <ul>
          <li><strong>Charcoal</strong>: Releases harmful particulate matter when burned</li>
          <li><strong>Synthetic fragrances</strong>: Can trigger allergies and headaches</li>
          <li><strong>Chemical additives</strong>: Unknown long-term health effects</li>
          <li><strong>Toxic binding agents</strong>: May release harmful fumes</li>
        </ul>

        <h2>The Natural Alternative</h2>
        <p>Natural incense, made from pure botanical ingredients, offers numerous benefits:</p>
        <ul>
          <li>Clean, pure fragrance without chemical additives</li>
          <li>No harmful smoke or particulate matter</li>
          <li>Supports traditional craftsmanship</li>
          <li>Biodegradable and environmentally friendly</li>
        </ul>

        <h2>Making the Switch</h2>
        <p>Transitioning to natural incense is simple. Look for products that:</p>
        <ul>
          <li>List all natural ingredients</li>
          <li>Are free from charcoal and synthetic fragrances</li>
          <li>Are handcrafted using traditional methods</li>
          <li>Support sustainable and ethical practices</li>
        </ul>

        <p>Your home should be a sanctuary. Choosing natural incense is a simple yet powerful step toward creating a healthier, more harmonious living space.</p>
      `,
    },
    "flower-upcycling-environment": {
      title: "How Flower-Upcycling Saves the Environment",
      date: "January 10, 2025",
      readTime: "6 min read",
      content: `
        <p>Every day, over 8 million flowers are offered at temples across India. While these offerings hold deep spiritual significance, what happens to them afterward creates a significant environmental problem.</p>

        <h2>The Temple Flower Waste Crisis</h2>
        <p>Temple flowers, after serving their sacred purpose, are often discarded into rivers and waterways. This practice leads to:</p>
        <ul>
          <li><strong>Water pollution</strong>: Decomposing flowers release harmful chemicals</li>
          <li><strong>Oxygen depletion</strong>: Affects aquatic life and ecosystems</li>
          <li><strong>Pesticide contamination</strong>: Flowers often contain agricultural chemicals</li>
          <li><strong>Massive waste</strong>: Nearly 800 tons of flower waste annually</li>
        </ul>

        <h2>The Upcycling Solution</h2>
        <p>Flower-upcycling transforms this environmental problem into an opportunity:</p>
        <ul>
          <li>Prevents pollution of rivers and waterways</li>
          <li>Creates valuable products from "waste" material</li>
          <li>Establishes a circular economy model</li>
          <li>Generates employment for marginalized communities</li>
        </ul>

        <h2>The Triple Bottom Line</h2>
        <p>Our flower-upcycling process creates positive impact across three dimensions:</p>
        
        <h3>Environmental</h3>
        <p>22,000+ kg of flowers diverted from waterways, preventing pollution and preserving aquatic ecosystems.</p>
        
        <h3>Social</h3>
        <p>350+ women artisans employed, providing dignified work and economic independence.</p>
        
        <h3>Economic</h3>
        <p>Creating premium products that consumers love, proving sustainability can be profitable.</p>

        <p>Flower-upcycling demonstrates that environmental solutions can be beautiful, effective, and scalable. It's not just about managing waste—it's about reimagining our relationship with nature and resources.</p>
      `,
    },
    "aromatherapy-science": {
      title: "The Science of Aromatherapy",
      date: "January 5, 2025",
      readTime: "7 min read",
      content: `
        <p>Aromatherapy isn't just about pleasant scents—it's a scientifically-supported practice that can genuinely affect our physical and mental wellbeing. Let's explore the fascinating research behind natural fragrances.</p>

        <h2>How Aromatherapy Works</h2>
        <p>When we inhale aromatic molecules, they travel through the nose to the olfactory bulb, which sends signals directly to the limbic system—the brain's emotional control center. This direct pathway explains why scents can instantly affect our mood and memories.</p>

        <h2>Scientific Benefits of Natural Fragrances</h2>
        
        <h3>Lavender for Relaxation</h3>
        <p>Research shows lavender can reduce anxiety, improve sleep quality, and lower heart rate. Studies have demonstrated its effectiveness in clinical settings.</p>
        
        <h3>Rose for Emotional Balance</h3>
        <p>Rose essential oil has been shown to reduce stress hormones, improve mood, and provide mild antidepressant effects.</p>
        
        <h3>Sandalwood for Focus</h3>
        <p>Sandalwood aromatherapy can enhance alertness, attention, and cognitive performance, making it ideal for meditation and work.</p>

        <h2>The Importance of Natural Sources</h2>
        <p>Synthetic fragrances may smell similar, but they lack the complex chemical profiles of natural botanicals. Natural essential oils contain hundreds of compounds working synergistically, while synthetic versions typically contain only a handful of chemicals.</p>

        <h2>Practical Applications</h2>
        <ul>
          <li><strong>Morning</strong>: Energizing scents like marigold and lemongrass</li>
          <li><strong>Daytime</strong>: Focus-enhancing fragrances like sandalwood</li>
          <li><strong>Evening</strong>: Calming scents like jasmine and lavender</li>
          <li><strong>Meditation</strong>: Grounding aromas like lotus and frankincense</li>
        </ul>

        <p>The science is clear: natural aromatherapy works. By choosing authentic, botanical-based products, you're not just enjoying pleasant fragrances—you're engaging in a time-tested wellness practice backed by modern research.</p>
      `,
    },
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article className="animate-fade-in">
            <header className="mb-8">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            <div className="h-[400px] bg-gradient-hero rounded-2xl mb-8"></div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
