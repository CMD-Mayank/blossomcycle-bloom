import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, RotateCcw, Shield } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Shipping & Returns
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, secure delivery and hassle-free returns for your peace of mind
          </p>
        </section>

        {/* Shipping Information */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Truck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Domestic Shipping</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Standard delivery: 5-7 business days</li>
                  <li>• Express delivery: 2-3 business days</li>
                  <li>• Free shipping on orders above ₹999</li>
                  <li>• Tracking provided for all orders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Package className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">International Shipping</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivery: 10-15 business days</li>
                  <li>• Available to most countries</li>
                  <li>• Custom duties may apply</li>
                  <li>• Full tracking available</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-premium mb-12">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Shipping Rates</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-semibold">Order Value</th>
                      <th className="text-left py-3 font-semibold">Standard</th>
                      <th className="text-left py-3 font-semibold">Express</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-3">Below ₹999</td>
                      <td className="py-3">₹99</td>
                      <td className="py-3">₹199</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">₹999 and above</td>
                      <td className="py-3 text-primary font-semibold">FREE</td>
                      <td className="py-3">₹149</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Returns Policy */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <RotateCcw className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Easy Returns</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 30-day return window</li>
                  <li>• Unused products in original packaging</li>
                  <li>• Full refund or exchange</li>
                  <li>• Simple return process</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Damaged Products</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Report within 48 hours of delivery</li>
                  <li>• Photo documentation required</li>
                  <li>• Free replacement or full refund</li>
                  <li>• No return shipping charges</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-premium">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Return Policy Details</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Eligible for Returns</h3>
                  <ul className="space-y-1">
                    <li>• Unopened products in original packaging</li>
                    <li>• Damaged or defective items (with photo proof)</li>
                    <li>• Wrong product delivered</li>
                    <li>• Quality issues (even if opened)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Not Eligible for Returns</h3>
                  <ul className="space-y-1">
                    <li>• Opened products if returned solely due to scent preference</li>
                    <li>• Products used or damaged by customer</li>
                    <li>• Items returned after 30 days</li>
                    <li>• Gift boxes with missing items</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">How to Return</h3>
                  <ol className="space-y-1 list-decimal list-inside">
                    <li>Contact our support team with your order number</li>
                    <li>Receive return authorization and shipping label</li>
                    <li>Pack items securely in original packaging</li>
                    <li>Ship using provided label or our courier pickup</li>
                    <li>Receive refund within 7-10 business days of receipt</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Exchange Policy</h3>
                  <p>
                    We're happy to exchange products if you'd prefer a different scent or product. 
                    Exchanges follow the same process as returns. If the new item is more expensive, 
                    you'll pay the difference. If it's less expensive, we'll refund the difference.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Refund Timeline</h3>
                  <p>
                    Once we receive your return, we'll inspect it and process your refund within 
                    7-10 business days. Refunds will be credited to your original payment method. 
                    Please allow your bank an additional 5-7 business days for the credit to appear 
                    in your account.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center max-w-2xl mx-auto p-8 bg-gradient-hero rounded-2xl">
          <h2 className="font-heading text-2xl font-bold mb-4">
            Questions about shipping or returns?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our customer support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@blossomcycle.com">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Email Support
              </button>
            </a>
            <a href="/contact">
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Contact Form
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
