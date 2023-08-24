'use client';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We are here to serve you the service at your doorstep.We will
            provide you the experts for your services. Our dedicated team is
            here to ensure a seamless and hassle-free experience for you.Your
            satisfaction is our primary goal, and we are constantly striving to
            improve and provide you with the best service possible.We truly
            appreciate your trust in our services and allowing us the privilege
            of serving you at your doorstep. Your convenience is of utmost
            importance to us, and were committed to delivering top-notch
            service that exceeds your expectations. If you have any
            questions,concerns, or feedback, please dont hesitate to reach out
            to us.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <Image
            className="w-full h-full"
            src=""
            alt="A group of People"
            fill
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            We have seen many people who want immediate and effective service as
            soon as possible. So we thought to connect service providers and
            client together in one platform i.e. our website ExpertEase.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                src=""
                alt="Alexa featured Image"
                fill
              />
              <Image
                className="md:hidden block"
                src=""
                alt="Alexa featured Image"
                fill
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                src=""
                alt="Olivia featured Image"
                fill
              />
              <Image
                className="md:hidden block"
                src=""
                alt="Olivia featured Image"
                fill
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                src=""
                alt="Liam featued Image"
                fill
              />
              <Image
                className="md:hidden block"
                src=""
                alt="Liam featued Image"
                fill
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                src=""
                alt="Elijah featured Image"
                fill
              />
              <Image
                className="md:hidden block"
                src=""
                alt="Elijah featured Image"
                fill
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
