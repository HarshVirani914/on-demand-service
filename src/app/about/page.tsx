'use client';
import { Layout } from '@/components/layout';
import { About } from '@/modules/about';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    document.title = 'Expertease - About Us';
  }, []);
  return (
    <>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
