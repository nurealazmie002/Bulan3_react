import useLocalStorage from "../hooks/useLocalStorage.jsx";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div
      className={`p-6 rounded ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p>Tema saat ini: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Ganti Tema
      </button>
    </div>
  );
}
