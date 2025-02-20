'use client';

import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

import { Authentication } from '@/components/auth/authentication';
import { useAuthContext } from '@/components/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/shared/user-button';
import { Logo } from '@/components/shared/logo';
import { useScrollState } from '@/hooks/use-scroll-state';
import { headerNavLinks } from '@/constants';

export const Header = ({ className = '' }) => {
  const { user } = useAuthContext();
  const hasScrolled = useScrollState();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out 
        ${hasScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'} 
        ${className}`}
    >
      <div
        className={`w-full py-4 px-6 ${hasScrolled ? 'border-b border-gray-800' : 'border-b border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-6">
            {headerNavLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`transition-colors ${hasScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div>
            {!user ? (
              <Authentication>
                <Button
                  className={`transition-all duration-200 shadow-lg hover:shadow-blue-500/25
                    ${hasScrolled ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' : 'bg-white text-black hover:bg-gray-200'}
                  `}
                >
                  Get Started
                </Button>
              </Authentication>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Go to Dashboard
                </Link>
                <UserButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
