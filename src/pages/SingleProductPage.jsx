import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SingleProduct from '../components/SingleProduct';

function SingleProductPage() {
  return (
    <div className='mt-60 lg:mt-28'>
      <Header />
      <SingleProduct />
      <Footer />
    </div>
  );
}

export default SingleProductPage;
