import BookingCard from '@/components/card/bookingcard/page';
import { Layout } from '@/components/layout';
import React from 'react';

const Dashboard = ({params} : {params : {categoryId : string}}) => {
  
  const serviceData = [
    { id: 1, title: 'Service 1', charges: '200', description: 'Description 1' },
    { id: 2, title: 'Service 2', charges: '200', description: 'Description 2' },
    { id: 3, title: 'Service 3', charges: '200', description: 'Description 3' },
  ];

  const {categoryId} = params;

  return (
    <>
      <Layout>
        <div className="justify-center items-center">
          <div className="bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl">
            <div className="text-center text-white flex justify-center text-4xl font-semibold">
              {categoryId.replaceAll('-', ' ').toLocaleUpperCase()}
            </div>
          </div>
          <div className="p-7 sm:px-20 -mt-[3rem] sm:-mt[5rem] mx-auto grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
            {serviceData.map((service) => (
              <div key={service.id}>
                <BookingCard
                  buttonLabel="Edit Service"
                  likeSymbol={false}
                  ratingSymbol={false}
                  title={service.title}
                  charges={service.charges}
                  description={service.description}
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
