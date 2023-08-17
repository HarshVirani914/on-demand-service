

import Image from 'next/image';
import React from 'react';
import LandingImage from '../../../public/HomePage/landing-image.jpg';
import OurServices from './OurServices';
import BecomeMerchant from './BecomeMerchant';

interface IHomePageProps {}

const Page: React.FC<IHomePageProps> = () => {
  const servicesList = [
    {
      imageUrl: '/HomePage/customer-service.png',
      title: 'Range Of Services',
      description:
        'We offer a range of services designed to exceed your expectations.',
    },
    {
      imageUrl: '/HomePage/best-customer-experience.png',
      title: 'Super experience',
      description: 'With a few clicks, enjoy instant service at your doorstep.',
    },
    {
      imageUrl: '/HomePage/FastService.png',
      title: 'Fast Service',
      description:
        "Efficiency in motion - that's the essence of our fast and reliable service.",
    },
    {
      imageUrl: '/HomePage/support.png',
      title: 'Dedicated Support',
      description:
        'Our dedicated support team is always there to address your queries.',
    },
  ];

  return (
    <>
      <div className="">
        <Image src={LandingImage} alt="" />
      </div>
      <OurServices services={servicesList} />
      <BecomeMerchant />
    </>
  );
};

export default Page;
