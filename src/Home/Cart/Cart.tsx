import { List, Tr, Th, Td, Table } from "@chakra-ui/react";
import useGetShoppingCart from "../../queries/getShoppingCart";
import CartRow from "./CartRow";
import { CartDetail } from "../../types";


const Cart: React.FC = () => {
    const {data: shoppingCart} = useGetShoppingCart();
    console.log('what is shopping cart bruv: ', shoppingCart)
    
    const clickButton = (book: CartDetail) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
       

    }
return(
   <>
   <List>
        <Table>
            <Th>
                <Tr>
                    <Td>Book</Td>
                </Tr>
                {
                    shoppingCart && (
                        <CartRow 
                            handleClick={() => clickButton}
                            books={shoppingCart.books}
                        />
                    )
                }
                
            </Th>
            
        </Table>
    </List>
   </>
    
    
    )
}

export default Cart;