import "./Header.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Mousewheel,
          Autoplay,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        direction={"horizontal"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link className="heroImg" to="/singlepage">
            <img
              className="myImg"
              src="https://www.sanasafinaz.com/media/catalog/category/1498X630-compressor.jpg"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="heroImg" to="/singlepage">
            <img
              className="myImg"
              src="https://www.sanasafinaz.com/media/catalog/category/1498X630-compressor.jpg"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="heroImg" to="/singlepage">
            <img
              className="myImg"
              src="https://www.sanasafinaz.com/media/catalog/category/1498X630-compressor.jpg"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className="heroImg" to="/singlepage">
            <img
              className="myImg"
              src="https://www.sanasafinaz.com/media/catalog/category/1498X630-compressor.jpg"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
