import axios from "axios";
import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const BASE_URL = process.env.REACT_APP_URL;

const Category = () => {

    const[Categories, setCategories] = useState([]);

    useEffect(()=>{
        const getCategory= async()=>{
            const res = await axios.get(`${BASE_URL}products/categories`);
            setCategories(res.data);
        }
        getCategory();
    },[])

    return(
        <div className="container">
            <div className="categories d-flex flex-wrap row">
                {Categories.map((item, i)=> <CategoryItem item={item} key={i} />)}
            </div>
        </div>

    )
}

export default Category;