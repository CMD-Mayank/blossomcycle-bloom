import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="hover-scale cursor-pointer border-2 hover:border-primary transition-all shadow-soft hover:shadow-premium overflow-hidden">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          {!product.inStock && (
            <Badge variant="destructive" className="mb-2">
              Out of Stock
            </Badge>
          )}
          <h3 className="font-heading text-lg font-semibold mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-heading text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            <Button 
              size="sm" 
              className="bg-gradient-premium"
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Unavailable"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
