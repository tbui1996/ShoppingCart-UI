import {
    useMutation,
    UseMutationOptions,
    useQueryClient
} from 'react-query';
import { AxiosError } from 'axios';
import axiosInstance from '../network';  
import { PutCartPayload, SuccessServiceResult } from '../types';
import { getUseShoppingCartKey } from '../queries/getShoppingCart';
import { useGetAllBookKey } from '../queries/getAllBooks';

const useAddToCart = (
  options: UseMutationOptions<number, AxiosError, PutCartPayload> ={}
) => {
  const queryClient = useQueryClient();
  return useMutation(
    async(params: PutCartPayload) => {
      const { bookId } = params
      const result = await axiosInstance.put<SuccessServiceResult<number>>(
        `/api/cart/${bookId}`
      );

      return result.data;
    },
    {
      onSuccess: async (response, params, context) => {
        const {result: id } = response;
        options.onSuccess?.(id, params, context);
        // queryClient.invalidateQueries(useGetAllBookKey);
        queryClient.invalidateQueries(getUseShoppingCartKey)
      }
    }
  );
};

export default useAddToCart