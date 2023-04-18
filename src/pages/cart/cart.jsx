import "./cart.css"
import { useContext } from "react";
import { ShopContext } from "../../context/context";
import { PRODUCT } from "../../product";
import Cartitem from "./cartitem";
const Cart = () => {
    const {addToCart,cartItems} =useContext(ShopContext)
 
    return ( 
        <div className="cart">
                <div>
                <h1>Your cart Item</h1>
                </div>
                <div className="cartItems">
                      {PRODUCT.map((product)=>{
                      if(cartItems[product.id]!==0)
                      {
                        return <Cartitem data = {product}/>
                      }
                       } )

                      }
                </div>
        </div>
     );
}
 
export default Cart;