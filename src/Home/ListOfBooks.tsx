import { List, Box, Text, Button } from "@chakra-ui/react";
import useGetAllBooks from "../queries/getAllBooks";
import ListBookRow
 from "./ListBookRow";
 import {useRecoilValue} from 'recoil';
import { authorSearch, genreSearch, titleSearch } from "../atom/store";

const ListOfBooks: React.FC =() => {
    let title = useRecoilValue(titleSearch);
    let author = useRecoilValue(authorSearch);
    let genre = useRecoilValue(genreSearch);
    let {data: bookDetails, isError, isLoading} = useGetAllBooks(title, author, genre);

    if (isError) {
        bookDetails = []
    }
    if (isLoading) {
        return <span>Loading...</span>
    }
    
    const handleClick = () => {
        console.log('you are the worst!')
    }
return(
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
)
}

export default ListOfBooks;