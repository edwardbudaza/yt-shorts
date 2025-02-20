import Head from 'next/head';
import { Outfit } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ConvexClientProvider } from '@/components/providers/convex-client-provider';

const font = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'YT Shorts - AI-Powered YouTube Shorts Generator',
  description:
    'Transform your content into viral YouTube Shorts with AI-generated scripts, stunning visuals, and professional voiceovers.',
  keywords:
    'AI YouTube Shorts, AI video creation, YouTube automation, AI script generator, AI voiceover, AI short-form content',
  metadataBase: new URL('https://ytshorts.xyz'),
  openGraph: {
    title: 'YT Shorts - AI-Powered YouTube Shorts Generator',
    description:
      'Create engaging shorts in seconds with AI-generated scripts, stunning visuals, and natural voiceovers.',
    url: 'https://ytshorts.xyz',
    siteName: 'YT Shorts',
    images: [
      {
        url: '/og-image.svg', // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: 'YT Shorts - AI-Powered YouTube Shorts Generator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YT Shorts - AI-Powered YouTube Shorts Generator',
    description:
      'Create engaging shorts in seconds with AI-generated scripts, stunning visuals, and natural voiceovers.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/logo.svg', // Ensure this logo is properly placed in the public folder
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="YT Shorts" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ConvexClientProvider>
            <AuthProvider>{children}</AuthProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
