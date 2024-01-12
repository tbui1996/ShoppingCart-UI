import {
    useMutation,
    UseMutationOptions,
    useQueryClient
} from 'react-query';
import { AxiosError } from 'axios';
import axiosInstance from '../network';  
import { PutCartPayload, SuccessServiceResult } from '../types';
import { getUseShoppingCartKey } from '../queries/getShoppingCart';

const useAddToCart = (
  options: UseMutationOptions<number, AxiosError, PutCartPayload> ={}
) => {
  const queryClient = useQueryClient();
  return useMutation(
    async(params: PutCartPayload) => {
      const { bookId } = params
      const result = await axiosInstance.post<SuccessServiceResult<number>>(
        `/api/cart/${bookId}`
      );
        console.log('does bookID get passed: ', bookId)

      return result.data;
    },
    {
      onSuccess: async (response, params, context) => {
        const {result: id } = response;
        options.onSuccess?.(id, params, context);
        queryClient.invalidateQueries(getUseShoppingCartKey)
      }
    }
  );
};

export default useAddToCart