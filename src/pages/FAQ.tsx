import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are your products safe for people with allergies?",
      answer: "Our products contain 100% natural ingredients with no synthetic additives. However, if you have specific allergies to botanical ingredients, please check the ingredient list on each product. We're happy to provide detailed ingredient information for any product upon request.",
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically arrive within 5-7 business days. We offer expedited shipping options at checkout. International shipping times vary by destination but generally take 10-15 business days.",
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery for unused products in original packaging. Opened products can be returned if you're unsatisfied with quality, but not for scent preference. See our Shipping & Returns page for full details.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and times vary by destination. Custom duties and import taxes may apply depending on your country's regulations.",
    },
    {
      question: "Are your incense sticks really charcoal-free?",
      answer: "Absolutely! Our incense contains zero charcoal. We use natural bamboo sticks coated with botanical ingredients and essential oils. This makes them cleaner-burning and healthier than conventional charcoal-based incense.",
    },
    {
      question: "How should I store my incense and oils?",
      answer: "Store incense in a cool, dry place away from direct sunlight. Keep essential oils tightly sealed in dark glass bottles away from heat and light. Proper storage preserves fragrance and potency for months.",
    },
    {
      question: "Can I visit your production facility?",
      answer: "We occasionally organize tours for customers interested in seeing our flower-upcycling process. Please contact us to inquire about upcoming tour dates and availability.",
    },
    {
      question: "Do you wholesale to retailers?",
      answer: "Yes, we work with select retailers who share our values of sustainability and quality. Please email us at wholesale@blossomcycle.com for wholesale pricing and requirements.",
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can use this to track your package through our shipping partner's website.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets through our secure Razorpay payment gateway. All transactions are encrypted and secure.",
    },
    {
      question: "How long do your products last?",
      answer: "Incense sticks burn for 45-60 minutes each. Essential oils last 6-12 months when stored properly. Each product page includes specific burn time and usage information.",
    },
    {
      question: "Are your products cruelty-free and vegan?",
      answer: "Yes! All our products are 100% vegan and cruelty-free. We never test on animals and use only plant-based ingredients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our products, shipping, and sustainability practices
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-gradient-hero rounded-2xl">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to our customer support team.
            </p>
            <a href="/contact">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
