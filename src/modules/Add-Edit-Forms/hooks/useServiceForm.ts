import { useCreateServiceMutation, useCurrentUserQuery, useUpdateServiceMutation } from "@/generated/graphql";
import toast from "react-hot-toast";
import { serviceSchema } from "../schema";
import { useService } from "./useService";

export const useServiceForm = (id?: string) => {
  const { service } = useService(id);

  const { data } = useCurrentUserQuery();

  const [createService, { loading, error }] = useCreateServiceMutation({
    onCompleted(data) {
      toast.success('Service created successfully');
    },
    onError(error) {
      toast.error('Error creating service ' + error.message);
    },
  });

  const [updateService, { loading: updateLoading, error: updateError }] = useUpdateServiceMutation({
    onCompleted(data) {
      toast.success('Service updated successfully');
    },
    onError(error) {
      toast.error('Error updating service ' + error.message);
    },
  });

  const handleSubmit = (input: any) => {
    const { id, ...sanitizedInput } = serviceSchema.cast(input, {
      assert: false,
      stripUnknown: true
    });

    if (id) {
      return updateService({
        variables: {
          id,
          service: sanitizedInput
        }
      });
    }

    return createService({
      variables: {
        service: sanitizedInput
      }
    });
  }

  console.log("data", data)

  const initialValues = serviceSchema.cast({ service, companyId: data?.currentUser?.company?.id }, {
    assert: false,
    stripUnknown: true
  });

  console.log("initialValues", initialValues)

  return {
    initialValues,
    validationSchema: serviceSchema,
    handleSubmit,
    loading: loading || updateLoading,
    error: error || updateError
  }
}