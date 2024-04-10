'use client';
import { ServiceProviderDashboard } from '@/components/ServiceProviderDashboard/ListedServices';
import { LayoutChildProps } from '@/components/layout/Layout';

const Serviceprovider = ({ currentUser }: LayoutChildProps) => {
  return (
    <>
      {/* <Sidebar /> */}
      <ServiceProviderDashboard />
    </>
  );
};

export default Serviceprovider;
