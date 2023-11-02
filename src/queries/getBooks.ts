import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axiosInstance from '../network';
//title
//author
//description
//price 3.99 i.e 4
export interface BookDetails {
 title: string;
 author: string;
 description: string;
 price: Int32Array;
}

export const useGetBookKey = 'get-book'

// interface ResultWrapper<T>{
//     result: T;
// }

// const useGetbooks = (options: UseQueryOptions<BookDetails, string> = {}
//     ): UseQueryResult<BookDetails, string> => 
//     useQuery<BookDetails, string> (
//     useGetBookKey,
//     async() => (
//         await axiosInstance.get<<ResultWrapper<BookDetails>>('/books')
//         )).data,
//         options
//     );
//thre input n title, author, or genre.

const useGetBooks = (title: string, author: string, genre: string) => {
    useQuery(
        [useGetBookKey, title, author, genre],
        async () => 
        (await axiosInstance.get<{result: BookDetails}>(`/books?title=${title}?genre=${genre}?author=${author}`)).data.result,
        {
            enabled:!!title && !!author && !!genre
        }
    )
}

export default useGetBooks;