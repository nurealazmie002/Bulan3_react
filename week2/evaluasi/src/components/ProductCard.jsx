import { useCart } from "../context/CartContext.jsx";

function ProductCard({product}){
    const { dispatch } = useCart();


    return(
        <div className="border-3 border-gray-200 rounded-xl shadow p-4 flex flex-col hover:scale-105 transition">
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" />
            <h3 className="font-semibold line-clamp-1">{product.title}</h3>
            <p className="text-sm text-gray-500">${product.price}</p>
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })} className="bg-gray-500 text-white py-1 rounded-lg mt-auto hover:bg-amber-600">
                Tambah ke keranjang
            </button>
        </div>
    )
}

export default ProductCard