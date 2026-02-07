import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '103 Med Taxi - Медична транспортування',
  description: 'Медичне таксі в Кривому Розі',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
