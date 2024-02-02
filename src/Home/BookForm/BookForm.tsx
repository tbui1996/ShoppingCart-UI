import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"


const BookForm: React.FC =() => {
    const {isOpen, onOpen, onClose } = useDisclosure()
return (
    <>
        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>Hello </p>
                            </ModalBody>

                    </ModalContent>
    </>
)
}

export default BookForm