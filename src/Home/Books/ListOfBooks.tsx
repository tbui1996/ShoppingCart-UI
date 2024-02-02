import { List, Spinner, Tr, Th, Td, Table, useDisclosure } from "@chakra-ui/react";
import useGetAllBooks from "../../queries/getAllBooks";
import ListBookRow
 from "./ListBookRow";
 import {useRecoilValue} from 'recoil';
import { authorSearch, genreSearch, titleSearch } from "../../atom/store";
import useAddToCart from "../../mutations/useAddToCart";
import usePatchBook from "../../mutations/usePatchBook";

const ListOfBooks: React.FC =() => {
    const title = useRecoilValue(titleSearch);
    const author = useRecoilValue(authorSearch);
    const genre = useRecoilValue(genreSearch);
    let {data: bookDetails, isError, isFetching} = useGetAllBooks(title, author, genre);
    const { mutate: putToCart } = useAddToCart();
    const { mutate: patchBook } = usePatchBook();
    const {isOpen, onOpen, onClose } = useDisclosure()


    console.log('what is bookdetails: ', bookDetails)

    if (isError) {
        bookDetails = []
    }

return(
   <>
   {isFetching ? <Spinner color='red.500' size='xl' /> : 
   <List>
        <Table>
            <Th>
                <Tr>
                    <Td>Edit</Td>
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
                        book={book}
                        onClick={(book) => {
                            putToCart({
                                bookId: book.ID
                            });
                        } }
                        key={index}
                        ID={book.ID}
                        title={book.title}
                        description={book.description}
                        author={book.author}
                        price={book.price}
                        genre={book.genre} 
                        CreatedAt={book.CreatedAt} 
                        UpdatedAt={book.UpdatedAt} 
                        DeletedAt={book.DeletedAt}                    
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