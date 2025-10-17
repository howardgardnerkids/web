import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/Carrusel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { profesores } from "@/constants/profesores";

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
        className="profesores-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {profesores.map((profesor, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative bg-primary rounded-3xl h-[450px] w-72 mx-auto my-5 overflow-hidden text-center group">
                <img
                  className="absolute -top-36 -left-36 -translate-x-36 -translate-y-36 transition-all delay-150 duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                  src="/img/vector-home2.png"
                  alt="vector naranja"
                ></img>
                <img
                  className="absolute bottom-8 -right-24 translate-x-36 translate-y-36 transition-all delay-150 duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0"
                  src="/img/vector-home2.png"
                  alt="vector naranja"
                ></img>
                <img
                  className="absolute h-3/4 top-0 object-contain group-hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                  src={profesor.img}
                  alt={profesor.titlePp}
                />
                <div className="absolute h-[220px] px-7 w-full bottom-0 rounded-b-3xl flex flex-col justify-center items-center bg-[url('/img/service-bg.png')] bg-cover bg-top bg-no-repeat">
                  <h3 className="text-3xl mb-2.5">{profesor.titlePp}</h3>
                  <p className="text-accent-700 text-2xl">{profesor.title}</p>
                </div>
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
