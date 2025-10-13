import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [counterState, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-purple-50 font-mono">
      <div className="bg-white/70 backdrop-blur-md border border-purple-100 rounded-2xl shadow-lg p-8 w-80 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Counter dengan useReducer
        </h2>

        <p className="text-xl text-gray-800 mb-6">
          Count:{" "}
          <span className="font-bold text-indigo-600">
            {counterState.count}
          </span>
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-green-200 hover:bg-green-300 text-green-800 font-semibold px-4 py-2 rounded-lg transition"
          >
            + Tambah
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-pink-200 hover:bg-pink-300 text-pink-800 font-semibold px-4 py-2 rounded-lg transition"
          >
            − Kurang
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-semibold px-4 py-2 rounded-lg transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterWithReducer;
