import { useUpdateCompanyMutation } from '@/generated/graphql';
import toast from 'react-hot-toast';
import { UpdateTraderSchema } from '../schema';
import { useRouter } from 'next/navigation';
import { useCompany } from './useCompany';

export const useUpdateCompany = (id?: string) => {
  const router = useRouter();

  const { company } = useCompany(id);

  const [updateCompany, { data, loading, error }] = useUpdateCompanyMutation({
    onCompleted(data) {
      toast.success('Company details updated successfully');

      router.refresh();
    },
    onError(error) {
      toast.error('Error updating company ' + error.message);
    },
  });

  const handleSubmit = (input: any) => {
    const {
      id,
      addressId,
      address,
      contactNumber,
      description,
      shopOpen,
      shopClose,
      availabilityId,
    } = input;
    updateCompany({
      variables: {
        id,
        company: {
          description,
          addressUsingId: {
            updateById: {
              id: addressId,
              patch: {
                address,
                contactNumber,
              },
            },
          },
          availabilityUsingId: {
            updateById: {
              id: availabilityId,
              patch: {
                startTime: shopOpen,
                endTime: shopClose,
              },
            },
          },
        },
      },
    });
  };

  const initialValues = UpdateTraderSchema.cast(
    {
      id: company?.id,
      name: company?.name,
      email: company?.user?.email,
      description: company?.description,
      addressId: company?.address?.id,
      address: company?.address?.address,
      contactNumber: company?.address?.contactNumber,
      availabilityId: company?.availability?.id,
      shopOpen: company?.availability?.startTime,
      shopClose: company?.availability?.endTime,
      category: company?.companyCategory?.category?.name,
    },
    {
      assert: false,
      stripUnknown: true,
    }
  );

  return {
    initialValues,
    UpdateTraderSchema,
    handleSubmit,
    loading,
    error,
  };
};
