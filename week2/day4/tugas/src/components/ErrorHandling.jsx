import { useEffect, useState } from "react";

function FetchWithError() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-blue-500">Memuat data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      <h2 className="font-bold text-yellow-600 mb-2">Fetch dengan Error Handling</h2>
      <p className="text-gray-600">{data.title}</p>
      <p className="text-gray-600">{data.body}</p>
    </div>
  );
}

export default FetchWithError;
