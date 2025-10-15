import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemedComponents() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8 flex flex-col items-center gap-5 ">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Toggle Theme ({theme})
      </button>

      <div
        className={`p-4 rounded-lg shadow-md w-64 text-center ${
          theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"
        }`}
      >
        <h3 className="font-bold text-xl mb-2">Card Component</h3>
        <p className="text-sm">This card changes with the theme!</p>
      </div>

    </div>
  );
}
