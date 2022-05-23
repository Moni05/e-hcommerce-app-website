import { Link } from "react-router-dom";
import "./CategoryItem.css";


const CategoryItem = ({item}) =>{
    return(
        <div className="category-wrapper col-md-4">
            <Link to={`/products/${item}`}>
              <h4 className="text-center">{item}</h4>
            </Link>
        </div>
    )
}

export default CategoryItem;