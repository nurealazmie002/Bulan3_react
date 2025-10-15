import { useEffect } from "react";

function SimpleEffect() {
  useEffect(() => {
    console.log("Komponen dirender atau diperbarui!");
  });

  return <p>useEffect Sederhana</p>;
}

export default SimpleEffect;