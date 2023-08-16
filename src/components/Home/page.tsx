import React from 'react';
import Image from 'next/image';
import { HomeLower } from './HomeLower';
import WeAreOpen from '../../../public/New Project.jpg';



const Page = () => {
  return (
    <>
      <div className="text-center">
        <Image src={WeAreOpen} alt="" />
      </div>
      <HomeLower/>
    </>
  );
};

export default Page;
