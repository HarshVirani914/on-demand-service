import { Layout } from '@/components/layout';
import { MyProfile } from '@/modules/Profiles/UserProfile';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Layout>
        <MyProfile />
      </Layout>
    </>
  );
};

export default page;
