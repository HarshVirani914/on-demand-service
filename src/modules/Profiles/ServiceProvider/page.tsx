'use client';
import { Sidebar } from '@/components/UserDashboard/Sidebar';
import { FormFieldLayout, FormLayout } from '@/components/forms';
import { useCurrentUserQuery } from '@/generated/graphql';
import { Button } from '@material-tailwind/react';
import { Form } from 'formik';
import Image from 'next/image';
import sproviderImg from 'public/MyProfile/4605578_2444689.jpg';
import { useUpdateCompany } from './hooks/useUpdateCompany';

type Props = {};

const ServiceProviderProfile = (props: Props) => {
  const { data } = useCurrentUserQuery();

  const { initialValues, UpdateTraderSchema, handleSubmit, loading } =
    useUpdateCompany(data?.currentUser?.company?.id);

  return (
    <>
      <Sidebar
        items={[
          {
            title: 'Service Provider Profile',
            href: '/dashboard/my-profile/service-provider-profile',
          },
          {
            title: 'Listed Services',
            href: '/dashboard/service-provider-dashboard',
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
              validationSchema={UpdateTraderSchema}
              enableReinitialize
            >
              {({ isValid }: any) => (
                <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-[25.5rem]">
                  <div className="flex flex-col gap-4 mb-3">
                    <FormFieldLayout
                      label="Company Name"
                      name="name"
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
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={loading || !isValid}
                    >
                      Update Details
                    </Button>
                    {/* <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button>Update Details</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will update your profile and user's will
                            see your updated Profile.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="w-full">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction className="w-full bg-transparent">
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={loading || !isValid}
                          >
                            Continue
                          </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog> */}
                  </div>
                </Form>
              )}
            </FormLayout>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProviderProfile;
