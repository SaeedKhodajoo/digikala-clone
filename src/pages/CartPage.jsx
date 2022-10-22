import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CartPage() {
  return (
    <div className="mt-60 lg:mt-32 w-full">
      <Header />
      <Cart />
      <div className="hidden lg:flex"> 
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;
