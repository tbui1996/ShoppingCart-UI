import React, { useRef } from 'react';
import { 
Tbody, 
Td, 
Tr, 
Button, 
useDisclosure, 
Modal, 
ModalOverlay, 
ModalContent, 
ModalHeader, 
ModalCloseButton, 
ModalBody, 
ModalFooter, 
FormControl, 
FormLabel, 
Input } from '@chakra-ui/react';
import { ListBookDetail } from '../../types';
import usePatchBook from '../../mutations/usePatchBook';


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
    const { mutate: patchBook } = usePatchBook();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    return (
        <>
        <Tbody>
            <Tr>
                <Td>
                    <Button onClick={onOpen}>Edit</Button>
                </Td>
                <Modal 
                initialFocusRef={initialRef}
                isOpen={isOpen} 
                onClose={onClose}>
                    <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Edit Book Information</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <FormControl>
                                    <FormLabel>Edit Title</FormLabel>
                                    <Input ref={initialRef} placeholder={book.title} />
                                    <FormLabel>Edit Description</FormLabel>
                                    <Input ref={initialRef} placeholder={book.description} />
                                    <FormLabel>Edit Author</FormLabel>
                                    <Input ref={initialRef} placeholder={book.author} />
                                    <FormLabel>Edit Genre</FormLabel>
                                    <Input ref={initialRef} placeholder={book.genre} />
                                </FormControl>
                            </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                            <Button variant='ghost' onClick={(book) => {
                            patchBook({
                                ID: ID,
                            })
                        }}>Submit</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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