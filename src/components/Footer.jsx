import { CalendarDaysIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import {
  CalendarMonth,
  CreditCard,
  FacebookOutlined,
  HighQuality,
  Instagram,
  LocalShipping,
  SupportAgent,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <div className="font-yekan mt-14 mb-8 px-4 w-full">
      <h1 className="text-4xl font-bold text-red-600 mb-4">دیجی کالا</h1>
      <p className="flex flex-col gap-1 lg:flex-row text-lg font-light leading-loose">
        <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ |</span>
        <span> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
      </p>
      <div className="hidden lg:flex items-center justify-around mt-7">
        <span className="flex flex-col items-center justify-center gap-2 text-lg font-semibold">
          <LocalShipping
            fontSize="large"
            sx={{ color: "rgb(220 38 38)", fontSize: 45 }}
          />
          امکان تحویل اکسپرس
        </span>
        <span className="flex flex-col items-center justify-center gap-2 text-lg font-semibold">
          <SupportAgent
            fontSize="large"
            sx={{ color: "rgb(220 38 38)", fontSize: 45 }}
          />
          هفت روز هفته , 24 ساعته
        </span>
        <span className="flex flex-col items-center justify-center gap- text-lg font-semibold">
          <CreditCard
            fontSize="large"
            sx={{ color: "rgb(220 38 38)", fontSize: 45 }}
          />
          امکان پرداخت در محل
        </span>
        <span className="flex flex-col items-center justify-center gap-2 text-lg font-semibold">
          <CalendarMonth
            fontSize="large"
            sx={{ color: "rgb(220 38 38)", fontSize: 45 }}
          />
          هفت روز ضمانت بازگشت کالا
        </span>
        <span className="flex flex-col items-center justify-center gap-2 text-lg font-semibold">
          <HighQuality
            fontSize="large"
            sx={{ color: "rgb(220 38 38)", fontSize: 45 }}
          />
          ضمانت اصل بودن کالا
        </span>
      </div>
      <div className="grid grid-cols-12 font-yekan mt-6">
        <div className="col-span-6 lg:col-span-3 flex flex-col text-gray-500 gap-2 text-lg">
          <h2 className="text-xl font-semibold text-black">با دیجی‌کالا</h2>
          <a href="#">اتاق خبر دیجیکالا</a>
          <a href="#">فروش در دیجیکالا</a>
          <a href="#">فرصت های شغلی</a>
        </div>
        <div className="col-span-6 lg:col-span-3 flex flex-col text-gray-500 gap-2">
          <h2 className="text-xl font-semibold text-black">خدمات مشتریان</h2>
          <a href="#">پاسخ به پرسش‌های متداول</a>
          <a href="#">رویه‌های بازگرداندن کالا</a>
          <a href="#">شرایط استفاده</a>
          <a href="#">حریم خصوصی</a>
          <a href="#">گزارش باگ</a>
        </div>
        <div className="hidden col-span-12 lg:col-span-3 md:flex flex-col text-gray-500 gap-2">
          <h2 className="text-xl font-semibold text-black">
            راهنمای خرید از دیجی‌کالا
          </h2>
          <a href="#">نحوه ثبت سفارش</a>
          <a href="#">رویه ارسال سفارش</a>
          <a href="#">شیوه‌های پرداخت</a>
        </div>
        <div className="mt-5 lg:mt-0 col-span-12 lg:col-span-3 flex flex-col gap-3">
          <div className="flex justify-between gap-6 lg:flex-col">
            <h2 className="flex text-lg md:text-xl font-semibold text-black">
              همراه ما باشید!
            </h2>
            <div className="flex items-center justify-between gap-4">
              <a href="#">
                <FacebookOutlined fontSize="large" sx={{color:'#3b5998'}} />
              </a>

              <a href="#">
                <Twitter fontSize="large" sx={{color:'#00acee'}} />
              </a>

              <a href="#">
                <Instagram fontSize="large" sx={{color:'#dd2a7b'}} />
              </a>

              <a href="#">
                <Telegram fontSize="large" sx={{color:'#4995be'}} />
              </a>
            </div>
          </div>
          <span className="hidden md:flex text-lg">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </span>
          <div className="grid grid-cols-12 gap-2">
            <input
              className="col-span-10 bg-gray-200 py-2 px-3 rounded-xl outline-none "
              type="email"
              placeholder="ایمیل شما"
            />
            <button className="col-span-2 bg-red-600 rounded-xl py-2 text-xl text-white ">
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
