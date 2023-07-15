import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import FoodDetails from "./components/FoodItems/FoodDetails";
import Delivery from "./components/FoodItems/Delivery/Delivery";
import Home from "./components/HomePage/Home";
import CheckoutPage from "./components/OrderCheckout/CheckoutPage";
import Services from "./components/HomePage/Services";
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

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/food/Delivery" element={<Delivery />} />

        <Route path="/food/checkout" element={<CheckoutPage />} />

        <Route path="/login" element={<HandleAuthentication />} />
        <Route path="/about-us/services/:id" element={<Services />} />
        <Route path="/footer/terms" element={<Terms />} />
        <Route path="/footer/condition" element={<Condition />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
