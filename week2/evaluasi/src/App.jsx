import Home from './pages/Home.jsx'
import ThemeProvider  from './context/ThemeContext.jsx'
import CartProvider from './context/CartContext.jsx'
import './App.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </ThemeProvider>
    </>
  )
}

export default App
