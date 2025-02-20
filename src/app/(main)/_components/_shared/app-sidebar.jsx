'use client';

// External dependencies
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gem, PlusCircle } from 'lucide-react';

// Internal components
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

// Hooks and constants
import { useAuthContext } from '@/components/providers/auth-provider';
import { menuItems } from '@/constants';

export const AppSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuthContext();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="mt-5 flex flex-col items-center justify-center">
          <Logo />
          <h2 className="mt-3 text-lg text-gray-400">AI Short Video Generator</h2>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="mx-3 mt-10">
            <Button variant="default" className="w-full flex items-center gap-2">
              <PlusCircle className="h-5 w-5" />
              Create New Video
            </Button>
          </div>

          <SidebarMenu className="mt-6">
            {menuItems.map((menuItem) => (
              <SidebarMenuItem key={menuItem.url} className="mx-3 mt-3">
                <SidebarMenuButton isActive={pathname === menuItem.url} className="p-5">
                  <Link href={menuItem.url} className="flex items-center gap-4 p-3">
                    <menuItem.icon className="h-5 w-5" />
                    <span>{menuItem.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="mb-6 rounded-lg border bg-gray-800 p-5">
          <div className="flex items-center justify-between">
            <Gem className="h-5 w-5 text-gray-400" />
            <h2 className="text-gray-400">{user?.credits ?? 0} Credits Left</h2>
          </div>
          <Button variant="default" className="mt-3 w-full">
            Buy More Credits
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
