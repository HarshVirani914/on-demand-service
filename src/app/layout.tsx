import { Layout } from '@/components';
import { Navbar } from '@/components/navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
        <Layout>
          <Navbar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
