import { NavLink,Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'; // Pastikan ini ada
import { useCart } from '@/hooks/useCart';
import { ShoppingBag, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export const Layout = () => {
  const { isAuthenticated, logout, user, role } = useAuth(); 
  const { cartItems, getCartItemCount, getCartTotal, removeFromCart } = useCart();
  const navigate = useNavigate();
  const itemCount = getCartItemCount();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-14 items-center">
          <NavLink to="/" className="mr-6 flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="font-bold">Nova Shop</span>
          </NavLink>
          
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavLink to="/products" className={getNavLinkClass}>
              Products
            </NavLink>
            {role === 'admin' && (
              <NavLink to="/dashboard" className={getNavLinkClass}>
                Dashboard
              </NavLink>
            )}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-4">
            
            {role === 'user' && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    {itemCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                      >
                        {itemCount}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 mr-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Keranjang</h4>
                    </div>
                    {cartItems.length > 0 ? (
                      cartItems.map(item => (
                         <div key={item.id} className="flex items-center justify-between space-x-2">
                          <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.title} className="h-12 w-12 rounded object-contain border p-1" />
                            <div className="flex-1">
                              <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                              <p className="text-xs text-muted-foreground">{item.quantity} x ${item.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground" onClick={() => removeFromCart(item.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-center text-muted-foreground py-4">Keranjang mu masih kosong nich... :(</p>
                    )}
                    {itemCount > 0 && (
                      <div className="border-t pt-4 grid gap-4">
                        <div className="flex justify-between font-semibold">
                          <p>Total:</p>
                          <p>${getCartTotal().toFixed(2)}</p>
                        </div>
                        <Button asChild className="w-full">
                            <Link to="/checkout">Checkout</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            )}

            {isAuthenticated ? (
              <>
                <span className="hidden sm:inline-block text-sm text-muted-foreground truncate">
                  Hi, {user?.username}
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild size="sm">
                <NavLink to="/login">Login</NavLink>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <Outlet />
      </main>

      <footer className="py-6 md:px-8 md:py-0 border-t">
      </footer>
    </div>
  );
};