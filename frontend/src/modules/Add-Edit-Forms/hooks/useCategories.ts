import { useCategoriesQuery } from '@/generated/graphql';

export const useCategories = (parentId?: string | null) => {
  const { data } = useCategoriesQuery({
    variables: {
      condition: {
        parentId,
      },
    },
  });

  return {
    categories: data?.categories?.nodes || [],
  };
};
