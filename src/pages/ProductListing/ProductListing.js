import Products from "../../components/Products/Products";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const ProductListing = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const categoryTitle= category.split("%20");

    return(
        <>
        <Navbar />
        <div className="container">
            <h1 className="text-uppercase">{categoryTitle}</h1>
            <Products category={category} />
        </div>
        </>
    )

}

export default ProductListing;