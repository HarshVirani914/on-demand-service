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
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import {
  MdOutlineSpaceDashboard,
  MdOutlineHomeRepairService,
} from 'react-icons/md';

const ServiceProviderDashboard = () => {
  return (
    <>
    <Sidebar items={[{
        title:"Service Provider Profile",
        href : "/myprofile/service-provider-profile"
      },{
        title:"Listed Services",
        href : "/serviceproviderdashboard"
      }]} />
      <div className="sm:ml-[20%] justify-center items-center">
        <div className="bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl">
          <div className="text-center text-white flex justify-center text-4xl font-semibold">
            Listed Services
          </div>
        </div>
        <div className="border-2 rounded-md -mt-[1.7rem] ml-[6rem] sm:-mt-[3rem] border-black absolute  flex flex-row">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="lg"
                className="flex flex-row content-start"
              >
                <div className="flex flex-row gap-x-3">
                  <CgAdd size={25} color="black" />
                  Add Service
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AddService />
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="p-7 sm:px-20 mt-[3rem] sm:-mt[2rem] mx-auto grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
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
