import { useUpdateServiceMutation } from "@/generated/graphql";
import toast from "react-hot-toast";

export const useUpdateService = () => {
  const [updateService, { data, loading, error }] = useUpdateServiceMutation({
    onCompleted(data) {
      toast.success('Service created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  })

  const handleSubmit = (input: any) => {
    const { id, ...service } = input;
    updateService({
      variables: {
        id,
        service
      }
    })
  }

  return {
    handleSubmit,
    loading,
    error
  };
}