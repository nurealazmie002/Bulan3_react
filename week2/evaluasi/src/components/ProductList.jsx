import ProductCard from "./ProductCard.jsx";

function ProductList({products}){
    if(products.length === 0)
        return <p className="text-center mt-10 text-red-500">Ente nih, nyari barang yang ghoib</p>


    return(
        <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList