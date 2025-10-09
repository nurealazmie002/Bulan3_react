function StatusDisplay({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p className="text-yellow-500">Sedang memuat...</p>;
      break;
    case "success":
      content = <p className="text-green-600">Berhasil memuat data!</p>;
      break;
    case "error":
      content = <p className="text-red-600">Terjadi kesalahan </p>;
      break;
    default:
      content = <p className="text-gray-500">Status tidak diketahui.</p>;
  }

  return (
    <div className="p-6 text-center bg-white shadow rounded-md w-72">
      {content}
    </div>
  );
}

export default StatusDisplay;
