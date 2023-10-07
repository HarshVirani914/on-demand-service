import { AuthRestrict, Layout } from '@/components/layout';
import { About } from '@/modules/about';
import React, { useEffect } from 'react';

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
