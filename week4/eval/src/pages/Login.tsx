import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/products'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (username === 'admin' && password === 'password') {
      login('admin', 'admin');
      navigate(from, { replace: true });
    } else if (username === 'user' && password === 'password') {
      login('user', 'user');
      navigate(from, { replace: true });
    } else {
      setError('Username atau password salah. (Coba: admin/password atau user/password)');
    }
  };

const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      
      <div className="flex items-center justify-center py-8 md:py-12 px-4 sm:px-6">
        <div className="w-full max-w-md space-y-6">
          
          <motion.div 
            className="md:hidden flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingBag className="h-14 w-14 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold mt-4">Nova Shop Commerce</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="w-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Login Account</CardTitle>
                <CardDescription>
                  Masukkan salah satu akun ini:
                  <br />
                  - (<b>admin</b> || <b>password</b>)
                  <br />
                  - (<b>user</b> || <b>password</b>)
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="grid gap-4">
                  
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        variants={errorVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden" 
                      >
                        <Alert variant="destructive">
                          <Terminal className="h-4 w-4" />
                          <AlertTitle>Login Gagal</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin atau user"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className='mt-6'>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="hidden md:flex relative items-center justify-center p-12 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg')" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ShoppingBag className="h-32 w-32 text-primary mb-6 mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Selamat Datang!</h1>
          <p className="text-base lg:text-lg text-gray-200 mt-4 max-w-md">
            Selamat datang di Nova Shop Commerce! Temukan berbagai produk berkualitas dengan mudah dan cepat.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};