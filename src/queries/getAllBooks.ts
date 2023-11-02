import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axiosInstance from '../network';
import { BookDetails } from './getBooks';
//title
//author
//description
//price 3.99 i.e 4


export const useGetAllBookKey = 'get-all-book'


const useGetAllBooks = () => {
    useQuery(
        useGetAllBookKey,
        async () => 
        (await axiosInstance.get<{result: BookDetails[]| undefined}>(`/books`)).data,
        {
            enabled:true
        }
    )
}

export default useGetAllBooks;