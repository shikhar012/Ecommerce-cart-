const  Cartitem= (probs) => {
    const {id, productName,price,productImage} = probs.data;
    
    return ( 
    <div className="cartItem">
        <img src={productImage} alt="" />
<div className="description">
<p>
<b>{productName}</b>
</p>
<p>
    RS {price}
</p>
</div>
    </div>


     );
}
 
export default Cartitem;