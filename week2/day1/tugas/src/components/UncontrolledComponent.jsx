import { useRef } from "react";

function UncontrolledComponent() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;

    if (!nameValue.trim()) {
      alert("Nama tidak boleh kosong!");
      return;
    }

    alert(`Data yang disubmit: ${nameValue}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Uncontrolled Component</h2>

      <input
        type="text"
        ref={nameRef}
        placeholder="Masukkan nama"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default UncontrolledComponent;
