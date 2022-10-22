import { HandThumbUpIcon, StarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import { products } from "../assets/data/data";
import toast, { Toaster } from "react-hot-toast";


function SingleProduct() {
  const [product, setProduct] = useState(1);
  const params = useParams();
  const productId = Number(params.slug);
  const dispatch = useDispatch();

  const toastStyle = {
    background: "white",
    color: "black",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "15px",
    borderRadius: "9999px",
    maxWidth: "1000px",
  };


  useEffect(() => {
    setProduct(products.find((product) => product.id === productId));
  }, [productId]);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        title: product.title,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      })
    );
    toast(
      `${product.title} به سبد خرید شما اضافه شد`,
      { duration: 3000, style: toastStyle }
    );
  };

  return (
    <>
      <section className="grid grid-cols-12 mt-8 gap-1 font-yekan">
      <Toaster position="top-center" />
        <div className="col-span-12 p-5 lg:p-0 lg:col-span-4 flex items-center justify-center">
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src={
                product.image && require(`../assets/images/${product.name}.png`)
              }
              alt={product.name}
              className="w-10/12 h-full  object-contain"
            />
          </div>
        </div>
        <div className="col-span-12 px-5 lg:px-0 lg:col-span-5 font-yekan flex flex-col gap-4">
          <h2 className="text-2xl">{product.title}</h2>
          <hr className="hidden lg:flex" />
          <div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <StarIcon className="w-5 h-5" /> {product.rating} (140)
              </span>
              . <span>۱۲۰ دیدگاه</span> . <span>۱۰۸ پرسش</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <HandThumbUpIcon className="w-5 h-5" />
            ۸۶% (۶۰) نفر از خریداران، این کالا را پیشنهاد کرده اند
          </div>
          <div className="text-xl">رنگ: مشکی</div>
          <div>
            <div className="rounded-full bg-black w-9 h-9"></div>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <h2 className="font-yekan text-lg">ویژگی‌ها</h2>
            <div>
              <ul className="text-lg text-gray-500">{product.description}</ul>
            </div>
            <hr />
            <div className="flex items-center justify-between border rounded-lg p-2">
              <div>
                <h2>ارسال رایگان</h2>
                <p>برای سفارش‌ بالای ۵۰۰ هزار تومان</p>
              </div>
              <div>
                <HandThumbUpIcon className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 px-2 mx-4 mt-4 lg:mx-0 lg:col-span-3 bg-gray-200 rounded-lg border font-yekan flex flex-col justify-evenly  py-4">
          <h1 className="font-bold text-xl">فروشنده</h1>
          <h2 className="text-lg font-bold">دیجی کالا</h2>
          <div className="mt-2 lg:mt-0">
            <span className="text-green-600">100%</span> رضایت از کالا | عملکرد
            <span className="text-green-600">عالی</span>
          </div>
          <hr className="border-black mt-2 lg:mt-0" />
          <div className="mt-2 lg:mt-0">گارانتی اصالت و سلامت فیزیکی کالا</div>
          <hr className="border-black mt-2 lg:mt-0" />
          <div className="mt-2 lg:mt-0">موجود در انبار</div>
          <hr className="border-black mt-2 lg:mt-0" />
          <div className="flex items-center justify-between my-2 lg:my-0">
            <span>قیمت فروشنده</span>
            <span>{product.price} تومان</span>
          </div>
          <button
            onClick={addToCartHandler}
            className="text-white flex items-center justify-center rounded-lg bg-red-600 w-full mx-auto px-2 py-3"
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div className="col-span-12 p-5 lg:hidden flex-col gap-4">
          <h2>ویژگی‌ها</h2>
          <div>
            <ul className="text-md">{product.description}</ul>
          </div>
        </div>
      </section>
      <div className="hidden lg:flex justify-evenly mt-10 py-4 border-t border-b-4 font-yekan">
        <div>امکان تحویل اکسپرس</div>
        <div>۲۴ ساعته، ۷ روز هفته</div>
        <div>امکان پرداخت در محل</div>
        <div>هفت روز ضمانت بازگشت کالا</div>
        <div>ضمانت اصل بودن کالا</div>
      </div>
    </>
  );
}

export default SingleProduct;
