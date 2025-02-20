import Image from 'next/image';
import Link from 'next/link';

import { useAuthContext } from '@/components/providers/auth-provider';

export const Logo = () => {
  const { user } = useAuthContext();
  const destination = user ? '/dashboard' : '/';

  return (
    <Link
      href={destination}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-10 h-10">
        <Image src="/logo.svg" alt="YT Shorts Logo" fill className="object-contain" priority />
      </div>
      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        YT Shorts
      </h2>
    </Link>
  );
};
