'use client';

import { useAuth } from '@/features/auth/hooks/useAuth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { toast } from 'react-hot-toast';

export function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada correctamente');
    router.push('/login');
  };

  const getFullImageUrl = (path: string) => {
    return path.startsWith('http') ? path : `http://127.0.0.1:8000${path}`;
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <div className="text-xl font-bold text-blue-600">Mi Panel</div>
      <div className="flex items-center space-x-4">
        {user?.userImage ? (
          <Image
            src={getFullImageUrl(user.userImage)}
            alt={user.userName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
            {user?.userName?.charAt(0).toUpperCase() ?? 'U'}
          </div>
        )}

        <button
          onClick={handleLogout}
          className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-600 hover:text-red-800"
        >
          <LogOut className="w-5 h-5" />
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
