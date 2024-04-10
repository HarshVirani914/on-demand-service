import React from 'react';
import SellerCardImage from '../../../public/HomePage/seller-card-image.jpg';
import { Card } from '@/components/card';

interface IPageProps {}

const BecomeMerchant: React.FC<IPageProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <Card
        imageUrl={SellerCardImage}
        title="Start As A Service Provider..."
        description="Unlock Your Potential as a Service Provider: Step into a world of opportunities on our website. If you're an AC technician, car service expert, plumber professional or any service provider, this is your platform to shine. Connect with customers actively seeking your services."
        btnTitle="Get Started"
        href="/auth/serviceprovidersignup"
      />
    </div>
  );
};

export default BecomeMerchant;
