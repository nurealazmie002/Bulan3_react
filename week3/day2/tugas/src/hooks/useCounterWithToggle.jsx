import { useCounter } from "./useCounter.jsx";
import useToggle from "./useToggle.jsx";

export default function useCounterWithToggle() {
  const counter = useCounter();
  const [isVisible, toggleVisible] = useToggle(true);

  return { ...counter, isVisible, toggleVisible };
}
