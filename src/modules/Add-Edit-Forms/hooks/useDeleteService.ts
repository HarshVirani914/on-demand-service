import { useDeleteServiceMutation } from '@/generated/graphql';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useDeleteService = () => {
  const router = useRouter();
  const [deleteService, { data, loading, error }] = useDeleteServiceMutation({
    onCompleted(data) {
      toast.success('Service deleted');
      router.refresh();
    },
    onError(error) {
      toast.error('error Deleting Service ' + error.message);
    },
  });

  const handleDelete = (id: string) => {
    deleteService({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  return {
    handleDelete,
    data,
    loading,
    error,
  };
};
