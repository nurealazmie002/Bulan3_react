import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const products = [
  { id: 1, name: "Kopi Arabica", price: 25000 },
  { id: 2, name: "Teh Hijau", price: 15000 },
  { id: 3, name: "Coklat Bubuk", price: 30000 },
];

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produk</h2>
      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-medium text-gray-700">{p.name}</p>
              <p className="text-sm text-gray-500">
                Rp {p.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => addItem(p)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              + Tambah
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
