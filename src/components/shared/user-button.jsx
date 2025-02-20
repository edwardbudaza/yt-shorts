import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useAuthContext } from '@/components/providers/auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useScrollState } from '@/hooks/use-scroll-state';
import { userButtonOptions } from '@/constants';

export const UserButton = () => {
  const { user } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasScrolled = useScrollState();

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar
          className={`cursor-pointer transition-colors border-2 ${hasScrolled ? 'border-gray-700 hover:border-gray-600' : 'border-white/50 hover:border-white'}`}
        >
          <AvatarImage src={user?.pictureURL} />
          <AvatarFallback className="bg-gray-800">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl w-64 p-2 animate-in slide-in-from-top-2"
      >
        <div className="p-2 text-center">
          <DropdownMenuLabel className="text-sm text-white font-semibold">
            {user?.name}
          </DropdownMenuLabel>
          <div className="text-xs text-gray-400 truncate">{user?.email}</div>
        </div>
        <DropdownMenuSeparator className="bg-gray-800" />

        <div className="p-1">
          {userButtonOptions.map(({ href, icon, label }) => (
            <Link key={href} href={href}>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-gray-800 cursor-pointer rounded-md">
                {icon}
                {label}
              </DropdownMenuItem>
            </Link>
          ))}
        </div>

        <DropdownMenuSeparator className="bg-gray-800" />
        <div className="p-1">
          <DropdownMenuItem className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer rounded-md">
            <LogOut className="w-4 h-4" />
            Log out
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
