import { useState } from "react";

function NumberInput({ value, onChange, label }) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label className="text-sm font-semibold text-yellow-300">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="
          w-full px-3 py-2 
          bg-slate-800 
          text-white 
          border border-blue-500 
          rounded-lg 
          focus:outline-none 
          focus:ring-2 
          focus:ring-yellow-400 
          focus:border-yellow-400 
          transition 
          duration-200
        "
        placeholder="Masukkan angka..."
      />
    </div>
  );
}

function LiftingState() {
  const [number, setNumber] = useState("");

  return (
    <div className="flex flex-col items-center bg-slate-900 border border-cyan-500 rounded-xl p-6 shadow-lg gap-4">
      <h2 className="text-xl font-bold text-red-400 mb-2">
        Lifting State Up
      </h2>

      <div className="flex flex-col gap-4 w-64">
        <NumberInput
          value={number}
          onChange={setNumber}
          label="Input Pertama"
        />
        <NumberInput
          value={number}
          onChange={setNumber}
          label="Input Kedua"
        />
      </div>

      <p className="mt-4 text-cyan-300 font-semibold">
        Nilai saat ini: <span className="text-yellow-400">{number || "—"}</span>
      </p>
    </div>
  );
}

export default LiftingState;
