import { useSelector } from "react-redux";
import "./CartItem.css";

const CartItem = ({productId, quantity}) =>{

    const productItems = useSelector((state => state.product.products.find((item)=> item.id===productId)));
    console.log(productItems)

    return(
    <div className="cart-item col-md-4">
        <div className="cartImg"><img src={productItems.image} /></div>
        <div className="cart-title">{productItems.title}</div>
        <div className="cart-quantity">Quantity: {quantity}</div>
    </div>
    )
}

export default CartItem;