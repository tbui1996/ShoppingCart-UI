import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
    useQueryClient
} from 'react-query';
import { AxiosResponse } from 'axios';
import axiosInstance from '../network';  
import { AddToCart } from '../types';
import { useGetAllBookKey } from '../queries/getAllBooks';

const useAddToCart = (
    options: UseMutationOptions<
      AxiosResponse,
      string,
      AddToCart
    > = {}
  ): UseMutationResult<AxiosResponse, string, AddToCart> => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, string, AddToCart>(
      (request: AddToCart) =>
        axiosInstance.post('/api/cart', request),
      {
        ...options,
        onSuccess: async (data, variables, context) => {
          options.onSuccess?.(data, variables, context);
          await queryClient.invalidateQueries(useGetAllBookKey);
        }
      }
    );
};
  
  export default useAddToCart;
  