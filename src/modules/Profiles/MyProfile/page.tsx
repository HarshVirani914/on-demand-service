'use client';
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import React from 'react';
import Image from 'next/image';
import profileImg from 'public/MyProfile/26128227_2204_w037_n003_302b_p1_302.jpg';
import { Input } from '@material-tailwind/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Props = {};

const MyProfile = (props: Props) => {
  const [address1, setAddress1] = useState('ABC.....PQR');
  const [address2, setAddress2] = useState('XYZ....394101');
  return (
    <>
      <Sidebar
        items={[
          {
            title: 'My Profile',
            href: '/myprofile',
          },
        ]}
      />
      <div className="sm:ml-[12%]">
        <div className="bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl">
          <div className="text-center text-white flex justify-center text-4xl font-semibold">
            My Profile
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex sm:flex-row sm:gap-14">
          <div className="sm:-mt-[12rem] sm:ml-[6rem] w-[10rem] h-[10rem] overflow-hidden rounded-full border-2 border-black">
            <Image
              src={profileImg}
              alt=""
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col gap-y-5 w-72 sm:w-[26rem]">
            <div>
              <Input label="Name" value={`Brijesh Kevadiya`} disabled />
            </div>
            <div>
              <Input label="Email" value={`bkevadiya92@gmail.com`} disabled />
            </div>
            <div>
              <Input
                label="Address-1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div>
              <Input
                label="Address-2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-white bg-black hover:bg-black hover:text-white rounded-none"
                  >
                    Update Details
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will update your profile .
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
