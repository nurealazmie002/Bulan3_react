import { useState } from "react";

function WelcomeMessage() {
  const [user] = useState("Naufal");
  const [messages] = useState(["Halo!", "Pesan baru"]);

  return (
    <div className="p-6 text-center bg-white shadow rounded-md w-72">
      <h2 className="text-lg text-gray-800 font-semibold">
        {user ? `Selamat datang, ${user}!` : "Silakan login dulu."}
      </h2>

      {messages.length > 0 && (
        <p className="text-blue-500 mt-2">
          Kamu punya {messages.length} pesan baru 
        </p>
      )}
    </div>
  );
}

export default WelcomeMessage;
