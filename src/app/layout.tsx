import { WithApollo } from '@/modules/apollo';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExpertEase - Home',
  description: 'Instant service at your doorstep.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WithApollo>
          {children}
          <Toaster />
        </WithApollo>
      </body>
    </html>
  );
}
