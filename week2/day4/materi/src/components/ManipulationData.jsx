import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserListManipulated() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        const processedUsers = response.data
          .map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city
          }))
          .filter(user => user.city === "Wisokyburgh");
          

        setUsers(processedUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Memuat daftar pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (users.length === 0) return <p>Tidak ada pengguna yang ditemukan di Gwenborough.</p>;

  return (
    <div>
      <h2>Daftar Pengguna (Manipulasi Data)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListManipulated;