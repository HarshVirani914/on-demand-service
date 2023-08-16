import React from 'react';
import Image from 'next/image';
import Range from '../../../../public/HomePage/customer-service.png';
import SuperExp from '../../../../public/HomePage/best-customer-experience.png';
import FastService from '../../../../public/HomePage/FastSrvice.png';
import Support from '../../../../public/HomePage/support.png';
import Seller from '../../../../public/HomePage/Become seller.jpg';


const HomeLower = () => {
  return (
    <>
      {/* <div className="container bg-gray-400 p-40 absolute -my-96 m-20 mx-72 w-3/5"> </div> */}
      <div className="box-border ml-44">
        <div className="title">
          <h1 className="mr-36 text-black font-semibold text-center text-4xl mt-6 underline ">
            Why Choose Us ?
          </h1>
        </div>
        <div className="mt-10 w-85 flex space-x-32 items-center m-auto text-center flex-row">
          <div className="">
            <div className="ml-8">
              <Image src={Range} alt="" />
            </div>
            <h2 className="font-semibold mt-3 text-lg">Range Of Services</h2>
            <p className="w-48 mt-2">
              We offer a range of services designed to exceed your expectations.
            </p>
          </div>
          <div className="mb-4">
            <div className="ml-8">
              <Image src={SuperExp} alt="" />
            </div>
            <h2 className="font-semibold mt-3 text-lg ">Super Experiance</h2>
            <p className="w-48 mt-2">
              With a few clicks, enjoy instant service at your doorstep.
            </p>
          </div>
          <div className="mt-6">
            <div className="ml-8">
              <Image src={FastService} alt="" />
            </div>
            <h2 className="font-semibold mt-3 text-lg">Fast Service</h2>
            <p className="w-48 mt-2">
              From quick bookings to prompt deliveries, we&apos;re committed to
              getting things done in record time.
            </p>
          </div>
          <div className="card">
            <div className="ml-8">
              <Image src={Support} alt="" />
            </div>
            <h2 className="font-semibold mt-3 text-lg">Dedicated Support</h2>
            <p className="w-48 mt-2">
              Our dedicated support team is always there to address your queries
              and resolve issues.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-white mt-12 text-center">
        {/* <div className=" pl-96 ">
          <h3 className="text-4xl font-bold">Start As Service Provider...</h3>
        </div> */}
        <div className=" h- w-[80%] mx-[10%]">
          <div className="ml-6 mb-4 pt-8">
            <p className='my-30 text-center pl-80 text-4xl font-bold underline'>Start As A Seller...</p>
           <div className='ml-40 mt-8'>
           <p className='w-96 my-30 text-left justify-center items-center mx-96'>Unlock Your Potential as a Service Provider: Step into a world of opportunities on our website. If you&apos;re an AC technician, car service expert, salon professional, or any service provider, this is your platform to shine. Connect with customers actively seeking your services. Leverage our website to showcase your skills, build credibility, and grow your client base. We&apos; re dedicated to helping you expand your reach and make your mark in the service industry.</p>
           </div>
           <div className='mt-7'>
           <button className='text-black border-2 rounded-md border-solid border-black px-4 py-3 hover:bg-black hover:text-white '>Start Now</button>
           </div>
            <Image
              src={Seller}
              alt=""
              height={300}
              width={300}
              className="rounded-xl hover:animate-bounce -my-80 mx-16 "
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLower;
