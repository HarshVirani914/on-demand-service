import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import { TOKEN_NAME } from '.';
import { useRouter } from 'next/navigation';
import { useRegisterCompanyMutation } from '@/generated/graphql';
import { TraderRegisterSchema } from '../schema/traderRegisterSchema';

export const useTraderSignUp = () => {
  const [cookies, setCookies, deleteCookies] = useCookies();
  const router = useRouter();

  const [traderSignupMutation, { data, loading, error }] =
    useRegisterCompanyMutation({
      onCompleted(data) {
        deleteCookies(TOKEN_NAME);
        deleteCookies('currentUserId');

        setCookies(TOKEN_NAME, data.registerCompany?.token);
        setCookies('currentUserId', data.registerCompany?.company?.userId);

        toast.success('Signed up in successfully');

        router.replace('/');
      },
      onError(error) {
        toast.error('Error ' + error.message);
      },
    });

  const handleSubmit = (input: any) => {
    const sanitizedInput = TraderRegisterSchema.omit(['confirmPassword']).cast(
      input,
      {
        assert: true,
        stripUnknown: true,
      }
    );

    traderSignupMutation({
      variables: {
        input: sanitizedInput,
      },
    });
  };

  const company = data?.registerCompany?.company;

  const initialValues = TraderRegisterSchema.omit(['confirmPassword']).cast(
    {},
    { assert: false, stripUnknown: true }
  );

  return {
    initialValues,
    TraderRegisterSchema,
    handleSubmit,
    company,
    loading,
    error,
  };
};
