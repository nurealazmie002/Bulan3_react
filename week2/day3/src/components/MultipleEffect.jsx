import { useState, useEffect } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("input nama anda tuan");

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count berubah:", count);
  }, [count]);

  useEffect(() => {
    console.log("Nama berubah:", name);
  }, [name]);

  return (
    <div>
      <h2>Multiple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Tambah Count</button>

      <p>Nama: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default MultipleEffects;
