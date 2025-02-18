'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Settings, CreditCard, LayoutDashboard, LogOut } from 'lucide-react';

import { Authentication } from '@/components/auth/authentication';
import { useAuthContext } from '@/components/providers/auth-provider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export const Header = ({ className }) => {
  const { user } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-200 ease-in-out
        ${hasScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}
        ${className}
      `}
    >
      <div
        className={`
        w-full py-4 px-6 
        ${hasScrolled ? 'border-b border-gray-800' : 'border-b border-transparent'}
      `}
      >
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.svg"
                alt="YT Shorts Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              YT Shorts
            </h2>
          </Link>

          {/* Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/features"
              className={`
                transition-colors
                ${hasScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'}
              `}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`
                transition-colors
                ${hasScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'}
              `}
            >
              Pricing
            </Link>
            <Link
              href="/templates"
              className={`
                transition-colors
                ${hasScrolled ? 'text-gray-300 hover:text-white' : 'text-white/90 hover:text-white'}
              `}
            >
              Templates
            </Link>
          </nav>

          {/* Authentication or Avatar Dropdown */}
          <div>
            {!user ? (
              <Authentication>
                <Button
                  className={`
                    transition-all duration-200
                    ${
                      hasScrolled
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        : 'bg-white text-black hover:bg-gray-200'
                    }
                    shadow-lg hover:shadow-blue-500/25
                  `}
                >
                  Get Started
                </Button>
              </Authentication>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Go to Dashboard
                </Link>

                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar
                      className={`
                    cursor-pointer transition-colors
                    ${
                      hasScrolled
                        ? 'border-2 border-gray-700 hover:border-gray-600'
                        : 'border-2 border-white/50 hover:border-white'
                    }
                  `}
                    >
                      <AvatarImage src={user.photoURL} />
                      <AvatarFallback className="bg-gray-800">
                        {user.displayName?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl w-64 p-2 animate-in slide-in-from-top-2"
                  >
                    {/* User Info Section */}
                    <div className="p-2 text-center">
                      <DropdownMenuLabel className="text-sm text-white font-semibold">
                        {user.displayName}
                      </DropdownMenuLabel>
                      <div className="text-xs text-gray-400 truncate">{user.email}</div>
                    </div>
                    <DropdownMenuSeparator className="bg-gray-800" />

                    {/* Navigation Items */}
                    <div className="p-1">
                      <Link href="/dashboard">
                        <DropdownMenuItem className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-gray-800 cursor-pointer rounded-md">
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/billing">
                        <DropdownMenuItem className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-gray-800 cursor-pointer rounded-md">
                          <CreditCard className="w-4 h-4" />
                          Billing
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/settings">
                        <DropdownMenuItem className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-gray-800 cursor-pointer rounded-md">
                          <Settings className="w-4 h-4" />
                          Settings
                        </DropdownMenuItem>
                      </Link>
                    </div>

                    <DropdownMenuSeparator className="bg-gray-800" />

                    {/* Logout Section */}
                    <div className="p-1">
                      <DropdownMenuItem className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer rounded-md">
                        <LogOut className="w-4 h-4" />
                        Log out
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
