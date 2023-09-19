import BookingCard from '@/components/card/bookingcard/page';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className='justify-center items-center'>
        <div className="flex justify-center mt-[2%] text-4xl font-semibold">Dashboard</div>
        <div className='p-20 mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5'>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
            <div>
            <BookingCard buttonLabel='Get Details' likeSymbol={false} ratingSymbol={true} />
            </div>
                                    
        </div>
      </div>
    </>
  );
};

export default Dashboard;
