import { useCart } from "../context/CartContext.jsx";

function CartBadge() {
  const { cart } = useCart();
  return (
    <div className="relative text-2xl">
      🛒
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          {cart.length}
        </span>
      )}
    </div>
  );
}

export default CartBadge;
