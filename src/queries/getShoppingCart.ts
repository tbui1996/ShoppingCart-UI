import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';
import axiosInstance from '../network';
import { Cart } from '../types';



export const getUseShoppingCartKey = 'get-shopping-cart'

const useGetShoppingCart = (options: UseQueryOptions<Cart, string> = {}
   ): UseQueryResult<Cart, string> => 
   useQuery<Cart, string>(
    getUseShoppingCartKey,
    async () => {
      const response = await axiosInstance.get<Cart>('/api/cart');
      return response.data;  // Access the .data property to get the actual data
    },
  {
    ...options,
    enabled: (options.enabled == null || options.enabled)
  }
  );

export default useGetShoppingCart;
