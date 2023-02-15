import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users"
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<div>Select feature or new product</div>} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes >
    </>
  );
}

export default App;