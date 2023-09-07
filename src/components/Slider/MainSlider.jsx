import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SliderContent from "./SliderContent";
import "./MainSlider.css";

export default function MainSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
