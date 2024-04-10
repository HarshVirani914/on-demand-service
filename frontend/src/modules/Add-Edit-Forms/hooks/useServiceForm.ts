import {
  useCreateServiceMutation,
  useCurrentUserQuery,
  useUpdateServiceMutation,
} from '@/generated/graphql';
import toast from 'react-hot-toast';
import { serviceSchema } from '../schema';
import { useService } from './useService';
import { useRouter } from 'next/navigation';

export const useServiceForm = (id?: string) => {
  const { service } = useService(id);

  const router = useRouter();

  const { data } = useCurrentUserQuery();

  const [createService, { loading, error }] = useCreateServiceMutation({
    onCompleted(data) {
      toast.success('Service created successfully');

      router.refresh();
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  });

  const [updateService, { loading: updateLoading, error: updateError }] =
    useUpdateServiceMutation({
      onCompleted(data) {
        toast.success('Service updated successfully');
      },
      onError(error) {
        toast.error('Error updating service ' + error.message);
      },
    });

  const handleSubmit = (input: any) => {
    const { id: _, ...sanitizedInput } = serviceSchema.cast(input, {
      assert: false,
      stripUnknown: true,
    });

    if (id) {
      return updateService({
        variables: {
          id,
          service: sanitizedInput,
        },
      });
    }

    return createService({
      variables: {
        service: sanitizedInput,
      },
    });
  };

  console.log('data', data);

  console.log('service', service);

  const initialValues = serviceSchema.cast(
    {
      service,
      companyId: data?.currentUser?.company?.id,
      categoryId: service?.categoryId,
      name: service?.name,
      description: service?.description,
      price: service?.price,
    },
    {
      assert: false,
      stripUnknown: true,
    }
  );

  console.log('initialValues', initialValues);

  return {
    initialValues,
    validationSchema: serviceSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError,
  };
};
