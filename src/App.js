import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/Product/Product';
import ProductListing from './pages/ProductListing/ProductListing';
import Allproducts from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={ !user ? <Login/> : <Navigate to="/" />} />
        <Route path="/products" element={user ? <Allproducts /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={user ? <ProductPage /> : <Navigate to="/login" />} />
        <Route path="/products/:category" element={user ? <ProductListing /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
