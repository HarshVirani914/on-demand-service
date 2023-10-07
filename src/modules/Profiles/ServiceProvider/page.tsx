'use client';
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import { FormFieldLayout, FormLayout } from '@/components/forms';
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
import { useCurrentUserQuery } from '@/generated/graphql';
import { RegisterSchema } from '@/modules/auth/schema';
import { Button } from '@material-tailwind/react';
import { Form } from 'formik';
import Image from 'next/image';
import sproviderImg from 'public/MyProfile/4605578_2444689.jpg';

type Props = {};

const ServiceProviderProfile = (props: Props) => {
  

  const handleSubmit = (value: any) => {
    console.log(value);
  };

  const validationSchema = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const { data } = useCurrentUserQuery();

  const initialValues = {
    companyName: data?.currentUser?.company?.name,
    email: data?.currentUser?.email,
    category: data?.currentUser?.company?.companyCategory?.category?.name,
    contactNumber: data?.currentUser?.addresses.nodes[0].contactNumber,
    address: data?.currentUser?.addresses.nodes[0].address,
    shopOpen: data?.currentUser?.company?.availability?.startTime,
    shopClose: data?.currentUser?.company?.availability?.endTime,
    description: data?.currentUser?.company?.description,
  };

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
      <div className="sm:ml-[20%]">
        <div className="bg-black/90  mx-10  p-5 mt-[2rem] sm:mx-20 sm:mt-[2rem] rounded-xl">
          <div className="text-center text-white flex justify-center text-4xl font-semibold">
            Service Provider Profile
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center sm:flex sm:flex-row sm:gap-14">
          <div className="sm:-mt-[5rem] sm:ml-[6rem] w-[10rem] h-[10rem] overflow-hidden rounded-full border-2 border-black">
            <Image
              src={sproviderImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-72 sm:w-[26rem]">
            <FormLayout
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              enableReinitialize
            >
              {() => (
                <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-[25.5rem]">
                  <div className="flex flex-col gap-4">
                    <FormFieldLayout
                      label="Company Name"
                      name="companyName"
                      isDisabled
                    />
                    <FormFieldLayout
                      label="Company Category"
                      name="category"
                      isDisabled
                    />
                    <FormFieldLayout label="Email" name="email" isDisabled />
                    <FormFieldLayout
                      label="Contact Number"
                      name="contactNumber"
                    />
                    <FormFieldLayout label="Address" name="address" />
                    <div className="flex flex-row gap-2">
                      <FormFieldLayout
                        label="Shop Open"
                        type="time"
                        name="shopOpen"
                      />
                      <FormFieldLayout
                        label="Shop Close"
                        type="time"
                        name="shopClose"
                      />
                    </div>
                    <FormFieldLayout label="Description" name="description" />
                  </div>
                </Form>
              )}
            </FormLayout>
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild className="rounded-none">
                  <Button>Update Details</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will update your profile and user's will see
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
