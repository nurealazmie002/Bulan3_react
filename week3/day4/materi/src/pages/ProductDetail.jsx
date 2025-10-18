import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-20">Loading product...</p>
    );
  }

  return (
    <section className="container mx-auto px-6 py-16 pt-30">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-6">
              ${product.price}
            </p>

            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              ← kembali
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
