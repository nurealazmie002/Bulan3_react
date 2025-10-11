import { useEffect, useState } from "react";

function FilteredUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        // contoh: ambil hanya 5 user pertama
        const sliced = data.slice(0, 5);
        setUsers(sliced);
      });
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      <h2 className="font-bold text-blue-600 mb-2">Daftar User (Top 5)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id} className="border p-2 m-1 rounded text-gray-600">
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredUserList;
