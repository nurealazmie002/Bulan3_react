import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const backgroundImageUrl =
  "https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "naufal" && pass === "1234") {
      localStorage.setItem("token", "fake_token_1234");
      navigate(from, { replace: true });
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-6"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >

      <div className="absolute inset-0 bg-green-600 opacity-40"></div>

      <form
        onSubmit={handleLogin}
        className="relative w-full max-w-md bg-white/90 p-8 rounded-2xl shadow-2xl 
                   backdrop-blur-md z-10 border-t-4 border-green-600"
      >
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Nova Shop
        </h1>
        <h2 className="text-center text-gray-600 mb-8">
          Masuk untuk mulai berbelanja 
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Masukkan username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="text-gray-800 w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md 
                     hover:bg-green-700 transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">Hint : username = naufal, password = 1234</p>

      </form>
    </div>
  );
}

export default Login;
