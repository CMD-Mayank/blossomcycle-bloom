import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Minus, Plus, ShoppingCart, Leaf } from "lucide-react";
import { products } from "@/data/products";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Return to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden shadow-premium">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-4">
              {product.category.replace("-", " ").toUpperCase()}
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-xl text-muted-foreground mb-6">
              {product.longDescription}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Badge variant="secondary" className="gap-1">
                <Leaf className="h-4 w-4" />
                100% Natural
              </Badge>
              <Badge variant="secondary">Handcrafted</Badge>
              <Badge variant="secondary">Eco-Friendly</Badge>
            </div>

            <div className="border-t border-b py-6 mb-6">
              <div className="font-heading text-4xl font-bold text-primary mb-4">
                ₹{product.price}
              </div>

              {product.inStock ? (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-6 py-2 font-medium">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-premium shadow-premium mb-3"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </>
              ) : (
                <Button size="lg" className="w-full" disabled>
                  Out of Stock
                </Button>
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">✓ Free shipping on orders above ₹999</p>
              <p className="mb-2">✓ Easy returns within 30 days</p>
              <p>✓ Supports 350+ women artisans</p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-20">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="usage">How to Use</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">About This Product</h3>
                <p className="text-muted-foreground mb-4">{product.longDescription}</p>
                <h4 className="font-semibold mb-2">Scent Profile:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.scentNotes.map((note) => (
                    <Badge key={note} variant="outline">
                      {note}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Natural Ingredients</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="text-muted-foreground">
                      • {ingredient}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6">
                  100% natural ingredients. No synthetic fragrances, no charcoal, no harmful chemicals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">How to Use</h3>
                <div className="space-y-4">
                  {product.useCases.map((useCase, index) => (
                    <div key={useCase}>
                      <h4 className="font-semibold mb-2">
                        {index + 1}. {useCase}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Perfect for creating the right ambiance and enhancing your practice.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
