import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accessible Disability Aids Marketplace',
  description: 'Starter scaffold for an accessibility-first marketplace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
