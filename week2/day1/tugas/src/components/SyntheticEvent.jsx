import { useState } from "react";

function SyntheticEvent() {
  const [text, setText] = useState("");

  const handleLinkClick = (e) => {
    e.preventDefault();
    alert(" Link diklik");
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Input:", e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Synthetic Event
        </h2>


        <div className="text-center">
          <a
            href="https://id.wikipedia.org/wiki/JavaScript"
            onClick={handleLinkClick}
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            Klik Link Ini
          </a>
        </div>


        <div className="space-y-2">
          <label className="block font-medium text-gray-700">
            Masukkan Teks
          </label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Ketik sesuatu..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <p className="text-sm text-gray-500">
            Nilai input: <span className="font-medium text-gray-700">{text}</span>
          </p>
        </div>


        <button
          onClick={() => alert(`Input saat ini: ${text || "kosong"}`)}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Tampilkan Nilai
        </button>
      </div>
    </div>
  );
}

export default SyntheticEvent;
