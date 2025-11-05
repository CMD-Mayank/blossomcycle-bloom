import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const orderId = "BLC" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          <Card className="shadow-premium mb-8">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold mb-2">
                  Order #{orderId}
                </h2>
                <p className="text-muted-foreground">
                  A confirmation email has been sent to your email address
                </p>
              </div>

              <div className="bg-gradient-hero rounded-lg p-6 mb-6">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Order Processing</p>
                      <p className="text-sm text-muted-foreground">
                        We'll prepare your handcrafted products with care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Quality Check</p>
                      <p className="text-sm text-muted-foreground">
                        Each product is inspected before packaging
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        Your order will be shipped within 1-2 business days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        Expected delivery in 5-7 business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/shop">
                  <Button size="lg" className="bg-gradient-premium shadow-premium">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline">
                    Return Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              Need help? Contact us at{" "}
              <a href="mailto:support@blossomcycle.com" className="text-primary hover:underline">
                support@blossomcycle.com
              </a>
            </p>
            <p>
              or call{" "}
              <a href="tel:+911234567890" className="text-primary hover:underline">
                +91 123 456 7890
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
