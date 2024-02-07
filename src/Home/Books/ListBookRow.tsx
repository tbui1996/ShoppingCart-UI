import React, { useRef, useState } from 'react';
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
    const [titleValue, setTitleValue] = useState(title);
    const [authorValue, setAuthorValue] = useState(author);
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [genreValue, setGenreValue] = useState(genre);

    const handleTitleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setTitleValue(event.target.value)
    const handleAuthorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setAuthorValue(event.target.value)
    const handleDescriptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setDescriptionValue(event.target.value)
    const handleGenreChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setGenreValue(event.target.value)


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
                                    <Input 
                                        ref={initialRef} 
                                        value={titleValue} 
                                        onChange={handleTitleChange}
                                        placeholder={book.title} 
                                    />
                                    <FormLabel>Edit Description</FormLabel>
                                    <Input 
                                        ref={initialRef} 
                                        value={descriptionValue}
                                        onChange={handleDescriptionChange}
                                        placeholder={book.description} 
                                    />
                                    <FormLabel>Edit Author</FormLabel>
                                    <Input 
                                        ref={initialRef} 
                                        value={authorValue}
                                        onChange={handleAuthorChange}
                                        placeholder={book.author} />
                                    <FormLabel>Edit Genre</FormLabel>
                                    <Input 
                                        ref={initialRef} 
                                        value={genreValue}
                                        onChange={handleGenreChange}
                                        placeholder={book.genre} 
                                    />
                                </FormControl>
                            </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                            <Button variant='ghost' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                patchBook({
                                    ID: ID,
                                    title: titleValue,
                                    author: authorValue,
                                    description: descriptionValue,
                                    genre: genreValue
                                    })
                                }}>
                                Submit
                            </Button>
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