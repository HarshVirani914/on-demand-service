'use client';
import { AdminSidebar } from '@/components/AdminSidebar';
import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useUsers } from '../../hooks/useUsers';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useServices } from '@/modules/Add-Edit-Forms/hooks/useServices';
import { useDeleteService } from '@/modules/Add-Edit-Forms/hooks/useDeleteService';

const TABLE_HEAD = [
  'Service Title',
  'Service Provider Name',
  'Email',
  'Category',
  'Created Date',
  'Action',
];

type Props = {};

const ManageServices = (props: Props) => {
  const { services } = useServices();

  const { handleDelete } = useDeleteService();

  return (
    <div className="h-screen flex flex-row justify-start">
      <AdminSidebar />
      <div className="bg-blue-gray-100 justify-center flex-1 text-black">
        <div className="text-center text-white text-3xl bg-black p-3 m-4 rounded-md">
          Manage Services
        </div>
        <div className="m-6 bg-blue-gray-100">
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => {
                  const isLast = index === services.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={service.id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.company?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.company?.user?.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.category?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {service.createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleDelete(service.id);
                          }}
                          variant="text"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
