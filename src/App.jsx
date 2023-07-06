import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
