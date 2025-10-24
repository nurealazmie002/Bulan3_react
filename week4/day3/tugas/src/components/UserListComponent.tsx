import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { fetchUsers } from '@/features/users/usersSlice';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';

const UserListComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list: users, status, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-2">Loading users...</p>
      </div>
    );
  } else if (status === 'succeeded') {
    content = (
      <ul className="divide-y divide-border">
        {users.map((user) => (
          <li key={user.id} className="py-3">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Users List</CardTitle>
          <CardDescription>
            Data fetched from an external API.
          </CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
};

export default UserListComponent;
