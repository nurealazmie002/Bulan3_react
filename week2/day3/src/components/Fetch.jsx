import { useState, useEffect } from "react";

function FetchSimulation() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data...");
    const timer = setTimeout(() => {
      setData({ message: "Data berhasil diambil!" });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      {loading ? <p>Memuat data...</p> : <p>{data.message}</p>}
    </div>
  );
}

export default FetchSimulation;
