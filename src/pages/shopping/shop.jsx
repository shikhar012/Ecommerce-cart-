import { PRODUCT } from "../../product";
import Product from "./product";
import "./shop.css"
const Shop = () => {
    return (  
         <div className="shop">
            <div className="shoptitle">
               <h1 style={{textAlign:"center"}}>INDIA MART</h1>
            </div>
       <div className="products">
            {PRODUCT.map((data)=>(
         <Product data={data} />
            ))}
       </div>
         
         </div>
    );
}
 
export default Shop;
