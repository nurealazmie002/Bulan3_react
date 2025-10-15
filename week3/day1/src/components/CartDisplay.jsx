import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keranjang</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Keranjang masih kosong</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.qty}x Rp {item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-800">
              Total harga: Rp {totalPrice.toLocaleString()}
            </p>
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Hapus isi keranjang
            </button>
          </div>
        </>
      )}
    </div>
  );
}
