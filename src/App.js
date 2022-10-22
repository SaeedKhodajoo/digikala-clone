import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="w-full max-w-full lg:px-10 pt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/:slug" element={<SingleProductPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
