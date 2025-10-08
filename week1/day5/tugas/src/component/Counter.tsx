import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(e.target.value));
  };

  const tambah = () => setCounter(counter + 1);
  const kurang = () => setCounter(counter - 1);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4 text-blue-600">Aplikasi Counter</h1>
        <p className="text-lg mb-4">Jumlah counter: {counter}</p>

        <input
          className="border-2 rounded-md p-2 border-slate-400 text-center w-32 mb-6 focus:outline-none focus:border-blue-500"
          type="number"
          value={counter}
          onChange={onChange}
        />

        <div className="flex gap-4 justify-center">
          
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 active:scale-95 transition"
            onClick={kurang}
          >
            -
          </button><button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 active:scale-95 transition"
            onClick={tambah}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}

export default Counter;
