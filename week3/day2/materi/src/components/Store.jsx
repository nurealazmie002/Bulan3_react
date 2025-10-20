import useFetchStore from "../hooks/UseFetchStore.jsx";

function Store() {
    const {data, loading, error} = useFetchStore()

    if (loading) return <p className="text-center mt-10 text-xl text-gray-500 ">Sedang Loading...</p>
    if (error) return <p className="text-center mt-10 text-red-500 text-xl">Aduh, ada error nich: {error}</p>
    
   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {data.map((product) => (
        <div
          key={product.id}

          className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:bg-blue-100 transition-colors duration-300 hover:scale-105 hover:-translate-y-1 hover:text-amber-500 ease-in-out"


        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-3"
          />
          <h3 className="font-semibold text-lg line-clamp-2">
            {product.title}
          </h3>
          <p className="text-blue-600 font-bold mt-1">${product.price}</p>
        </div>
      ))}
    </div>
  );

}


export default Store