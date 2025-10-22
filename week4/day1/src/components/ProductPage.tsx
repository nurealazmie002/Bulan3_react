import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string; 
  rating: {         
    rate: number;
    count: number;
  };
}

export function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6 ">
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lime-300 hover:shadow-md">
            <CardHeader >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <CardTitle className="text-lg h-16">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold mb-2">${product.price}</p>
              <p className="text-sm text-muted-foreground h-24 overflow-hidden">
                {product.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}