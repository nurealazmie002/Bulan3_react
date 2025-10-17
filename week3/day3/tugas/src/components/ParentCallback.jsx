import { useState, useCallback } from "react";
import Button from "./Button.jsx";

export default function ParentCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("ParentCallback render");

  return (
    <div className="text-center">
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
