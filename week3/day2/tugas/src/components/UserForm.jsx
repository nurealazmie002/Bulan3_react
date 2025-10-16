import useForm from "../hooks/useForm.jsx";

export default function UserForm() {
  const { values, handleChange } = useForm({ name: "", email: "" });

  return (
    <div className="p-4">
      <form className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Nama"
          value={values.name}
          onChange={handleChange}
          className="border rounded px-3 py-2 border-gray-300"
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          className="border rounded px-3 py-2 border-gray-300"
        />
      </form>

      <div className="text-center text-gray-600 mt-4 bg-gray-100 p-3 rounded">
        <p><strong>Nama:</strong> {values.name}</p>
        <p><strong>Email:</strong> {values.email}</p>
      </div>
    </div>
  );
}
