import { Layout } from '@/components/layout';
import { UserDashboard } from '@/modules/DashBoard/User';

export default function Page() {
  return (
    <>
      <Layout>
        <UserDashboard />
      </Layout>
    </>
  );
}