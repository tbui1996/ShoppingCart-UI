import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';
import axiosInstance from '../network';
import { ListBookDetail } from '../types';


export const useGetAllBookKey = 'get-all-book'

const useGetAllBooks = (title: string, author: string, genre: string,
  options: UseQueryOptions<ListBookDetail[], string> = {}
   ): UseQueryResult<ListBookDetail[], string> => 
   useQuery<ListBookDetail[], string>(
    useGetAllBookKey,
   async () =>
  (await axiosInstance.get<ListBookDetail[]>(`/api/books/${title}/${author}/${genre}/`
  ))
  .data,
  
  {
    ...options,
    enabled: Boolean(title) && Boolean(author) && Boolean(genre) && (options.enabled == null || options.enabled)
  }
 
  
  );

export default useGetAllBooks;
