import { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;
  if (isLoggedIn) {
    message = <p className="text-green-600 font-medium">Selamat datang kembali!</p>;
  } else {
    message = <p className="text-red-600 font-medium">Silakan login terlebih dahulu.</p>;
  }

  return (
    <div className="p-6 text-center bg-white shadow rounded-md w-72">
      {message}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginStatus;
