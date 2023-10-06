import { AuthRestrict, Layout } from '@/components/layout';
import { TraderSignUpForm } from '@/modules/auth';
import React from 'react';

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <Layout>
      <TraderSignUpForm />
    </Layout>
  );
};

export default page;
