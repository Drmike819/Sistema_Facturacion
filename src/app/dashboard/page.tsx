"use client"

import { ReactNode, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { isAuthenticated } from '@/lib/auth';
import { Sidebar } from '@/components/layout/sidebar';
import { Navbar } from '@/components/layout/navbar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { initializeAuth, isLoading, isAuthenticated: auth } = useAuth();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  // if (!isLoading && !auth) {
  //   redirect('/login');
  // }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="mt-16 ml-64 p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}