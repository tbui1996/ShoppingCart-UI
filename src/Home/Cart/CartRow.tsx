import React from 'react';
import { CartDetail } from "../../types";
import { Tbody, Td, Tr, Button } from '@chakra-ui/react';
import SingleCart from './SingleCartRow';
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
                 <SingleCart
                    book={book}
                 />
                ))
                }
            </Tr>
        </Tbody>
    </>
)
}


export default CartRow;