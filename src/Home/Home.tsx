import { SimpleGrid, Box } from "@chakra-ui/react";
import Form from "./Form/Form";
import ListOfBooks from "./Books/ListOfBooks";
import Cart from "./Cart/Cart";

const Home: React.FC =() => {


    return(
        <SimpleGrid columns={4} spacing={10}>
            <Box >
                <Form />
            </Box>
            <Box >
                <ListOfBooks />
            </Box>
            <Box>
               
            </Box>
            <Box>
            <Cart />
            </Box>
            
        </SimpleGrid>
    )
}


export default Home;