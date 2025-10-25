import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/Carrusel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { profesores } from "@/constants/profesores";

interface CaruselProps {
  principal?: boolean;
}

// =======================================================
//                  Carrusel
const Carrusel: React.FC<CaruselProps> = ({ principal }) => {
  let dataProfesor = [];
  let bgcolor = "bg-primary/70";
  if (principal) {
    dataProfesor = profesores.filter((profesor) => profesor.principal);
    bgcolor = "bg-secondary/60";
  } else {
    dataProfesor = profesores.filter((profesor) => !profesor.principal);
  }

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
        className="equipo-swiper"
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
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {dataProfesor.map((profesor, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <article className="h-[750px]">
                <div className="bg-transparent relative overflow-hidden h-[250px]">
                  <img
                    src={profesor.img}
                    alt="foto profesora artes"
                    className="absolute w-full h-[250px] object-top my-1 md:my-3 object-contain"
                  />
                </div>
                <div
                  className={`px-3 py-5 h-[500px] ${bgcolor} rounded-xl md:rounded-none`}
                >
                  <div className="bg-black/8 rounded-3xl px-5 py-5 backdrop-blur-xs h-full">
                    <h3 className="text-2xl font-bold text-accent-700 w-full text-center">
                      {profesor.titlePp}
                    </h3>
                    <h2 className="text-2xl capitalize font-rakkas text-center">
                      {profesor.title}
                    </h2>
                    <h4 className="text-white/80 text-center text-sm lg:text-base">
                      {profesor.subtitle}
                    </h4>
                    <p className="text-sm sm:text-base md:text-sm w-9/12 xl:w-11/12 mx-auto text-center my-3">
                      {profesor.description1}
                    </p>
                    <p className="hidden sm:block md:hidden 2xl:block text-sm sm:text-base md:text-sm w-9/12 xl:w-11/12 mx-auto text-center">
                      {profesor.description2}
                    </p>
                  </div>
                </div>
              </article>
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
