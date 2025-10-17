import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent di render");

  return (
    <div className="text-center">
      <p>Counter: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Tambah
      </button>

      <div className="mt-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Masukkan Angka..."
          className="border p-2 rounded"
        />
      </div>

      <Child name="Naufal" />
    </div>
  );
}
