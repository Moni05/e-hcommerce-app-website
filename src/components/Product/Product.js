import "./Product.css";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";

const Product = ({item}) =>{

    const dispatch = useDispatch();
    const productId = item.id;
    const username = localStorage.getItem("name");
    const userLogged = useSelector((state) => state.user.allUsers.find((item) => item.username === username));
    const userId = userLogged.id;
    const dates= new Date();
    var date = dates.toISOString().split('T')[0];

    const quantity=1;

    const handleClick = () => {
        addProductToCart(dispatch, { userId, date, productId, quantity })
    };

    return(
        <div className="product col-md-4">
            <Link to={`/product/${item.id}`}>
                <div className="productImg">
                    <img src={item.image}/>
                </div>
            </Link>
            <div className="product-title"><p>{item.title}</p></div>
            <div className="product-price  d-flex align-items-center justify-content-between">
                <p>${item.price}</p>
                <button className="btn-cart btn btn-primary" onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;