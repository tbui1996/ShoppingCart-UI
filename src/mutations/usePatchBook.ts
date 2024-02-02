import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
    useQueryClient
} from 'react-query';
import { AxiosResponse } from 'axios';
import axiosInstance from '../network';  
import { getUseShoppingCartKey } from '../queries/getShoppingCart';
import { PatchBookRequest } from '../types';

const usePatchBook = (
    options: UseMutationOptions<
      AxiosResponse,
      string,
      PatchBookRequest
    > = {}
  ): UseMutationResult<AxiosResponse, string, PatchBookRequest> => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, string, PatchBookRequest>(
      (request) =>
        axiosInstance.put(`/api/book/${request.ID}`, {
          title: request.title,
          author: request.author,
          description: request.description,
          genre: request.genre
        }),
      {
        ...options,
        onSuccess: async (data, variables, context) => {
          options.onSuccess?.(data, variables, context);
          queryClient.invalidateQueries(getUseShoppingCartKey);
        }
      }
    );
  };

export default usePatchBook