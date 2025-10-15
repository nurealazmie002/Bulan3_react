import { useContext } from "react";
import {UserContext} from "../context/UserContext.jsx";


export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error le, betulin gih");
  }
  return context;
}
