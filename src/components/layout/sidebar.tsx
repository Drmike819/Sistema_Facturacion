'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/constants';

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-6">
      <nav className="space-y-4">
        <Link href={ROUTES.PRODUCTOS} className="block text-gray-700 hover:text-blue-600">
          Productos
        </Link>
        <Link href={ROUTES.FACTURACION} className="block text-gray-700 hover:text-blue-600">
          Facturación
        </Link>
        <Link href={ROUTES.ESTADISTICAS} className="block text-gray-700 hover:text-blue-600">
          Estadísticas
        </Link>
      </nav>
    </aside>
  );
}
