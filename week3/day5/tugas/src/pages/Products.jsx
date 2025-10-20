import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then(setCategories);

    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setProducts(data.filter((p) => p.category.name === category));
        } else {
          setProducts(data);
        }
      });
  }, [category]);

  const handleFilter = (cat) => {
    setSearchParams(cat ? { category: cat } : {});
  };

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Daftar Produk
      </h1>

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => handleFilter(null)}
          className={`px-4 py-2 rounded-md font-medium transition ${
            !category
              ? "bg-green-600 text-white"
              : "bg-white text-green-700 border border-green-200 hover:bg-green-100"
          }`}
        >
          Semua
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleFilter(cat.name)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              category === cat.name
                ? "bg-green-600 text-white"
                : "bg-white text-green-700 border border-green-200 hover:bg-green-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className=" bg-white border border-green-100 rounded-xl p-4 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-70 w-full object-cover mb-3 rounded-md"
            />
            <h3 className="font-semibold text-gray-800 mb-1 truncate">
              {product.title}
            </h3>
            <p className="text-green-700 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
