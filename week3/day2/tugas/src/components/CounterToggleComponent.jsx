import useCounterWithToggle from "../hooks/useCounterWithToggle.jsx";

export default function CounterToggleComponent() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } =
    useCounterWithToggle();

  return (
    <div className="inline-block p-4 bg-gray-100 rounded">
      <button
        onClick={toggleVisible}
        className="mb-3 bg-blue-500 text-gray-100 px-3 py-1 rounded"
      >
        {isVisible ? "Sembunyikan" : "Tampilkan"}
      </button>
      {isVisible && (
        <>
          <p className="mb-2 text-lg text-gray-800">Count: {count}</p>
          <div className="flex justify-center gap-2">
            <button onClick={increment} className="bg-green-500 text-white px-2 py-1 rounded">
              +
            </button>
            <button onClick={decrement} className="bg-red-500 text-white px-2 py-1 rounded">
              -
            </button>
            <button onClick={reset} className="bg-gray-400 text-white px-2 py-1 rounded">
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}
