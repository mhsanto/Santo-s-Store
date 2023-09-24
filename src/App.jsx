import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/Products/ProductDetails";
import Delivery from "./components/Products/Delivery/Delivery";
import Home from "./components/About_Us/Home";
import CheckoutPage from "./components/OrderCheckout/CheckoutPage";
import Terms from "./components/Footer/Terms";
import Condition from "./components/Footer/Condition";
import HandleAuthentication from "./components/LoginPage/HandleAuthentication";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/product/Delivery" element={<Delivery />} />

        <Route path="/product/checkout" element={<CheckoutPage />} />

        <Route path="/login" element={<HandleAuthentication />} />

        <Route path="/footer/terms" element={<Terms />} />

        <Route path="/footer/condition" element={<Condition />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
