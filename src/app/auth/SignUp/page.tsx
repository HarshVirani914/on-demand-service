import { AuthRestrict, Layout } from '@/components/layout';
import { SignUpForm } from '@/modules/auth';
import React from 'react';

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};

export default page;
