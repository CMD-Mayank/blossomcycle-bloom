import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Flower-Upcycling™", href: "/process" },
        { name: "Our Impact", href: "/impact" },
        { name: "Artisan Empowerment", href: "/about#artisans" },
      ],
    },
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/shop" },
        { name: "Incense Sticks", href: "/shop?category=incense-sticks" },
        { name: "Incense Cones", href: "/shop?category=incense-cones" },
        { name: "Essential Oils", href: "/shop?category=essential-oils" },
        { name: "Gift Boxes", href: "/shop?category=gift-boxes" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Shipping & Returns", href: "/shipping" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold">BlossomCycle</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Premium handcrafted incense from upcycled temple flowers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © 2025 BlossomCycle Naturals. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-xs text-primary-foreground/60">🌿 100% Natural</span>
              <span className="text-xs text-primary-foreground/60">♻️ Zero Waste</span>
              <span className="text-xs text-primary-foreground/60">🤲 Artisan Made</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
