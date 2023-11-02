import { Grid, GridItem } from "@chakra-ui/react";
import Form from "./Form";

const Home: React.FC =() => {


    return(
        <Grid>
            <GridItem colSpan={2}>
                <Form />
            </GridItem>

            <GridItem colSpan={2}>

            </GridItem>
        </Grid>
    )
}


export default Home;