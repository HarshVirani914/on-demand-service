'use client';

import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Card, Typography } from '@material-tailwind/react';
import { FaBuilding } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { AiOutlineShop } from 'react-icons/ai';
import { LuIndianRupee } from 'react-icons/lu';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TbNorthStar } from 'react-icons/tb';

const GetDetails = () => {
  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          <div className="flex flex-row gap-x-3">
            <FaBuilding size={22} color="black" />
            <div className="text-2xl -mt-1">Company/Service-Provider Name</div>
          </div>
        </Typography>

        <div className="mt-[3%] flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <div className="font-bold text-black">Shop Time</div>
            <div className="flex flex-row gap-x-3">
              <AiOutlineFieldTime size={18} color="black" />
              <div className="-mt-1">9:00 AM to 7:00 PM</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black">Contact-Details</div>
            <div className="flex flex-row gap-x-3">
              <LuPhoneCall size={16} color="black" />
              <div className="-mt-1">+91-9090909090</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black">Shop-Address</div>
            <div className="flex flex-row gap-x-3">
              <AiOutlineShop size={19} color="black" />
              <div className="-mt-1">123-ABC XYZ MNO ... -394101</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black">Price</div>
            <div className="flex flex-row gap-x-3">
              <LuIndianRupee size={19} color="black" />
              <div className="-mt-1">600/-</div>
            </div>
            <div className='flex flex-row gap-1'>
                <TbNorthStar size={10} color='black' className='mt-1' />
                <div className='text-xs'>Prices may vary according to Service</div>
              </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full bg-black text-white ">
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </div>
      </Card>
    </div>
  );
};

export default GetDetails;
