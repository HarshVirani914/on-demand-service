import { Layout } from '@/components/layout';
import { HomePage } from '@/modules/Home';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
