import { useCart } from "../context/CartContext.jsx";

function CartList() {
  const { cart, dispatch } = useCart();

  if (cart.length === 0) {
    return <p className="text-gray-500 mt-4">Keranjang masih kosong 🛒</p>;
  }

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-xl font-semibold mb-3">Daftar Keranjang</h2>
      <ul className="space-y-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border p-2 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.title} className="h-10 w-10 object-contain" />
              <div>
                <p className="font-medium line-clamp-1">{item.title}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item)}
              className="text-red-500 hover:text-red-700 text-sm font-semibold"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
