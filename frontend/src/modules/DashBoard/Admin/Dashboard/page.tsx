import { AdminSidebar } from '@/components/AdminSidebar';
import Link from 'next/link';
import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { PiUserSwitchDuotone } from 'react-icons/pi';
import { GrServices } from 'react-icons/gr';

type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <>
      <div className="h-screen flex flex-row justify-start">
        <AdminSidebar />
        <div className="bg-blue-gray-100 justify-center flex-1 text-black">
          <div className="text-center text-white text-3xl bg-black p-3 m-4 rounded-md">
            Admin - Dashboard
          </div>
          <div className="sm:ml-[25%] ml-[20%] gap-8 flex sm:flex-row flex-col">
            <Link href="/dashboard/admin/manage-users">
              <div className="bg-white/60 flex flex-col gap-4 shadow-2xl h-[10rem] w-[10rem] justify-center text-center rounded-lg">
                <div className="bg-blue-gray-800 text-white rounded-md m-3 p-1">
                  Manage Users
                </div>
                <div className="ml-[42%] -mt-2">
                  <FiUsers size={30} />
                </div>
              </div>
            </Link>
            <Link href="/dashboard/admin/manage-serviceproviders">
              <div className="bg-white/60 flex flex-col gap-4 shadow-2xl h-[10rem] w-[10rem] justify-center text-center rounded-lg">
                <div className="bg-blue-gray-800 text-white rounded-md m-3 p-1">
                  Manage Service Providers
                </div>
                <div className="ml-[38%] -mt-4">
                  <PiUserSwitchDuotone size={40} />
                </div>
              </div>
            </Link>
            <Link href="/dashboard/admin/manage-services">
              <div className="bg-white/60 flex flex-col gap-4 shadow-2xl h-[10rem] w-[10rem] justify-center text-center rounded-lg">
                <div className="bg-blue-gray-800 text-white rounded-md m-3 p-1">
                  Manage Services
                </div>
                <div className="ml-[42%] -mt-2">
                  <GrServices size={30} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AdminDashboard;
