'use client';
import { Layout } from '@/components/layout';
import { Blog } from '@/modules/blog';
import { useEffect } from 'react';

type Props = {};

const Page = (props: Props) => {
  useEffect(() => {
    document.title = 'Expertease - Blog';
  }, []);

  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default Page;
