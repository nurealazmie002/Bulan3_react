import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Terminal } from 'lucide-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { motion } from 'framer-motion';

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, 
    },
  },
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Fetch Error!</AlertTitle>
        <AlertDescription>
          {error.message || 'Gagal memuat produk. Coba lagi nanti.'}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={listContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map(product => (
        <motion.div key={product.id} variants={cardItemVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Products = () => (
  <ErrorBoundary>
    <h1 className="text-3xl font-bold tracking-tight mb-6">Our Products</h1>
    <ProductList />
  </ErrorBoundary>
);