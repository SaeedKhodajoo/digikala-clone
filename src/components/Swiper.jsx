import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import OfferItem from "./OfferItem";
import "./styles.css";
import { Navigation } from "swiper";
import { products } from "../assets/data/data";

function SwiperComponent(props) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      navigation
      modules={[Navigation]}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <OfferItem product={product} />
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide>
      <SwiperSlide>
        <OfferItem />
      </SwiperSlide> */}
    </Swiper>
  );
}

export default SwiperComponent;
