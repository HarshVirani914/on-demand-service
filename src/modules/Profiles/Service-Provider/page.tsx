'use client';
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import React from 'react';
import Image from 'next/image';
import sproviderImg from 'public/MyProfile/4605578_2444689.jpg';
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

const ServiceProviderProfile = (props: Props) => {
  const [contact, setContact] = useState('1121121121');
  const [shopOpen, setShopOpen] = useState('9:00');
  const [amPmOpen, setAmPmOpen] = useState('AM');
  const [shopClose, setShopClose] = useState('6:00');
  const [amPmClose, setAmPmClose] = useState('PM');

  return (
    <>
      <Sidebar
        items={[
          {
            title: 'Service Provider Profile',
            href: '/myprofile/service-provider-profile',
          },
          {
            title: 'Listed Services',
            href: '/serviceproviderdashboard',
          },
        ]}
      />
      <div className="sm:ml-[12%]">
        <div className="bg-black/90  m-10 p-5 mt-[2rem] sm:m-20 sm:mt-[2rem] rounded-xl">
          <div className="text-center text-white flex justify-center text-4xl font-semibold">
            Service-Provider Profile
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex sm:flex-row sm:gap-14">
          <div className="sm:-mt-[20rem] sm:ml-[6rem] w-[10rem] h-[10rem] overflow-hidden rounded-full border-2 border-black">
            <Image
              src={sproviderImg}
              alt=""
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col gap-y-5 w-72 sm:w-[26rem]">
            <div>
              <Input label="Company Name" value={`Reliance`} disabled />
            </div>
            <div>
              <Input label="Category" value={`Home Services`} disabled />
            </div>
            <div className="flex flex-col gap-y-5 sm:flex sm:flex-row sm:gap-4">
              <div>
                <Input label="Email" value={`reliance92@gmail.com`} disabled />
              </div>
              <div>
                <Input label="Contact" value={contact}
                  onChange={(e) => setContact(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col gap-y-5 sm:flex sm:flex-row sm:gap-4">
              <div>
                <Input
                  label="Shop Open"
                  value={shopOpen}
                  onChange={(e) => setShopOpen(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="AM/PM"
                  value={amPmOpen}
                  onChange={(e) => setAmPmOpen(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-5 sm:flex sm:flex-row sm:gap-4">
              <div>
                <Input
                  label="Shop Close"
                  value={shopClose}
                  onChange={(e) => setShopClose(e.target.value)}
                />
              </div>
              <div>
                <Input
                  label="AM/PM"
                  value={amPmClose}
                  onChange={(e) => setAmPmClose(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Input label="Shop Address-1" value={`ABC.....PQR`} />
            </div>
            <div>
              <Input label="Shop Address-2" value={`XYZ....394101`} />
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
                      This action will update your profile and users will see
                      your updated Profile.
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

export default ServiceProviderProfile;
