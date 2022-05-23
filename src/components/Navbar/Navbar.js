import { Link } from "react-router-dom";
import "./Navbar.css";
import {  useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/apiCalls";

const Navbar = () =>{

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        logoutUser(dispatch);
    }
    return(
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
            <Link className="navbar-brand site-name" to="/">EasyBuy</Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">All Products</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="#" onClick={handleClick}>Logout</Link>
                    </li>
                </ul>
      </div>
      </div>
    </nav>
    )
}

export default Navbar;