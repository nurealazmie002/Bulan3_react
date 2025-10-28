export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface User {
  username: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type ProductFormData = Omit<Product, 'id' | 'rating'>;