import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import type { User } from './UserList';
import withLoading from './withLoading';
import { baseContainerStyles, baseH3Styles } from '../UseRefExample/FocusInput';

const UserListWithLoading = withLoading(UserList);

const HOCExample: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedUsers: User[] = [ 
        { id: 1, name: 'Arthur Leywin' },
        { id: 2, name: 'Sylvie' },
        { id: 3, name: 'Regis' },
      ];
      setUsers(fetchedUsers);
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className={baseContainerStyles}>
      <h3 className={baseH3Styles}>3. Custom HOC (withLoading)</h3>
      <p className="text-gray-700 mb-4">Mensimulasikan data fetch selama 2 detik. HOC akan menampilkan 'Loading...'</p>
      <UserListWithLoading isLoading={loading} data={users} />
    </div>
  );
};

export default HOCExample;