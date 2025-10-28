import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle } from 'lucide-react';

export const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.username || '',
    email: `${user?.username || 'user'}@example.com`,
    address: '',
    phone: '',
  });

  const total = getCartTotal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order Submitted:', {
      user: formData,
      items: cartItems,
      total: total,
    });
    
    setIsSuccess(true);
    
    clearCart();
    
    setTimeout(() => {
      navigate('/products');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center py-20">
        <Alert className="max-w-lg">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Terima kasih!</AlertTitle>
          <AlertDescription>
            Pesananmu akan segera diproses.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        <Card className="md:sticky top-24">
          <CardHeader>
            <CardTitle>Detail pengiriman</CardTitle>
            <CardDescription>lengkapi alamat pengiriman.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nama Penerima</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Alamat</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Jalan, Kota, Negara"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+6281234567890"
                  required
                />
              </div>
            </CardContent>
            <CardFooter className='mt-6'>
              <Button type="submit" className="w-full" size="lg">
                Place Order
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Ringkasan Pesanan</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="h-12 w-12 rounded object-contain border p-1" 
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 grid gap-2">
              <div className="flex justify-between text-muted-foreground">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <p>Ongkos Kirim</p>
                <p>$0.00</p>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};