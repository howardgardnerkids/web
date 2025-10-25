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
                className={`relative bg-no-repeat bg-contain bg-center size-[350px] sm:size-[500px] lg:size-[450px] xl:size-[500px] 2xl:size-[550px] flex justify-center flex-col mx-auto`}
                style={{
                  backgroundImage: `url(${testimonio.bg})`,
                }}
              >
                <img
                  className="size-24 sm:size-32 absolute top-0 sm:top-6 lg:top-0 2xl:top-6 left-5 sm:left-10 object-cover rounded-full shadow-lg"
                  src={testimonio.img}
                  alt={testimonio.titleFather}
                />
                <div className="w-52 ml-26">
                  <h2 className="text-accent-700 text-lg font-bold">
                    {testimonio.NameFather}
                  </h2>
                  <h3 className="w-full text-sm font-bold text-black">
                    {testimonio.titleFather}
                  </h3>
                </div>
                <div
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 6, // número de líneas visibles
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="text-sm xl:text-base w-6/12 sm:w-7/12 mx-auto my-3 xl:my-2 text-letter"
                >
                  {testimonio.text}
                </div>
                <a
                  href="/testimonios"
                  className="h-12 md:h-10 lg:h-12 xl:h-10 2xl:h-12 w-fit absolute bottom-10 sm:bottom-20 md:bottom-24 lg:bottom-19 xl:bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 drop-shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-8 md:size-14"
                    style={{
                      fill: `var(${testimonio.icon})`,
                    }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.4 2l.253 .005a6.34 6.34 0 0 1 5.235 3.166l.089 .163l.178 .039a6.33 6.33 0 0 1 4.254 3.406l.105 .228a6.334 6.334 0 0 1 -5.74 8.865l-.144 -.002l-.037 .052a5.26 5.26 0 0 1 -5.458 1.926l-.186 -.051l-3.435 2.06a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2.435l-.055 -.026a3.67 3.67 0 0 1 -1.554 -1.498l-.102 -.199a3.67 3.67 0 0 1 -.312 -2.14l.038 -.21l-.116 -.092a5.8 5.8 0 0 1 -1.887 -6.025l.071 -.238a5.8 5.8 0 0 1 5.42 -4.004h.157l.15 -.165a6.33 6.33 0 0 1 4.33 -1.963zm1.6 11h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0 -2m3 -4h-10a1 1 0 1 0 0 2h10a1 1 0 0 0 0 -2" />
                  </svg>
                  <span>Leer más</span>
                </a>
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
