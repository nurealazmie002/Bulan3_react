import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminRoute } from './components/AdminRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';
import { Checkout } from './pages/Checkout';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  
  {
    path: '/',
    element: <PrivateRoute />, 
    children: [
      {
        element: <Layout />, 
        children: [
          {
            index: true,
            element: <Navigate to="/products" replace />,
          },
          {
            path: 'products',
            element: <Products />,
          },
          {
            path: 'products/:id',
            element: <ProductDetail />,
          },
          { 
            path: 'checkout',
            element: <Checkout />,
          },
          {
            path: 'dashboard',
            element: <AdminRoute />, 
            children: [
              { index: true, element: <Dashboard /> },
            ],
          },
        ],
      },
    ],
  },


  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster position="top-right" duration={1500} richColors />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;