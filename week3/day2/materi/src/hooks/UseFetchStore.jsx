import { useState, useEffect } from "react";

export default function useFetchStore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Gagal mengambil data");
          return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
}
