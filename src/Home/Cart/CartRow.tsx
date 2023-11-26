import React from 'react';
import { CartDetail } from "../../types";
import { Tbody, Td, Tr, Button } from '@chakra-ui/react';

const CartRow: React.FC<CartDetail> = ({
handleClick,
title
}) => {
return (
    <>
        <Tbody>
            <Tr>
                <Td>{title}</Td>
                <Td>
                 <Button onClick={handleClick}>Remove From Cart</Button>
                </Td>
            </Tr>
        </Tbody>
    </>
)
}


export default CartRow;