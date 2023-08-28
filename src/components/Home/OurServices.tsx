'use client';

import React from 'react';
import { FeatureCard } from '../card';
import Typewriter from 'typewriter-effect';

interface IOurServicesProps {
  cardTitles: {
    title: string;
    imgUrl: string;
  }[];
}

const OurServices: React.FC<IOurServicesProps> = ({ cardTitles }) => {
  return (
    <div className="my-20 flex w-full items-center justify-between overflow-hidden text-start sm:flex-row">
      <div className='bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent font-bold text-5xl flex flex-col gap-y-8 justify-center items-center w-[50%]'>
      <div>
      <Typewriter
        options={{
          strings: ['POPULAR SERVICES','AT YOUR DOOR STEP'],
          autoStart: true,
          loop: true,
          delay:50,
          deleteSpeed:30
        }}
      />
      </div>
      <div>
      
      </div>
      </div>
      {/* <div id='services' className="w-[50%]">
        <Typography className="font-bold text-7xl flex justify-center items-center">
          Popular <br />
          Services
        </Typography>
      </div> */}
      <div className="w-[50%]">
        <div className="flex flex-row flex-wrap gap-8">
          {cardTitles.map(({ title, imgUrl }, key) => (
            <FeatureCard title={title} imgUrl={imgUrl} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
