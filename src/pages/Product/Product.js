import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/apiCalls";
import Navbar from "../../components/Navbar/Navbar";
import "./Product.css";

const ProductPage = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const dates = new Date();
    var date = dates.toISOString().split('T')[0];

    const product = useSelector((state) => state.product.products.find((product) => product.id == id));
    const productId = product.id;
    const username = localStorage.getItem("name");
    const userLogged = useSelector((state) => state.user.allUsers.find((item) => item.username === username));
    const userId = userLogged.id;

    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        addProductToCart( dispatch, { userId, date, productId, quantity })
    };

    return(
        <>
        <Navbar />
        <div className="container">
            <div className="product-detail">
                <div className="product-item d-flex p-5">
                    <div className="product-img-wrapper">
                        <img src={product.image} className="product-image"/>
                    </div>
                    <div className="product-info-wrapper">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <span>${product.price}</span>
                        <div className="product-action-wrapper d-flex align-items-center justify-content-between">
                            <div className="quantity-wrapper d-flex align-items-center">
                                <button onClick={() => handleQuantity("dec")} className="btn btn-danger">-</button>
                                <div className="quantity-display">{quantity}</div>
                                <button onClick={() => handleQuantity("inc")} className="btn btn-success">+</button>
                            </div>
                            <button className="cart-action btn btn-primary" onClick={handleClick}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default ProductPage;
