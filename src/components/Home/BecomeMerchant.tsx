import React from 'react';
import SellerCardImage from '../../../public/HomePage/seller-card-image.jpg';
import { Card } from '../card';

interface IPageProps {}

const BecomeMerchant: React.FC<IPageProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <Card
        imageUrl={SellerCardImage}
        title="Start As A Seller..."
        description="Unlock Your Potential as a Service Provider: Step into a world of opportunities on our website. If you're an AC technician, car service expert, salon professional or any service provider, this is your platform to shine. Connect with customers actively seeking your services."
        btnTitle="Get Started"
      />
    </div>
  );
};

export default BecomeMerchant;
