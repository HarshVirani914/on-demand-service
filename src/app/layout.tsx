import { Footer } from '@/components/Footer';
import { Layout } from '@/components/layout';
import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExpertEase',
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
        {/* <LoadingBar
        color='#f11946'
        progress={100}
        height={1.6}
      /> */}
        <Layout>
          <Navbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
