import './App.css'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { LoginForm } from "@/components/login-form"
import { ProductPage } from "@/components/ProductPage"
import { AuthProvider } from './components/auth-provider'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './components/auth-provider'
import { Button } from './components/ui/button'

function SharedLayout() {
  const { token, logout } = useAuth();

  return (
    <div className="min-h-svh w-full p-6 md:p-10">
      
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-4 h-10"> 
        <div>
          {token && (
            <Link 
              to="/products" 
              className="text-2xl font-bold tracking-tight"
            >
              Nova Shop
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {token && (
            <Button onClick={logout} variant="outline">
              Logout
            </Button>
          )}
        </div>

      </header>
      
      <main>
        <Outlet /> 
      </main>
    </div>
  )
}

function LoginPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AuthProvider> 
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="products" element={<ProductPage />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}