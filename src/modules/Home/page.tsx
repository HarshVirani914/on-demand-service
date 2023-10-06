'use client';
import Image from 'next/image';
import React from 'react';
import LandingImage from '../../../public/HomePage/New Home enhanced.png';
import BecomeMerchant from './BecomeMerchant';
import WhyUs from './WhyUs';
import OurServices from './OurServices';
import Link from 'next/link';
import 'src/app/globals.css';

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

  const cardTitles = [
    {
      title: 'AC Services',
      imgUrl:
        'https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=996&t=st=1692370580~exp=1692371180~hmac=7ea0425cd3ae96c5fa179dbccb9260c081a3742033906bd66984d8c5c6786d91',
    },
    {
      title: 'Car Services',
      imgUrl:
        'https://www.bmw.lt/content/dam/bmw/common/topics/offers-and-services/service-workshop/service-maintenance/bmwaftersales_serviceworkshop_servicemaintenance_2_checkmaintanaince_01.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1477931150205.jpg',
    },
    {
      title: 'Home Cleaning Services',
      imgUrl:
        'https://img.freepik.com/free-photo/people-taking-care-office-cleaning_23-2149374451.jpg?w=996&t=st=1692371263~exp=1692371863~hmac=3e184d5d83037e0c5e90930c9486ebbc1231e2206b310d438c0368fd4dd53d4b',
    },
    {
      title: 'Plumber Services',
      imgUrl:
        'https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176718.jpg?w=996&t=st=1692371528~exp=1692372128~hmac=b39dde8690dc1edcf9b7c0b5a4752af8927f12a7934e791037bb70c182b78eb5',
    },
  ];

  return (
    <>
      <Image
        className="-z-50 hidden md:block relative"
        src={LandingImage}
        alt="LandingImg"
      />
      <div className=" flex flex-col justify-center items-center md:block md:absolute md:left-24 md:top-80">
        <div className="m-5 md:m-0">
          <div className="text-black md:text-start font-bold text-sm md:text-3xl gap-4">
            <div className="text-center md:text-start text-2xl md:text-4xl">
              Bringing Services to Your Doorstep
            </div>
            <div className="mt-2 text-center md:text-start md:text-xl">
              - On Demand, On Time.
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href={`/category/${("Services").replace(/ /g, '-').toLowerCase()}`}>
            <button className="bg-black text-white sm:bg-white sm:text-black p-4 px-10 border-black border-2 text-center font-semibold hover:bg-black transition-colors duration-200 hover:text-white">
              Explore Our Services
            </button>
          </Link>
        </div>
      </div>
      <WhyUs services={servicesList} />
      <OurServices cardTitles={cardTitles} />
      <BecomeMerchant />
    </>
  );
};

export default Page;
