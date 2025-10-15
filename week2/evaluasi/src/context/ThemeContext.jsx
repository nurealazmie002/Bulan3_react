import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "../reducers/themeReducers.js";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  useEffect(() => {
    document.body.className =
      state.theme === "dark"
        ? "bg-white text-black"
        : "bg-gray-900 text-white";
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useThemeContext = () => useContext(ThemeContext);
