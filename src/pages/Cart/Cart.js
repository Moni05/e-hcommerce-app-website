import { useEffect } from "react";
import { getCart } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () =>{

    const dispatch = useDispatch();
    const username = localStorage.getItem("name");
    const userLogged = useSelector((state) => state.user.allUsers.find((item) => item.username === username));
    const cart = useSelector((state) => state.cart.products);
    console.log(cart);
    
    const products = cart.map((item) => item.products);


    useEffect(() => {
        getCart(dispatch, userLogged.id);

    },[dispatch, cart]);

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="container-fluid carts d-flex flex-wrap row">
                {products.map((item)=>{
                    return (
                        item.map((i, index="a")=>{
                            return(
                            <CartItem productId={i.productId} quantity={i.quantity} key={index} />
                        )
                    }))
                })}
            </div>
        </div>
        </>
    )

}

export default Cart;