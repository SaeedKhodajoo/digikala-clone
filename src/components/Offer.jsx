import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import OfferIcon from "../assets/images/offer.svg";
import SwiperComponent from "./Swiper";

function Offer({products}) {



  return (
    <div className="flex rounded bg-red-500 lg:m-4 py-1 pl-2 pr-8 gap-9">
      <div className="flex flex-col gap-5 font-yekan text-white justify-around">
        <div className="sm:text-2xl text-lg text-center">
          پیشنهاد <br />
          شگفت انگیز
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={OfferIcon}
            alt="offer"
            className="shadow-2xl w-12 h-12"
          />
        </div>
        <button className="sm:text-xl text-lg flex items-center gap-1">
          مشاهده همه <ChevronLeftIcon className="w-4 h-4" />
        </button>
      </div>
      <SwiperComponent products={products}/>
    </div>
  );
}

export default Offer;
