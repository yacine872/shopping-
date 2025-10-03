import "./App.css";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
