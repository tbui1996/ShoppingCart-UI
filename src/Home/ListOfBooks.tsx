import { ListItem, Box, Text, Button } from "@chakra-ui/react";
import useGetAllBooks from "../queries/getAllBooks";
import { BookDetails } from "../queries/getBooks";

const ListOfBooks: React.FC =() => {
    const {data: bookDetails} = useGetAllBooks();
    
    const handleClick = () => {

    }
return(
    <ListItem>
        <Box>
            {
                bookDetails && bookDetails.map((book, i) => (
                    <ListBookRow 
                    key={i}
                    title={book.title}
                    description={book.description}
                    price={book.price}
                    />
                    // <Text key={i} onClick={() => {handleClick()}}>
                    //     {book.title} {book.author} {book.description} {book.price}
                    // </Text>
                    // <Button>Add</Button>
                    // <Button>Delete</Button>
                    
                ))
            }
        </Box>
    </ListItem>
)
}

export default ListOfBooks;