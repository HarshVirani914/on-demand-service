import { useServicesQuery } from '@/generated/graphql';

export const useServices = (filters: { companyId?: any, slug?: any }) => {
  const { data } = useServicesQuery({
    variables: {
      filter: {
        or: [
          {
            companyId: {
              equalTo: filters.companyId || null,
            },
          },
          {
            category: {
              slug: {
                equalTo: filters.slug || null,
              },
            }
          }
        ]
      },
    },
  });

  return {
    services: data?.services?.nodes || [],
  };
};
