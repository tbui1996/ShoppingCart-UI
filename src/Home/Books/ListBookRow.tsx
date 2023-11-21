import React from 'react';
import { Table, TableContainer, Tbody, Td, Thead, Tr, Button } from '@chakra-ui/react';
import { ListBookDetail } from '../../types';


const ListBookRow: React.FC<ListBookDetail> =({
handleClick,
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
                <Button onClick={handleClick}>Click</Button>
            </Tr>
        </Tbody>
        </>
    )
}

export default ListBookRow;