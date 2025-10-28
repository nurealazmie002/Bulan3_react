import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0 border-b">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full h-48 object-contain rounded-t-lg p-4"
        />
      </CardHeader>
      <CardContent className="pt-4 flex-1">
        <CardTitle className="text-base font-medium line-clamp-2 h-12">
          {product.title}
        </CardTitle>
        <p className="text-lg font-semibold text-primary mt-2">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};