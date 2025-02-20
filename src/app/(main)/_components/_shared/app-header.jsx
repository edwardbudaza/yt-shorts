'use client';

import { UserButton } from '@/components/shared/user-button';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const AppHeader = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <SidebarTrigger />
      <UserButton />
    </header>
  );
};
