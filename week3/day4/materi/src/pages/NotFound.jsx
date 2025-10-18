import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-lg mb-4 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
