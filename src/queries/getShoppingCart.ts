import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';
import axiosInstance from '../network';
import { ListBookDetail } from '../types';


export const useGetShoppingCartKey = 'get-all-book'

const useGetShoppingCart = (options: UseQueryOptions<ListBookDetail[], string> = {}
   ): UseQueryResult<ListBookDetail[], string> => 
   useQuery<ListBookDetail[], string>(
    useGetShoppingCartKey,
   async () =>
  (await axiosInstance.get<ListBookDetail[]>(`/api/cart`))
  .data,
  
  {
    ...options,
    enabled: (options.enabled == null || options.enabled)
  }
  );

export default useGetShoppingCart;
