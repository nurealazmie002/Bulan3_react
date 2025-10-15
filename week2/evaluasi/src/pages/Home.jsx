import { useEffect, useState } from "react";
import ProductList from "../components/ProductList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import CartBadge from "../components/CartBadge.jsx";
import { useThemeContext } from "../context/ThemeContext.jsx";


function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { state, dispatch: themeDispatch } = useThemeContext();
  const { theme } = state

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <p className=" font-bold text-center mt-10 text-blue-500">Loading, tunggu bentar der...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Gagal memuat data</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Katalog Produk</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
            className="px-3 py-1 border-2 hover:bg-blue-500 rounded-lg w-24 h-12 "
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <CartBadge />
        </div>
      </div>

      <SearchBar products={products} setFiltered={setFiltered} />
      <CategoryFilter products={products} setFiltered={setFiltered} />
      <ProductList products={filtered} />
    </div>
  );
}

export default Home;