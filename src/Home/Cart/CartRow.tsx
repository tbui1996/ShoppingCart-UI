import React from 'react';
import { Book, CartDetail } from "../../types";
import { Tbody, Td, Tr, Button } from '@chakra-ui/react';

const CartRow: React.FC<CartDetail> = ({
book,
onClick
}) => {
    console.log('inside cartrow comp: ', book.title)
   return (
    <>
    <Tr>
        <Td>
            {book.title}
        </Td>
        <Td>
            {book.ID}
        </Td>
        <Td>
        <Button onClick={() => onClick(book)}>Remove From Cart</Button>

        </Td>
    </Tr>
    
    </>
)
}


export default CartRow;