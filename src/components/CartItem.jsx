import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        title: product.title,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(product.id));
  };

  return (
    <div className="border-b-2 p-5">
      <div className="flex gap-4 md:gap-10 mt-6">
        <div className="flex flex-col justify-between">
          <div className="w-24 h-24">
            <img
              src={require(`../assets/images/${product.name}.png`)}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="border rounded-lg flex items-center justify-between">
            <PlusIcon
              className="w-5 h-5 text-red-600 cursor-pointer"
              onClick={addToCartHandler}
            />
            <span className="text-red-600 text-lg">{product.quantity}</span>
            {product.quantity === 1 ? (
              <TrashIcon
                className="w-5 h-5 text-red-600 cursor-pointer"
                onClick={removeFromCartHandler}
              />
            ) : (
              <MinusIcon
                className="w-5 h-5 text-red-600 cursor-pointer"
                onClick={removeFromCartHandler}
              />
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl">
            
            {product.title}
            <div className="text-sm text-gray-500">
              
              <span>قیمت واحد</span> <span>{product.price}</span>{" "}
            </div>
          </h2>

          <div className="text-gray-400 flex flex-col">
            <ul>{product.description}</ul>
          </div>
          <div>{product.totalPrice} تومان</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
