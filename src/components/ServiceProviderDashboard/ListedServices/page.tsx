import BookingCard from '@/components/card/bookingcard/page';
import React from 'react';
import { CgAdd } from 'react-icons/cg';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { AddService } from '@/modules/Add-Edit-Forms/AddService';

const ServiceProviderDashboard = () => {
  return (
    <>
      <div className="justify-center items-center">
        <div className="flex justify-center mt-[2%] text-4xl font-semibold">
          Listed Services
        </div>
        <div className="border-2 rounded-md border-black absolute lg:ml-[80%] sm:ml-28 flex flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="lg" className="flex flex-row content-start">
                <div className='flex flex-row gap-x-3'>
                <CgAdd size={25} color="black" />
                Add Service
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AddService />
            </AlertDialogContent>
          </AlertDialog>
          {/* <Link href=''>
          <button className='flex flex-row gap-x-3 p-1'>
            <CgAdd size={25} color="black" />
            Add Service
          </button>
        </Link> */}
        </div>
        <div className="p-20 mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
          <div>
            <BookingCard
              buttonLabel="Edit Service"
              likeSymbol={false}
              ratingSymbol={false}
            />
          </div>
          <div>
            <BookingCard
              buttonLabel="Edit Service"
              likeSymbol={false}
              ratingSymbol={false}
            />
          </div>
          <div>
            <BookingCard
              buttonLabel="Edit Service"
              likeSymbol={false}
              ratingSymbol={false}
            />
          </div>
          <div>
            <BookingCard
              buttonLabel="Edit Service"
              likeSymbol={false}
              ratingSymbol={false}
            />
          </div>
          <div>
            <BookingCard
              buttonLabel="Edit Service"
              likeSymbol={false}
              ratingSymbol={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProviderDashboard;
