import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  MapPinIcon,
  ShoppingBagIcon,
  FireIcon,
  BanknotesIcon,
  ReceiptPercentIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden fixed bg-white left-0 right-0 top-0  lg:flex flex-col gap-6 shadow px-4 py-3 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to='/'>
              <h1 className="text-red-600 font-bold text-3xl cursor-pointer">
                digikala
              </h1>
            </Link>
            <div className="flex items-center bg-gray-200 w-72 gap-1 py-1 px-2 rounded">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <input
                type="text"
                className="bg-transparent w-full outline-none text-gray-700 font-yekan placeholder:font-yekan text-lg"
                placeholder="جستجو"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 border border-gray-300 py-1 px-3 rounded  cursor-pointer">
              <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              <span className="font-yekan text-lg">ورود | ثبت نام</span>
            </div>
            <span className="text-gray-300">|</span>
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6  cursor-pointer" />
             {cart.totalQuantity > 0 && <span className="absolute top-[-0.3rem] right-[-0.3rem] bg-red-600 px-[0.2rem] text-white rounded-full text-xs flex items-center justify-center">{cart.totalQuantity}</span>}
            </Link>
          </div>
        </div>

        <div
          className={`${
            isScrolled && "hidden"
          } flex items-center justify-between transition ease-linear duration-150`}
        >
          <div className="flex items-center gap-4 font-yekan text-gray-400">
            <div className="flex items-center gap-2 cursor-pointer">
              <Bars3Icon className="h-5 w-5" />
              <span>دسته بندی کالاها</span>
            </div>
            |
            <div className="flex items-center gap-1  cursor-pointer">
              <ShoppingBagIcon className="h-5 w-5" />
              <span>سوپرمارکت</span>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              <FireIcon className="h-5 w-5" />
              <span>پرفروش ترین ها</span>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              <BanknotesIcon className="h-5 w-5" />
              <span>تخفیف ها و پیشنهادها</span>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              <ReceiptPercentIcon className="w-5 h-5" />
              <span>شگفت انگیزها</span>
            </div>
            |
            <div className="flex items-center gap-1  cursor-pointer">
              {" "}
              <span>سوالی دارید؟</span>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              {" "}
              <span>فروشنده شوید!</span>
            </div>
          </div>
          <div className="flex items-center text-black font-yekan gap-2 cursor-pointer">
            <MapPinIcon className="w-6 h-6" />
            <span>لطفا شهر خود را انتخاب کنید</span>
          </div>
        </div>
      </div>

      <div className="absolute bg-white left-0 right-0 top-0 flex flex-col gap-6 shadow px-4 py-3 z-50 lg:hidden">
        <div className="flex items-center justify-between">
          <Bars3Icon className="h-7 w-7" />
          <h1 className="text-red-600 font-bold text-3xl cursor-pointer">
            digikala
          </h1>
          <QuestionMarkCircleIcon className="h-7 w-7" />
        </div>
        <hr />
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-200 w-72 gap-1 py-1 px-2 rounded flex-1">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              className="bg-transparent w-full outline-none text-gray-700 font-yekan placeholder:font-yekan text-lg"
              placeholder="جستجو"
            />
          </div>
          <div className="flex items-center gap-1  py-1 px-3 rounded  cursor-pointer">
            <ArrowLeftOnRectangleIcon className="w-6 h-6" />
            <span className="font-yekan text-lg">ورود</span>
          </div>
           <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6  cursor-pointer" />
             {cart.totalQuantity > 0 && <span className="absolute top-[-0.3rem] right-[-0.3rem] bg-red-600 px-[0.2rem] text-white rounded-full text-xs flex items-center justify-center">{cart.totalQuantity}</span>}
            </Link>
        </div>
        <hr />
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center text-black font-yekan gap-2">
            <MapPinIcon className="w-6 h-6" />
            <span>لطفا شهر خود را انتخاب کنید</span>
          </div>
          <ChevronLeftIcon className="h-7 w-7" />
        </div>
      </div>
    </>
  );
}

export default Header;
