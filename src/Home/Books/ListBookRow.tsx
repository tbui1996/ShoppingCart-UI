import React from 'react';
import { Tbody, Td, Tr, Button } from '@chakra-ui/react';
import { ListBookDetail } from '../../types';


const ListBookRow: React.FC<ListBookDetail> =({
book,
onClick,
key,
ID,
title,
author,
description,
price,
genre
}) => {
    return (
        <>
        <Tbody>
            <Tr>
                <Td>{title}</Td>
                <Td>{description}</Td>
                <Td>{author}</Td>
                <Td>{price}</Td>
                <Td>{genre}</Td>
                <Td>
                 <Button onClick={() => onClick(book)}>Add To Cart</Button>
                </Td>
            </Tr>
        </Tbody>
        </>
    )
}

export default ListBookRow;