import { useServiceQuery } from '@/generated/graphql';

export const useService = (id?: string) => {
  const { data, loading, error } = useServiceQuery({
    variables: {
      id,
    },
    skip: !id,
  });

  return {
    service: data?.service,
    loading,
    error,
  };
};
