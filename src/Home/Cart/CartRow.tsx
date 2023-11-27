import React from 'react';
import { CartDetail } from "../../types";
import { Tbody, Td, Tr, Button } from '@chakra-ui/react';

const CartRow: React.FC<CartDetail> = ({
handleClick,
books
}) => {
    // console.log('do i get in here: ', books)
    
return (
    <>
        <Tbody>
            <Tr>
                {books && books.map((book, index: number) => (
                 <Td>
                    {book.title}
                 </Td>
                 
                ))
                }
                <Td>
                  <Button onClick={handleClick}>Remove From Cart</Button>
                 </Td>
            </Tr>
        </Tbody>
    </>
)
}


export default CartRow;