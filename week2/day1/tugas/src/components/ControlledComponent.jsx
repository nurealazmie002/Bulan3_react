import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data yang disubmit: ${name}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Controlled Component
      </h2>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Masukkan nama"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
      />

      <p className="text-gray-600 text-sm">
        yang lagi diketik: <b>{name}</b>
      </p>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default ControlledComponent;
