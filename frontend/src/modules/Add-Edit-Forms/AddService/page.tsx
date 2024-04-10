'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import {
  Button,
  Card,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import { Field, FieldProps, Form } from 'formik';
import { useCategories } from '../hooks/useCategories';
import { useServiceForm } from '../hooks/useServiceForm';
import { useCurrentUserQuery } from '@/generated/graphql';

const AddService = () => {
  const { data } = useCurrentUserQuery();

  const { categories } = useCategories(
    data?.currentUser?.company?.companyCategory?.categoryId
  );

  const { initialValues, handleSubmit, validationSchema, loading } =
    useServiceForm();
  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          Add Service
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
                <Field name="categoryId">
                  {({ field, form }: FieldProps) => (
                    <Select
                      {...field}
                      label="Select Category"
                      variant="outlined"
                      onChange={(e: any) => form.setFieldValue(field.name, e)}
                    >
                      {categories.map(({ id, name }) => (
                        <Option value={id} key={id}>
                          {name.toLocaleUpperCase()}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Field>
                <FormFieldLayout label="Service Title" name="name" />
                <FormFieldLayout label="Description" name="description" />
                <FormFieldLayout label="Price" name="price" />

                <AlertDialogFooter>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                  {/* <AlertDialogAction className="w-full bg-transparent"> */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !isValid}
                  >
                    Add
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

export default AddService;
