import { List, Tr, Th, Td, Table } from "@chakra-ui/react";
import useGetShoppingCart from "../../queries/getShoppingCart";
import CartRow from "./CartRow";
import { CartDetail, ListBookDetail } from "../../types";


const Cart: React.FC = () => {
    let {data: shoppingCart} = useGetShoppingCart();

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
                    {
                        shoppingCart && shoppingCart.map((cart, index: number) => (
                            
                            <CartRow 
                                handleClick={() => clickButton}
                                title={cart.title}
                            />
                        ))
                    }
                </Tr>
            </Th>
            
        </Table>
    </List>
   </>
    
    
    )
}

export default Cart;