function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 15000000 },
    { id: 2, name: "Mouse", price: 100000 },
    { id: 3, name: "Keyboard", price: 250000 },
  ];

  return (
    <div className="p-6 text-center  rounded-md w-72">
      <h2 className="text-lg font-semibold mb-3 text-blue-600">Daftar Produk</h2>
      <ul>
        {products.map((item) => (
          <li
            key={item.id}
            className="border rounded-md p-2 m-1 text-gray-700 hover:bg-gray-100"
          >
            {item.name} - Rp {item.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
