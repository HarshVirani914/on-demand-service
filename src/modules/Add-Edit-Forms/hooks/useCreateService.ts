import { useCreateServiceMutation } from "@/generated/graphql";
import toast from "react-hot-toast";

export const useCreateService = () => {
  const [createService, { data, loading, error }] = useCreateServiceMutation({
    onCompleted(data) {
      toast.success('Service created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  })

  const handleSubmit = (input: any) => {
    createService({
      variables: {
        service: input
      }
    })
  }


  return {
    handleSubmit,
    loading,
    error
  };
}