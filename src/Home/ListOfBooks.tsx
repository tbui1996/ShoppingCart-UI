import { List, Box, Spinner, Tr, Th, Td, Table } from "@chakra-ui/react";
import useGetAllBooks, { ListBookDetail } from "../queries/getAllBooks";
import ListBookRow
 from "./ListBookRow";
 import {useRecoilValue} from 'recoil';
import { authorSearch, genreSearch, titleSearch } from "../atom/store";

const ListOfBooks: React.FC =() => {
    const title = useRecoilValue(titleSearch);
    const author = useRecoilValue(authorSearch);
    const genre = useRecoilValue(genreSearch);
    let {data: bookDetails, isError, isFetching} = useGetAllBooks(title, author, genre);
    console.log('what is ttile: ', title)
    console.log('what is atuhor: ', author)
    console.log('what is genre: ', genre)

    if (isError) {
        bookDetails = []
    }
    
    const handleClick = (book: ListBookDetail) => {
        console.log('you are the worst!')
        console.log('the worst: ', book.author)
    }
return(
   <>
   {isFetching ? <Spinner color='red.500' size='xl' /> : 
   <List>
        <Table>
            <Th>
                <Tr>
                    <Td>Title</Td>
                    <Td>Description</Td>
                    <Td>Author</Td>
                    <Td>Price</Td>
                    <Td>Genre</Td>
                    <Td>Add To Cart</Td>
                </Tr>
                {
                bookDetails && bookDetails.map((book, index: number) => (
                    <ListBookRow 
                        handleClick={() => handleClick(book)}
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
            </Th>
            
        </Table>
    </List>
   }
   </>
    
    
)

}

export default ListOfBooks;