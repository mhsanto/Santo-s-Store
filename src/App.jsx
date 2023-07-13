import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import FoodDetails from "./components/FoodItems/FoodDetails";
import Delivery from "./components/FoodItems/Delivery/Delivery";
import Login from "./components/LoginPage/Login";
import Home from "./components/HomePage/Home";
import CheckoutPage from "./components/OrderCheckout/CheckoutPage";
import Services from "./components/HomePage/Services";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/food/Delivery" element={<Delivery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food/checkout" element={<CheckoutPage />} />
        <Route path="/about-us/services/:id" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
