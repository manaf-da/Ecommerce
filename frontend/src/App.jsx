import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import WishLists from "./pages/WishLists";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CompareProducts from "./pages/CompareProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import PrivatePolicy from "./pages/PrivatePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="product/:id" element={<Product />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="blog/:id" element={<Blog />}></Route>
            <Route path="compareProducts" element={<CompareProducts />}></Route>
            <Route path="wishList" element={<WishLists />}></Route>
            <Route path="login" element={<SignIn />}></Route>
            <Route path="register" element={<SignUp />}></Route>
            <Route path="forgetPassword" element={<ForgetPassword />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>
            <Route path="privatePolicy" element={<PrivatePolicy />}></Route>
            <Route path="shippingPolicy" element={<ShippingPolicy />}></Route>
            <Route path="refundPolicy" element={<refundPolicy />}></Route>
            <Route
              path="termsandconditions"
              element={<TermsAndConditions />}
            ></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  s;
};

export default App;
