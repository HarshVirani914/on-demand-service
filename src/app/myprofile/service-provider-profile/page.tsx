import { Layout } from '@/components/layout';
import { ServiceProviderProfile } from '@/modules/Profiles/ServiceProvider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Layout>
        <ServiceProviderProfile />
      </Layout>
    </>
  );
}

export default page