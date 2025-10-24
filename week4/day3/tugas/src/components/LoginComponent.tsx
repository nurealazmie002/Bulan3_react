import React from 'react';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { loginSuccess, logout } from '@/features/auth/authSlice';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mockUser = { username: 'johndoe', email: 'john@example.com' };
    const mockToken = 'xyz123abc';
    dispatch(loginSuccess({ user: mockUser, token: mockToken }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isAuthenticated) {
    return (
      <div className="flex items-center justify-center w-full min-h-[60vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome back!</CardTitle>
            <CardDescription className="text-center">
              You are logged in as{" "}
              <strong className="font-medium">{user?.username}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="w-full"
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center w-full min-h-[60vh]")}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Nova User Manager</CardTitle>
          <CardDescription className="text-center">
            Login with your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginSubmit}>
            <FieldGroup className="flex flex-col gap-4">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="@gmail.com"
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" />
              </Field>

              <Field>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginComponent;
