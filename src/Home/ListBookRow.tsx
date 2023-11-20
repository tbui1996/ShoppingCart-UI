import React from 'react';
import { Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react';
import { ListBookDetail } from '../queries/getAllBooks';



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
        <TableContainer>
            <Table>
                <Thead>Book: {ID}</Thead>
                    <Tbody>
                        <Tr>
                            <Td>{title}</Td>
                            <Td>{description}</Td>
                            <Td>{author}</Td>
                            <Td>{price}</Td>
                            <Td>{genre}</Td>
                        </Tr>
                    </Tbody>
                
            </Table>
        </TableContainer>
        
        </>
    )

}


export default ListBookRow;