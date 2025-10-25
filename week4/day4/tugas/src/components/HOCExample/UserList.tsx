import React from 'react';

export interface User {
  id: number;
  name: string;
}

interface UserListProps {
  data: User[];
}

const UserList: React.FC<UserListProps> = ({ data }) => {
  return (
    <ul className="list-disc pl-8 space-y-1">
      {data.map(user => (
        <li key={user.id} className="text-gray-700">{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;