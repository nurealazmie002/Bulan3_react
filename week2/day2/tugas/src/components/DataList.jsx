import { useState } from "react";

function DataList() {
  const [data, setData] = useState([
    { id: 1, title: "V60 Coffee Brew" },
    { id: 2, title: "Syphon Filter Brew" },
  ]);

  
  if (!Array.isArray(data)) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 bg-red-100 px-6 py-3 rounded-lg shadow-md">
          Data tidak ditemukan
        </h2>
      </div>
    );
  }


  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-yellow-600 bg-yellow-100 px-6 py-3 rounded-lg shadow-md">
          Tidak ada data saat ini
        </h2>
      </div>
    );
  }


  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-16">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-10 tracking-wide drop-shadow-sm">
        Daftar Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setData([])}
        className="mt-12 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow transition"
      >
        Kosongkan Data
      </button>
    </main>
  );
}

export default DataList;
