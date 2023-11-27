import React from 'react';
import { SingleCartDetail } from "../../types";
import { Tr, Td, Button } from '@chakra-ui/react';

const SingleCart: React.FC<SingleCartDetail> = ({
    book
    })=> {
    return (
        <>
        <Tr>
            <Td>
                {book.title}
            </Td>
            <Td>
            <Button>Remove From Cart</Button>

            </Td>
        </Tr>
        
        </>
    )
}


export default SingleCart