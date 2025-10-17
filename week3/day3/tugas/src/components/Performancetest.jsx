import { useState } from "react";
import React from "react";

function LightComponent() {
  console.log("LightComponent render ulang...");
  return <p>Komponen ringan tampil tanpa beban besar</p>;
}

const HeavyComponent = () => {
  console.log("HeavyComponent di render ulang...");
  let total = 0;
  for (let i = 0; i < 1; i++) {
    total += i;
  }
  return <p>Komponen berat dihitung: {total}</p>;
};


const MemoHeavyComponent = React.memo(HeavyComponent);

export default function PerformanceTest() {
  const [count, setCount] = useState(0);
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <section className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
        Tugas 5 – Performance Profiling
      </h2>

      <div className="flex justify-center gap-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition"
          onClick={() => setCount(count + 1)}
        >
          Tambah Count ({count})
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition"
          onClick={() => setShowHeavy(!showHeavy)}
        >
          Toggle Komponen Berat
        </button>
      </div>

      <div className="space-y-4 text-center">
        <LightComponent />
        {showHeavy && <MemoHeavyComponent />}
      </div>
    </section>
  );
}
