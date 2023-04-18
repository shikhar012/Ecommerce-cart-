import { useContext } from "react";
import { ShopContext } from "../../context/context";
const Product = (probs) => {
    const {id, productName,price,productImage} = probs.data;
    
  const {addToCart,cartItems} =useContext(ShopContext)
    const cartitema = cartItems[id];
    return ( 
        <div className="product">
           <img src={productImage} alt=""/>
           <div className="description"> 
           <p>
            <b>{productName}</b>
           </p>
           <p>
            RS : {price}
           </p>
           </div>
      <button className="addToCartBttn" onClick={()=>addToCart(id)} >
        ADD TO CART {cartitema>0 && <>({cartitema})</>}
      </button>
           
           
           
        </div>
     );
}
 
export default Product;