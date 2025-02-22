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

export const suggestions = [
  'Historic Story',
  'Kids Story',
  'Movie Stories',
  'AI Innovations',
  'Space Mysteries',
  'Horror Stories',
  'Mythological Tales',
  'Tech breakthroughs',
  'True Crime Stories',
  'Fantasy Adventures',
  'Science Experiments',
  'Motivational Stories',
];

export const headerNavLinks = ['Features', 'Pricing', 'Templates'];

export const stats = [
  { label: 'Active Users', value: '10K+' },
  { label: 'Videos Generated', value: '100K+' },
  { label: 'Time Saved', value: '1M+ Hours' },
];

export const videoOptions = [
  {
    name: 'Realistic',
    image: '/images/realistic.webp',
  },
  {
    name: 'Cinematic',
    image: '/images/cinematic.webp',
  },
  {
    name: 'Cartoon',
    image: '/images/3d.webp',
  },
  {
    name: 'Watercolor',
    image: '/images/watercolor.webp',
  },
  {
    name: 'Cyberpunk',
    image: '/images/cyberpunk.webp',
  },
  {
    name: 'GTA',
    image: '/images/gta.webp',
  },
  {
    name: 'Anime',
    image: '/images/anim.webp',
  },
];

export const voiceOptions = [
  {
    value: 'af_sarah',
    name: '🇺🇸 - Sarah (Female)',
  },
  {
    value: 'af_sky',
    name: '🇺🇸 - Sky (Female)',
  },
  {
    value: 'am_adam',
    name: '🇺🇸 - Adam (Male)',
  },
  {
    value: 'bm_daniel',
    name: '🇬🇧 - Daniel (Male)',
  },
  {
    value: 'hf_alpha',
    name: '🇮🇳 - Alpha (Female)',
  },
  {
    value: 'ff_siwis',
    name: '🇫🇷 - Siwis (Female)',
  },
  {
    value: 'aura-orion-en',
    name: '🇺🇸 - Orion (Male)',
  },
];

export const captionOptions = [
  {
    name: 'Youtuber',
    style:
      'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1',
  },
  {
    name: 'Supreme',
    style: 'text-red-500 text-4xl font-black uppercase tracking-widest px-3 py-1 drop-shadow-lg',
  },
  {
    name: 'Minimalist',
    style: 'text-white text-xl font-medium lowercase tracking-tight px-3 py-1',
  },
  {
    name: 'Futuristic',
    style: 'text-cyan-400 text-2xl font-bold uppercase tracking-widest px-3 py-1 drop-shadow-lg',
  },
  {
    name: 'Vintage',
    style: 'text-orange-500 text-2xl font-serif italic tracking-wide px-3 py-1',
  },
  {
    name: 'Luxury',
    style: 'text-yellow-400 text-3xl font-bold uppercase tracking-wide px-3 py-1',
  },
  {
    name: 'Glitch',
    style:
      'text-purple-400 text-3xl font-extrabold uppercase tracking-wide px-3 py-1 drop-shadow-lg',
  },
  {
    name: 'Neon',
    style: 'text-green-400 text-3xl font-extrabold uppercase tracking-wide px-3 py-1',
  },
  {
    name: 'Streetwear',
    style: 'text-white text-4xl font-black uppercase tracking-tight px-3 py-1',
  },
  {
    name: 'Cyberpunk',
    style: 'text-pink-400 text-2xl font-bold uppercase tracking-widest px-3 py-1',
  },
];

export const SCRIPT_PROMPT = `
Write two distinct scripts for a 30-60 second video on Topic: {topic},

Use plain text storytelling with no scene descriptions.

Avoid brackets, parentheses, or additional formatting—just the script content.

Ensure each script has a clear hook, beginning, middle, and end.

Return the response strictly in JSON format following this schema: {scripts:[{content:''}]}`;
