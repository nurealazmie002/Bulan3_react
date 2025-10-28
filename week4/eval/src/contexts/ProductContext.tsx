import type { ReactNode, FC } from 'react';
import type { Product, ProductFormData } from '@/types';
import { useCallback, useEffect, useState,createContext} from 'react';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: Error | null;
  fetchProducts: () => Promise<void>;
  addProduct: (productData: ProductFormData) => void;
  updateProduct: (id: number, productData: Partial<ProductFormData>) => void;
  deleteProduct: (id: number) => void;
  getProductById: (id: number) => Product | undefined;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const API_URL = 'https://fakestoreapi.com/products';

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  
  const addProduct = (productData: ProductFormData) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now(), 
      rating: { rate: 0, count: 0 }, 
    };
    setProducts(prevProducts => [newProduct, ...prevProducts]);
  };

  const updateProduct = (id: number, productData: Partial<ProductFormData>) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === id ? { ...p, ...productData } : p
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
  };

  const getProductById = (id: number): Product | undefined => {
    return products.find(p => p.id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        fetchProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};