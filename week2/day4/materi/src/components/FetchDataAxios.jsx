import { useState, useEffect } from "react";
import axios from "axios";

function AxiosData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/10");
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Sek loading le ...</p>;
  if (error) return <p>Aduh ada error nich: {error.message}</p>;

  return (
    <div>
      <h2>Data lewat Axios</h2>
      <p>Nama: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>CP: {data.phone}</p>
    </div>
  );
}

export default AxiosData;
