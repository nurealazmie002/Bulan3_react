import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="container mx-auto px-6 py-16 pt-30">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-blue-600 font-bold text-lg">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
