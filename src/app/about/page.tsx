import { AuthRestrict, Layout } from '@/components/layout';
import { About } from '@/modules/about';

export default function Page() {
  return (
    <>
      <Layout>
        <About />
      </Layout>
    </>
  );
}
