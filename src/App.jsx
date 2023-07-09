import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import FoodDetails from "./components/FoodItems/FoodDetails";
import Delivery from "./components/FoodItems/Delivery/Delivery";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/food/Delivery" element={<Delivery />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
