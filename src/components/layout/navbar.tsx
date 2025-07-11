'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LogOut, LogIn, UserPlus } from 'lucide-react';
import { toast } from 'react-hot-toast';

export function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada correctamente');
    router.push('/login');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const getFullImageUrl = (path: string) => {
    return path.startsWith('http') ? path : `http://127.0.0.1:8000${path}`;
  };

  return (
    <nav className="fixed top-0 left-64 right-0 z-10 h-16 flex items-center justify-between bg-gray-400 shadow px-6">
      <div className="text-xl font-bold text-blue-600">
        {user ? `${user.userName}` : 'Mi Panel'}
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {user.userImage ? (
              <Image
                src={getFullImageUrl(user.userImage)}
                alt={user.userName}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                {user.userName?.charAt(0).toUpperCase() ?? 'U'}
              </div>
            )}

            <span className="text-sm font-medium text-gray-700">
              {user.userName}
            </span>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800  hover:bg-gray-400 rounded-lg  transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Iniciar sesión
            </button>

            <button
              onClick={handleRegister}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              Registrarse
            </button>
          </>
        )}
      </div>
    </nav>
  );
}