'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '../_shared/app-sidebar';
import { AppHeader } from '../_shared/app-header';
import { useAuthContext } from '@/components/providers/auth-provider';

export const DashboardProvider = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    user && CheckUserAuthenticated;
  }, [user]);

  const CheckUserAuthenticated = () => {
    if (!user) {
      router.replace('/');
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-10">{children}</div>
      </div>
    </SidebarProvider>
  );
};
