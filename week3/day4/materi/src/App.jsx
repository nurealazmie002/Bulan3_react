import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MyFamily from './pages/MyFamily';
import MyParents from './pages/MyParents';
import MySiblings from './pages/MySiblings';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 bg-slate-600 text-white px-5 shadow-md">
  <h1 className="text-4xl font-bold animate-pulse">NovaTech</h1>

  <div className="flex gap-6 text-xl  ">
    <Link
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-semibold" : "hover:text-gray-300"
       }
     >
       Beranda
     </Link>

     <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-semibold" : "hover:text-gray-300"
        }
      >
        About
     </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-semibold" : "hover:text-gray-300"
        }
      >
       Contact
     </NavLink>

  
       <NavLink
        to="/MyFamily"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-semibold" : "hover:text-gray-300"
        }
      >
       My Family
     </NavLink>

     <NavLink
        to="/Products"
        className={({ isActive }) =>
          isActive ? "text-blue-300 font-semibold" : "hover:text-gray-300"
        }
      >
        Produk
     </NavLink>
    </div>
  </nav>

        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/MyFamily" element={<MyFamily />}>
              <Route path="MyParents" element={<MyParents />} />
              <Route path="MySiblings" element={<MySiblings />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      
    </>
  )
}

export default App
