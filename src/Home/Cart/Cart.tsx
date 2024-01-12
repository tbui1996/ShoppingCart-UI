import { List, Tr, Th, Td, Table } from "@chakra-ui/react";
import useGetShoppingCart from "../../queries/getShoppingCart";
import CartRow from "./CartRow";
import { CartDetail } from "../../types";
import useRemoveFromCart from "../../mutations/useRemoveFromCart";


const Cart: React.FC = () => {
    const {data: shoppingCart} = useGetShoppingCart();
    console.log('what is shippoingcart: ', shoppingCart)
    if(shoppingCart?.books){
        console.log('what is shippoingcart: ', shoppingCart.books)

    }

    const { mutate: removeFromCart, isLoading: isMutating} = useRemoveFromCart()


return(
   <>
   <List>
        <Table>
            <Th>
                <Tr>
                    <Td>books</Td>
                </Tr>
                {
                    shoppingCart && shoppingCart.books && shoppingCart.books.map((book, index:number) =>(
                        <CartRow 
                            key={index}
                            book={book}
                            onClick={(book) => {
                                console.log('is this hit: ', book.ID)
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