import { useEffect } from "react";
import Product from "../Product/Product";
import { getProducts } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Products = ({category}) => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products)

    useEffect(() =>{
        getProducts(dispatch, category);
    },[dispatch])

    return(
        <div className="container">
            <div className="products d-flex flex-wrap row">
                {products.map((item)=> <Product item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default Products;