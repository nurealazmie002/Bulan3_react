import LoginComponent from './components/LoginComponent';
import UserListComponent from './components/UserListComponent';
import { useAppSelector } from './app/hooks';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat p-4 relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/626986/pexels-photo-626986.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative space-y- w-full max-w-lg bg-white/10 dark:bg-gray-900/60 rounded-2xl shadow-xl mx-auto text-center backdrop-blur-md border border-white/20">
        <LoginComponent />

        {isAuthenticated ? (
          <>
            <h1 className="text-3xl font-bold pb-6 text-white drop-shadow-md">
              User Management System
            </h1>
            <UserListComponent />
          </>
        ) : (
          <p className="text-white/90 drop-shadow-sm">
            Please log in to see the list of users.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
