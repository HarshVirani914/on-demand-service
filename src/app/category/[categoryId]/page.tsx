import BookingCard from '@/components/card/bookingcard/page';
import React from 'react';

const Dashboard = ({params} : {params : {categoryId : string}}) => {

  const {categoryId} = params;

  return (
    <>
      <div className='justify-center items-center'>
        <div className='bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl'>
        <div className="text-center text-white flex justify-center text-4xl font-semibold">{categoryId.replaceAll('-',' ').toLocaleUpperCase()}</div>
        </div>
        <div className='p-7 sm:px-20 -mt-[3rem] sm:-mt[5rem] mx-auto grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5'>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={false} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={false} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={false} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={false} />
            </div>                                    
        </div>
      </div>
    </>
  );
};

export default Dashboard;
