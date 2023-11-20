import { List, Box, Spinner } from "@chakra-ui/react";
import useGetAllBooks from "../queries/getAllBooks";
import ListBookRow
 from "./ListBookRow";
 import {useRecoilValue} from 'recoil';
import { authorSearch, genreSearch, titleSearch } from "../atom/store";

const ListOfBooks: React.FC =() => {
    const title = useRecoilValue(titleSearch);
    const author = useRecoilValue(authorSearch);
    const genre = useRecoilValue(genreSearch);
    let {data: bookDetails, error, isFetching} = useGetAllBooks(title, author, genre);
    console.log('what is ttile: ', title)
    console.log('what is atuhor: ', author)
    console.log('what is genre: ', genre)
    if (error) {
        bookDetails = []
    }
    if (isFetching) {
        console.log('i AM IN HERE')
        
    }
    
    const handleClick = () => {
        console.log('you are the worst!')
    }
return(
   <>
   {isFetching ? <Spinner color='red.500' size='xl' /> : 
   <List>
   <Box>
       {
           bookDetails && bookDetails.map((book, index: number) => (
               <ListBookRow 
                   handleClick={handleClick}
                   key={index}
                   ID={book.ID}
                   title={book.title}
                   description={book.description}
                   author={book.author}
                   price={book.price} 
                   genre={book.genre}                    
               />        
           ))
       }
   </Box>
</List>
   }
   </>
    
    
)

}

export default ListOfBooks;