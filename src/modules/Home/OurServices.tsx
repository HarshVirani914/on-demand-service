'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import { FeatureCard } from '../../components/card';
import Link from 'next/link';

interface IOurServicesProps {
  cardTitles: {
    title: string;
    imgUrl: string;
  }[];
}

const OurServices: React.FC<IOurServicesProps> = ({ cardTitles }) => {
  return (
    <div className="my-20 flex w-full items-center justify-between overflow-hidden text-start flex-col sm:flex-row">
      <div className="bg-gradient-to-r from-cyan-600 to-gray-900 bg-clip-text text-transparent font-bold text-2xl md:text-5xl flex flex-col gap-y-8 justify-center items-center md:w-[50%]">
        <div>
          <Typewriter
            options={{
              strings: ['POPULAR SERVICES', 'AT YOUR DOOR STEP'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </div>
        <div></div>
      </div>
      {/* <div id='services' className="w-[50%]">
        <Typography className="font-bold text-7xl flex justify-center items-center">
          Popular <br />
          Services
        </Typography>
      </div> */}
      <div className="w-[50%]">
        <div className="flex flex-row flex-wrap gap-8 sm:p-2">
          {cardTitles.map(({ title, imgUrl }, key) => (
            <Link
              className="hover:scale-105 ease-linear"
              href={`/${title.replace(/ /g, '-').toLowerCase()}`}
              key={key}
            >
              <FeatureCard title={title} imgUrl={imgUrl} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
