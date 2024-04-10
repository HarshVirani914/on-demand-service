import { Layout } from '@/components/layout';
import { ServiceProviderProfile } from '@/modules/Profiles/ServiceProvider';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Layout>
        <ServiceProviderProfile />
      </Layout>
    </>
  );
};

export default page;
