import { useState, useMemo } from "react";

export default function ExpensiveComputation() {
  const [num, setNum] = useState(1);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("Perhitungan berat di render...");
    let total = 0;
    for (let i = 0; i < 10; i++) {
      total += i * num;
    }
    return total;
  }, [num]);

  return (
    <div className="text-center">
      <p>Nilai hasil perhitungan: {result.toString().slice(0, 10)}...</p>
      <button
        onClick={() => setNum((n) => n + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mt-2"
      >
        Ubah Nilai
      </button>

      <div className="mt-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik sesuatu..."
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
}
