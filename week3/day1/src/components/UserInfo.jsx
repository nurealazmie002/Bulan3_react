import { useState } from "react";
import { useUserContext } from "../context/UserContext.jsx";

export default function UserInfo() {
  const { user, login, logout, updateProfile } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!user.isLoggedIn)
    return (
      <div className="p-6 bg-white shadow-xl rounded-xl w-80 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Login</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full rounded mb-3 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          className="border p-2 w-full rounded mb-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => login(name, email)}
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition"
        >
          Login
        </button>
      </div>
    );

  return (
    <div className="p-6 bg-green-50 shadow-xl rounded-xl w-80 text-center">
      <h2 className="text-2xl font-bold mb-2 text-green-700">
        Welcome, {user.name}!
      </h2>
      <p className="text-gray-700 mb-4">{user.email}</p>

      <input
        placeholder="New Name"
        className="border p-2 w-full rounded mb-2 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 outline-none"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="New Email"
        className="border p-2 w-full rounded mb-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          onClick={() => updateProfile(name, email)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white flex-1 py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white flex-1 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
