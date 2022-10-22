import React from "react";
import digitalImg from "../assets/images/camera.png";
import clothesImg from '../assets/images/menstshirt.png'
import necklaceImg from '../assets/images/necklace.png'
import toyImg from '../assets/images/lego.png'
import mobileImg from '../assets/images/mobilea13.png'
import sportsImg from '../assets/images/skate.png'

function Category() {
  return (
    <div className="hidden md:flex flex-col gap-2 mt-10 mb-8">
      <h1 className="font-yekan text-3xl text-center">
        دسته‌بندی‌های دیجی‌کالا
      </h1>
      <div className="flex flex-wrap gap-10 w-9/12 mx-auto py-10 items-center justify-center">
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={digitalImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">کالای دیجیتال</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={clothesImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">پوشاک</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={necklaceImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">جواهرآلات</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={mobileImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">موبایل</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={sportsImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">لوازم ورزشی</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-32 h-32 rounded-full font-yekan">
          <img src={toyImg} alt="cellphone" className="rounded-full w-full h-full object-contain" />
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">اسباب بازی</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
