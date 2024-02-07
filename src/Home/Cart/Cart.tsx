import { List, Tr, Th, Td, Table } from "@chakra-ui/react";
import useGetShoppingCart from "../../queries/getShoppingCart";
import CartRow from "./CartRow";
import useRemoveFromCart from "../../mutations/useRemoveFromCart";


const Cart: React.FC = () => {
    const {data: shoppingCart} = useGetShoppingCart();

    const { mutate: removeFromCart } = useRemoveFromCart()


return(
   <>
   <List>
        <Table>
            <Th>
                <Tr>
                    <Td>Books</Td>
                    <Td>Book ID</Td>
                </Tr>
                {
                    shoppingCart && shoppingCart.books && shoppingCart.books.map((book, index:number) =>(
                        <CartRow 
                            key={index}
                            book={book}
                            onClick={(book) => {
                                removeFromCart({
                                    id: book.ID
                                })
                            }}
                        />
                    ))
                }
                
            </Th>
        </Table>
    </List>
   </>
    
    
    )
}

export default Cart;