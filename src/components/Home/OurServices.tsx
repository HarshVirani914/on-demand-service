import Image from 'next/image';
import React from 'react';

interface IOurServicesProps {
  services: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}

const OurServices: React.FC<IOurServicesProps> = ({ services }) => {
  return (
    <div>
      <div className="text-black font-semibold mx-auto text-center text-4xl mt-6 underline ">
        Why Choose Us ?
      </div>

      <div className="my-10 flex gap-28 items-center justify-center m-auto text-center flex-row">
        {services.map(({ imageUrl, title, description }, key) => (
          <div
            className="flex flex-col gap-2 items-center justify-center"
            key={key}
          >
            <div>
              <Image src={imageUrl} width={128} height={128} alt="" />
            </div>
            <div className="font-semibold text-lg">{title}</div>
            <div className="w-52">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
