import { useEffect, useState } from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Offer from "../components/Offer";
import ProductSection from "../components/ProductSection";
import {products} from '../assets/data/data'

function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  //   try {
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div className="mt-60 lg:mt-32 w-full">
      <Header />
      {/* <Banner /> */}
      <Offer products={products} />
      <Category />
      <ProductSection products={products} />
      {/* <SingleProduct /> */}
      <Footer />
    </div>
  );
}

export default Home;
