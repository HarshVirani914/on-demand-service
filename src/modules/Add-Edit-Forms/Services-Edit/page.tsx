'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';
import { useServiceForm } from '../hooks/useServiceForm';

const EditServices = ({ id }: any) => {
  const { handleSubmit, initialValues, loading, validationSchema } =
    useServiceForm(id);

  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          Edit Service
        </Typography>
        <FormLayout
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isValid }: any) => (
            <Form className="mt-4 mb-2 w-full ">
              <div className=" flex flex-col gap-4">
                <FormFieldLayout label="Description" name="description" />
                <FormFieldLayout label="Price" name="price" />
                <AlertDialogFooter>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                  {/* <AlertDialogAction className="w-full"> */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !isValid}
                  >
                    Update
                  </Button>
                  {/* </AlertDialogAction> */}
                </AlertDialogFooter>
              </div>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default EditServices;
