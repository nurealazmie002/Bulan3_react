import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data yang disubmit: ", formData);
    alert(`Terima kasih, ${formData.firstName}! Data telah masuk.`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
          Formulir Kontak
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nama Depan:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Masukkan nama depan"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Nama Belakang:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="Masukkan nama belakang"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 border-slate-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            placeholder="contoh@email.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 transition"
        >
          Submit
        </button>
        <p className="mt-4 text-sm text-gray-700 text-center">
          Nama Depan: <strong>{formData.firstName || "-"}</strong> | Nama Belakang:{" "}
          <strong>{formData.lastName || "-"}</strong> | Email:{" "}
          <strong>{formData.email || "-"}</strong>
        </p>
      </form>
      
    </main>
  );
}

export default ContactForm;
