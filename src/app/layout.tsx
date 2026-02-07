import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: '103med.taxi - Медичне таксі Кривий Ріг',
  description: 'Перевезення лежачих хворих у Кривому Розі',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="YOUR_VERIFICATION_CODE_HERE" 
        />
        
        {/* Yandex Metrika */}
        <meta name="yandex-verification" content="YOUR_YANDEX_CODE" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
