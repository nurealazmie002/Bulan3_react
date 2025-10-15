import { useState, useEffect } from "react";

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Mengambil data untuk userId:", userId);
    setUser({ name: "User " + userId, email: `user${userId}@gmail.com` });
  }, [userId]);

  return (
    <div>
      <h2>Data Pengguna</h2>
      {user ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Memuat data...</p>
      )}
    </div>
  );
}

export default UserData;
