import Products from "../components/Products/Products";
import Category from "../components/Category/Category";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/apiCalls"; 

const Home =() => {

    const dispatch = useDispatch();

    useEffect(()=>{
        getAllUsers(dispatch)
    },[]);

    return(
        <>
        <Navbar />
        <Category />
        <Products />
        </>
    )

}

export default Home;