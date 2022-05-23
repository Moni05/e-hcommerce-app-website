import { loginStart, loginSuccess, loginFailure, logout, getAllUsersStart, getAllUsersSuccess, getAllUsersFalure } from "./userRedux";
import {  getProductStart, getProductSuccess, getProductFailure } from "./productRedux";
import { getCartStart, getCartSuccess, getCartFailure,
addProductStart, addProductSuccess, addProductFailure } from "./cartRedux";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

export const login = async(dispatch, {username, password}) => {

    dispatch(loginStart());

    try{
        const res = await axios.post(`${BASE_URL}auth/login`, {username, password});
        dispatch(loginSuccess(res.data));
        localStorage.setItem("name", username);
    }catch(err){
        dispatch(loginFailure());
    }

}

export const getProducts = async(dispatch, category) => {

    dispatch(getProductStart());

    try{
        const res = await axios.get( category ? `${BASE_URL}products/category/${category}`: `${BASE_URL}products`);;
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure());
    }

}

export const getAllUsers = async(dispatch) => {

    dispatch(getAllUsersStart());

    try{
        const res = await axios.get(`${BASE_URL}users`);
        dispatch(getAllUsersSuccess(res.data));
    }catch(err){
        dispatch(getAllUsersFalure());
    }

}

export const getCart = async(dispatch, userId) => {
    dispatch(getCartStart());
    try{
        const res = await axios.get(`${BASE_URL}carts/user/` +userId);
        dispatch(getCartSuccess(res.data));
    }catch(err){
        dispatch(getCartFailure());
    }
}

export const addProductToCart = async(dispatch, {userId, date, productId, quantity}) => {
    dispatch(addProductStart());
    try{
        const res = await axios.post(`${BASE_URL}carts`, { userId, date, products:[{productId, quantity}]});
        dispatch(addProductSuccess(res.data));
    }catch(err){
        dispatch(addProductFailure());
    }
}

export const logoutUser = async (dispatch) => {
    dispatch(logout());
}