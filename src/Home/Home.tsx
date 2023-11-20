import { SimpleGrid, Box } from "@chakra-ui/react";
import Form from "./Form";
import ListOfBooks from "./ListOfBooks";

const Home: React.FC =() => {


    return(
        <SimpleGrid columns={3} spacing={10}>
            <Box >
                <Form />
            </Box>
            <Box >
                <ListOfBooks />
            </Box>
            <Box></Box>
            
        </SimpleGrid>
    )
}


export default Home;