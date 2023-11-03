'use client';
import BookingCard from '@/components/card/bookingcard/page';
import { Layout } from '@/components/layout';
import { useServices } from '@/modules/Add-Edit-Forms/hooks/useServices';
import React, { useEffect } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

const Dashboard: React.FC<Props> = ({ params: { slug } }) => {
  const { services } = useServices({ slug: `/${slug}` });

  useEffect(() => {
    const title = slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    document.title = `Expertease-${title}`;
  }, [slug]);

  return (
    <>
      <Layout>
        <div className="justify-center items-center">
          <div className="bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl">
            <div className="text-center text-white flex justify-center text-4xl font-semibold">
              {slug.replaceAll('-', ' ').toLocaleUpperCase()}
            </div>
          </div>
          <div className="p-7 sm:px-20 -mt-[3rem] sm:-mt[5rem] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div key={service.id}>
                <BookingCard
                  id={service.id}
                  buttonLabel="Get Details"
                  likeSymbol={false}
                  ratingSymbol={false}
                  title={service.name}
                  charges={service.price}
                  description={service.description}
                  categoryName={service?.category?.name}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
