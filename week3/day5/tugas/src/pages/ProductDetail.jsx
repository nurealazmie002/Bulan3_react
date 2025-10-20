import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product)
    return <p className="p-6 text-center text-green-700">Loading...</p>;

  return (
    <div className="p-6 bg-green-50 min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 md:h-full object-cover"
        />

        <div className="p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 font-medium text-green-700 hover:text-green-800"
          >
            ← Kembali
          </button>

          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            {product.title}
          </h2>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
