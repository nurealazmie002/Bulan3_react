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
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Contoh useReducer</h2>
      <p>
        Count: {state.count}
      </p>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}>
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseReducer;