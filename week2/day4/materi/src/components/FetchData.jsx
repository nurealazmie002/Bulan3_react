import { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Sedang Loading...</p>;
  }

  if (error) {
    return <p>Aduh ada error nich: {error.message}</p>;
  }

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      <p><strong>{data.title}</strong></p>
      <p>{data.body}</p>
    </div>
  );
}

export default FetchData;
