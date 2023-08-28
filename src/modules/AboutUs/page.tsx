'use client';
import Image from 'next/image';
import AboutUsImg from 'public/AboutUs/2205_w039_n003_243b_p1_243.jpg';

const AboutUs = () => {
  return (
    <>
      <div className='flex flex-row'>
      
      <div className="left-[20vw]">
        <div className="my-20 text-left ">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="mt-4 gap-y-6 font-normal text-base leading-6 text-gray-600 ">
            We are here to serve you the service at your doorstep.We will
            provide you the experts for your services. Our dedicated team is
            here to ensure a seamless and hassle-free experience for you.Your
            satisfaction is our primary goal, and we are constantly striving to
            improve and provide you with the best service possible.We truly
            appreciate your trust in our services and allowing us the privilege
            of serving you at your doorstep. Your convenience is of utmost
            importance to us, and we&apos;re committed to delivering top-notch
            service that exceeds your expectations. If you have any
            questions,concerns, or feedback, please don&apos;t hesitate to reach
            out to us.
          </p>
        </div>
        <div className=" mt-12">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="mt-4 gap-y-6 font-normal text-base leading-6 text-gray-600 ">
            We have seen many people who want immediate and effective service as
            soon as possible. So we thought to connect service providers and
            client together in one platform i.e. our website ExpertEase.
          </p>
        </div>
      </div>
      <div className="mt-12 sm:hidden">
        <Image src={AboutUsImg} alt="" />
      </div>
      </div>
    </>
  );
};

export default AboutUs;
