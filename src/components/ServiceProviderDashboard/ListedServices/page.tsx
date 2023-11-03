import { Sidebar } from '@/components/UserDashboard/Sidebar';
import BookingCard from '@/components/card/bookingcard/page';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useCurrentUserQuery } from '@/generated/graphql';
import { AddService } from '@/modules/Add-Edit-Forms/AddService';
import { useServices } from '@/modules/Add-Edit-Forms/hooks/useServices';
import { CgAdd } from 'react-icons/cg';

const ServiceProviderDashboard = () => {
  
  const { data } = useCurrentUserQuery();

  const { services } = useServices({
    companyId: data?.currentUser?.company?.id,
  });

  return (
    <>
      <Sidebar
        items={[
          {
            title: 'Service Provider Profile',
            href: '/dashboard/service-provider-profile',
          },
          {
            title: 'Listed Services',
            href: '/dashboard/service-provider-dashboard',
          },
        ]}
      />
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
                <div className="flex flex-row gap-x-2">
                  <CgAdd size={20} color="black" />
                  <span className="">Add Service</span>
                </div>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AddService />
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="p-7 sm:px-20 mt-[3rem] sm:-mt[2rem] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
          {services.map((service) => (
            <div key={service.id}>
              <BookingCard
                id={service.id}
                buttonLabel="Edit"
                likeSymbol={false}
                ratingSymbol={false}
                charges={service.price}
                title={service.name}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceProviderDashboard;
