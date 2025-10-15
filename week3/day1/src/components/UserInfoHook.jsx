import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext.jsx";

export default function UserInfoHook() {
  const { user, login, logout, updateProfile } = useUserContext();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Hook User Context
      </h2>

      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        placeholder="Masukkan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex gap-3 justify-center">
        {!user.isLoggedIn ? (
          <button
            onClick={() => login(name, email)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        ) : (
          <>
            <button
              onClick={() => updateProfile(name, email)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Update
            </button>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>

      <div className="mt-4 text-gray-700 text-center">
        {user.isLoggedIn ? (
          <>
            <p className="font-medium">Nama: {user.name}</p>
            <p>Email: {user.email}</p>
            <p className="text-green-600 font-semibold">Status: Logged In ✅</p>
          </>
        ) : (
          <p className="text-red-500 font-semibold">Status: Logged Out ❌</p>
        )}
      </div>
    </div>
  );
}
