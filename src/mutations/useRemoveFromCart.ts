import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
    useQueryClient
  } from 'react-query';
import { AxiosResponse } from 'axios';
import axiosInstance from '../network';
import { RemoveFromCart } from '../types';
import { useGetAllBookKey } from '../queries/getAllBooks';
import { getUseShoppingCartKey } from '../queries/getShoppingCart';

  
  const useRemoveFromCart = (
    options: UseMutationOptions<
      AxiosResponse,
      string,
      RemoveFromCart
    > = {}
  ): UseMutationResult<AxiosResponse, string, RemoveFromCart> => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, string, RemoveFromCart>(
      (request) => axiosInstance.delete(`/api/cart/${request.id}`),
      {
        ...options,
        onSuccess: async (data, variables, context) => {
          options.onSuccess?.(data, variables, context);
          queryClient.invalidateQueries(useGetAllBookKey);
          queryClient.invalidateQueries(getUseShoppingCartKey);
        }
      }
    );
  };
  
  export default useRemoveFromCart;
  