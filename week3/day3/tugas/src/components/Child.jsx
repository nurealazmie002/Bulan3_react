import React from "react";

function Child({ name }) {
  console.log("Child di render");
  return <p className="mt-2 text-gray-700">Halo, {name}!</p>;
}

export default React.memo(Child);
