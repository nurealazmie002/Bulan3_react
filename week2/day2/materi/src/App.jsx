import './App.css'
import { useState } from 'react'

function App() {
  const [product, setProduct] = useState([
    { id: 1, name: 'Mouse', price: 100000 },
    { id: 2, name: 'Keyboard', price: 200000 },
    { id: 3, name: 'Headset', price: 300000 },
    { id: 4, name: 'Monitor', price: 500000 },
  ])


  if (!Array.isArray(product)) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-lg shadow-md">
           Produk tidak ada
        </h2>
      </div>
    )
  }


  if (product.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-yellow-600 bg-yellow-100 px-6 py-3 rounded-lg shadow-md">
           Produk kosong
        </h2>
      </div>
    )
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-16">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-10 tracking-wide drop-shadow-sm">
         Daftar Produk
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <p className="text-lg font-semibold text-gray-800 mb-2">{item.name}</p>
            <p className="text-blue-600 font-bold text-xl">
              Rp {item.price.toLocaleString('id-ID')}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setProduct([])}
        className="mt-12 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow transition"
      >
        Kosongkan Produk
      </button>
    </main>
  )
}

export default App
