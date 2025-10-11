import { useEffect, useState } from "react";
import axios from "axios";

function FetchUserAxios() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      <h2 className="font-bold text-green-600 mb-2">Data dari Axios</h2>
      {user ? (
        <>
          <p className="font-semibold text-gray-600">Nama: {user.name}</p>
          <p className="font-semibold text-gray-600">Email: {user.email}</p>
          <p className="font-semibold text-gray-600">No.HP: {user.phone}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchUserAxios;
