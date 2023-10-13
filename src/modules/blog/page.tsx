import React from 'react';
import Image from 'next/image';
import Blog1 from 'public/Blog/Blog1.jpg';
import Blog2 from 'public/Blog/Blog2.jpg';
import Blog3 from 'public/Blog/Blog3.jpg';

import Typewriter from 'typewriter-effect';

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <div className="justify-center items-center text-black sm:text-white">
        <div className="flex flex-col ">
          <Image src={Blog1} alt="" />
          <div className=" flex flex-col justify-center items-center md:block md:absolute md:left-24 md:top-40">
            <div className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent text-center font-bold md:text-start text-2xl md:text-6xl w-full flex flex-row sm:gap-x-3">
              <div>{`😀`}</div>
              <div>
                <Typewriter
                  options={{
                    strings: [' Your One-Stop Service Solution'],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 10,
                  }}
                />
              </div>
            </div>
            <div className="gap-y-20">
              <div className="flex flex-col md:flex-row mt-[5rem] gap-x-[10rem]">
                <div className="opacity-0  sm:opacity-75">
                  <Image
                    src={Blog2}
                    alt=""
                    height={300}
                    width={300}
                    className="rounded-3xl"
                  />
                </div>
                <div className="flex flex-col w-[60%] gap-y-16">
                  <div className="text-4xl font-semibold">
                    The Evolution of On-Demand Services:
                  </div>
                  <div className="text-2xl">
                    In today's fast-paced world, convenience is key, and the
                    evolution of on-demand services has played a pivotal role in
                    reshaping how we access essential services. Gone are the
                    days when you had to search endlessly for a car service
                    provider or a plumber. With the advent of technology and
                    innovative platforms like ours, getting the services you
                    need is just a few taps away.
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-[5rem] gap-x-[10rem]">
                <div className="flex flex-col w-[60%] gap-y-14">
                  <div className="text-4xl font-semibold">
                    The Future of On-Demand Services: Trends and Predictions:
                  </div>
                  <div className="text-2xl">
                    In the ever-evolving landscape of on-demand services,
                    staying ahead of the curve is crucial. As we look to the
                    future, it's clear that the on-demand service industry will
                    continue to transform the way we access essential services.
                  </div>
                </div>
                <div className="opacity-0 sm:opacity-75">
                  <Image
                    src={Blog3}
                    alt=""
                    height={300}
                    width={300}
                    className="rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
