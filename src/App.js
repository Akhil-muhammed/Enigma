import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Home from "./Components/Home";
import More from "./Components/More";
import Cart from "./Components/Cart";
import { Shopcontext, Shopcontextprovider } from "./Components/Shopcontext";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Shopcontextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="Product" element={<Products />} />
              <Route path="more" element={<More />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Shopcontextprovider>
    </div>
  );
}

export default App;
