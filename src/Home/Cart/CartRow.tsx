import React from 'react';
import { CartDetail } from "../../types";
import {  Td, Tr, Button } from '@chakra-ui/react';

const CartRow: React.FC<CartDetail> = ({
book,
onClick
}) => {
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