'use client';
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import { FormFieldLayout } from '@/components/forms';
import { useCurrentUserQuery } from '@/generated/graphql';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import profileImg from 'public/MyProfile/my-profile.jpg';

type Props = {};

const MyProfile = (props: Props) => {
  const {data} = useCurrentUserQuery();
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
          <div className=" sm:ml-[6rem] w-[10rem] h-[10rem] overflow-hidden rounded-full border-2 border-black">
            <Image
              src={profileImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-72 sm:w-[26rem]">
            <Input
              label="Name"
              value={data?.currentUser?.name ? data?.currentUser?.name : ''}
              name="name"
              disabled
            />
            <Input
              label="Email"
              value={data?.currentUser?.email ? data?.currentUser?.email : ''}
              name="email"
              disabled
            />
          </div>

          <div>
            {/* <AlertDialog>
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
              </AlertDialog> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
