import { useQuery } from 'react-query';
import axiosInstance from '../network';
//title
//author
//description
//price 3.99 i.e 4
export interface BookDetails {
 title: string;
 author: string;
 description: string;
 price: number;
}

export const useGetBookKey = 'get-book'


//thre input n title, author, or genre. 
const useGetBooks = (title: string, author: string, genre: string) => 
    useQuery(
        [useGetBookKey, title, author, genre],
        async () => 
        (await axiosInstance.get<{result: BookDetails[]}>(`/api/books?title=${title}?genre=${genre}?author=${author}`)).data.result,
        {
            enabled:!!title && !!author && !!genre
        }
    )


export default useGetBooks;