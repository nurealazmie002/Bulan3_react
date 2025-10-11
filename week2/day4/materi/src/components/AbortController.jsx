import { useState, useEffect } from "react";

function AbortFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5", { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Request Aborted");
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
      console.log("Fetch batal, user langsung pindah halaman");
    };
  }, []);

  if (!data) return null;
  if (loading) return <p>Siktalah loading...</p>;
  if (error) return <p>Aduh ada error nich: {error.message}</p>;

  return (
    <div>
      <h2>Data lewat Fetch (dengan AbortController)</h2>
      <p><strong>{data.title}</strong></p>
      <p>{data.body}</p>
    </div>
  );
}

export default AbortFetch;
