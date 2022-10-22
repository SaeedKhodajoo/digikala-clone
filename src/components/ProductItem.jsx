import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
 
  useNavigate,
} from "react-router-dom";

function ProductItem({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${product.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex md:flex-col w-11/12 mx-auto gap-6 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 border p-2 bg-white cursor-pointer transition ease-in-out hover:shadow-lg hover:scale-105"
    >
      <div className="flex-1 w-full h-full flex items-center justify-center">
        <img src={require(`../assets/images/${product.name}.png`)} alt="" className="w-44 h-44 object-contain" />
      </div>
      <div className="flex-1 self-end flex flex-col gap-2 font-yekan w-full">
        <h2 className="text-xl lg:text-lg xl:text-xl h-12 w-full">{product.title}</h2>
        <div className="flex items-center justify-between">
          <span></span>
          <span className="flex items-center gap-1">
            {product.rating}
            <StarIcon className="w-5 h-5 text-orange-500" />
          </span>
        </div>
        <div className="flex justify-end">{product.price} تومان</div>
      </div>
    </div>
  );
}

export default ProductItem;
