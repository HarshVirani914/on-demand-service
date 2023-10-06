import { Footer } from '@/components/Footer';
import { Layout } from '@/components/layout';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
