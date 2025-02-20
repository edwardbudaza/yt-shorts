import {
  CreditCard,
  HomeIcon,
  LayoutDashboard,
  LucideFileVideo,
  Search,
  Settings,
  WalletCards,
} from 'lucide-react';

export const userButtonOptions = [
  { href: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard' },
  { href: '/billing', icon: <CreditCard className="w-4 h-4" />, label: 'Billing' },
  { href: '/settings', icon: <Settings className="w-4 h-4" />, label: 'Settings' },
];

export const menuItems = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: HomeIcon,
  },
  {
    title: 'Create New Video',
    url: '/create-new-video',
    icon: LucideFileVideo,
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: Search,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: WalletCards,
  },
];

export const headerNavLinks = ['Features', 'Pricing', 'Templates'];

export const stats = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Videos Generated', value: '100K+' },
  { label: 'Time Saved', value: '1M+ Hours' },
];
