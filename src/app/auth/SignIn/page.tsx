import { AuthRestrict, Layout } from '@/components/layout';
import { SignInForm } from '@/modules/auth';

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <Layout>
      <SignInForm />
    </Layout>
  );
};

export default page;
