import { useLanguage } from "../context/LanguageContext.jsx";
import { useNotification } from "../context/NotifContext.jsx";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { count, addNotif, clearNotif } = useNotification();

  return (
    <div className="bg-blue-500 text-white p-4 rounded-xl shadow flex justify-between items-center w-96">
      <div>
        <h3 className="font-bold text-lg">Language: {language}</h3>
        <button
          onClick={toggleLanguage}
          className="mt-1 bg-white text-blue-500 px-2 py-1 rounded text-sm hover:bg-gray-100"
        >
          Toggle Language
        </button>
      </div>
      <div className="text-right">
        <p>🔔 Notifications: {count}</p>
        <div className="flex gap-1 justify-end mt-1">
          <button onClick={addNotif} className="bg-green-400 px-2 py-1 rounded text-sm">
            +1
          </button>
          <button onClick={clearNotif} className="bg-red-400 px-2 py-1 rounded text-sm">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
