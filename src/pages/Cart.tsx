import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  // This will be connected to state management later
  const cartItems: any[] = [];
  const subtotal = 0;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-24 w-24 text-muted mx-auto mb-6" />
            <h2 className="font-heading text-2xl font-bold mb-4">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-premium shadow-premium">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart items will be mapped here */}
            </div>

            <div>
              <Card className="shadow-premium sticky top-24">
                <CardContent className="p-6">
                  <h2 className="font-heading text-xl font-bold mb-4">
                    Order Summary
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="border-t pt-3 flex justify-between">
                      <span className="font-heading text-lg font-bold">Total</span>
                      <span className="font-heading text-lg font-bold text-primary">
                        ₹{total}
                      </span>
                    </div>
                  </div>
                  <Link to="/checkout">
                    <Button className="w-full bg-gradient-premium shadow-premium" size="lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
