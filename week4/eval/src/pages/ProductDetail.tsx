import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { useProducts } from '@/hooks/useProducts';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PackageOpen, Edit, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, loading } = useProducts();
  const { role } = useAuth();
  const { addToCart } = useCart(); 

  const product = useMemo(() => {
    return getProductById(Number(id));
  }, [id, getProductById]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col md:flex-row gap-8">
        <Skeleton className="w-full md:w-1/2 h-96" />
        <div className="md:w-1/2 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-12 w-40" />
          return <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <Alert variant="destructive">
        <PackageOpen className="h-4 w-4" />
        <AlertTitle>Product Not Found</AlertTitle>
        <AlertDescription>
          Produk yang Anda cari tidak dapat ditemukan.
        </AlertDescription>
      </Alert>
    );

  }

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
        <CardHeader className="p-4 md:p-6 bg-secondary flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square object-contain w-full max-w-md"
          />
        </CardHeader>
        <CardContent className="p-4 md:p-6 grid gap-4">
          <div>
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {product.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold mt-1">{product.title}</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-sm font-semibold">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
          </div>
          
          {role === 'admin' && (
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link to="/dashboard"> 
                <Edit className="mr-2 h-4 w-4" /> Edit Product
              </Link>
            </Button>
          )}

          {role === 'user' && (
            <Button 
              size="lg" 
              className="w-full md:w-auto" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          )}

        </CardContent>
      </div>
    </Card>
    </motion.div>
  );
};