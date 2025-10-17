import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/Carrusel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { testimonios } from "@/constants/testimonios";

// =======================================================
//                  Carrusel
const Carrusel = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Navigation]}
        initialSlide={1}
        className="testimonios-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonios.map((testimonio, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div
                className={`relative bg-no-repeat bg-contain bg-center h-96 w-[400px] flex justify-center flex-col mx-auto`}
                style={{
                  backgroundImage: `url(${testimonio.bg})`,
                }}
              >
                <img
                  className="h-24 md:h-28 lg:h-32 absolute top-4 md:top-0 left-9 md:left-5 object-contain"
                  src={testimonio.img}
                  alt={testimonio.titleFather}
                />
                <div className="w-35 ml-30">
                  <h2 className="text-accent-700 text-lg font-bold">
                    {testimonio.NameFather}
                  </h2>
                  <h3 className="w-full text-sm font-bold text-black">
                    {testimonio.titleFather}
                  </h3>
                </div>
                <p className="text-sm xl:text-base w-7/12 mx-auto my-3 xl:my-2 text-letter">
                  {testimonio.text}
                </p>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev">
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-accent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11 7l-5 5l5 5" />
              <path d="M17 7l-5 5l5 5" />
            </svg>
          </div>
        </div>
        <div className="swiper-button-next">
          <div className="flex justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-accent"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7l5 5l-5 5" />
              <path d="M13 7l5 5l-5 5" />
            </svg>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Carrusel;
