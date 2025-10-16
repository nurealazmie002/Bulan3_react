import "./App.css";
import UserInfo from "./components/UserInfo.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import ThemedComponents from "./components/ThemeComponent.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { NotificationProvider } from "./context/NotifContext.jsx";
import UserInfoHook from "./components/UserInfoHook.jsx";
import ProductList from "./components/ProductList.jsx";
import CartDisplay from "./components/CartDisplay.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10 space-y-10">

      <section className="w-full flex justify-center">
        <UserProvider>
          <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-lg">
            <UserInfo />
          </div>
        </UserProvider>
      </section>


      <section className="w-full flex justify-center">
        <ThemeProvider>
          <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-lg">
            <ThemedComponents />
          </div>
        </ThemeProvider>
      </section>


      <section className="w-full flex justify-center">
        <LanguageProvider>
          <NotificationProvider>
            <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-lg">
              <Header />
            </div>
          </NotificationProvider>
        </LanguageProvider>
      </section>

      <section className="w-full flex justify-center">
        <UserProvider>
          <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-lg">
            <UserInfoHook />
          </div>
        </UserProvider>
      </section>


      <section className="w-full flex justify-center">
        <CartProvider>
          <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Keranjang-Belanja Context
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8">
              <ProductList />
              <CartDisplay />
            </div>
          </div>
        </CartProvider>
      </section>
    </div>
  );
}

export default App;
