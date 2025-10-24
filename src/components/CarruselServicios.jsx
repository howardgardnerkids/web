import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/Carrusel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { servicios } from "@/constants/servicios";

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
        initialSlide={0}
        className="servicios-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {servicios.map((servicio, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="w-10/12 m-4 text-center flex flex-col justify-center mx-auto group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    className="border-none w-full h-64 object-cover drop-shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:translate-2"
                    src={servicio.imgHome}
                    alt={servicio.titleHome}
                  />
                </div>
                <div className="flex justify-center">
                  <div className="relative -mt-28 mx-5 pb-10 px-8 rounded-2xl w-4/5 h-[350px] sm:h-[400px] md:h-[350px] z-10 bg-[url('/img/bg/serviceBg.webp')] bg-cover bg-top bg-no-repeat drop-shadow-xl">
                    <div
                      className={`absolute -top-2 sm:-top-5 md:-top-6 lg:-top-3 left-1/2 -translate-x-1/2 border-none rounded-full p-2`}
                    >
                      {servicio.iconHome == "camara" && (
                        <svg
                          width="55"
                          height="78"
                          viewBox="0 0 48 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="h-12 sm:h-16 md:h-14 lg:h-16 xl:h-14 2xl:h-16"
                        >
                          <rect
                            width="48"
                            height="72"
                            fill="url(#pattern0_351_594)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_351_594"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_351_594"
                                transform="matrix(0.0111111 0 0 0.00740741 0 0.166667)"
                              />
                            </pattern>
                            <image
                              id="image0_351_594"
                              width="90"
                              height="90"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,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"
                            />
                          </defs>
                        </svg>
                      )}
                      {servicio.iconHome == "ingles" && (
                        <svg
                          width="58"
                          height="70"
                          viewBox="0 0 58 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className="h-12 sm:h-16 md:h-14 lg:h-16 xl:h-14 2xl:h-16"
                        >
                          <rect
                            width="58"
                            height="70"
                            fill="url(#pattern0_355_241)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_355_241"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_355_241"
                                transform="matrix(0.0111111 0 0 0.00920635 0 0.0857143)"
                              />
                            </pattern>
                            <image
                              id="image0_355_241"
                              width="90"
                              height="90"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADLUlEQVR4nO2cvU4VQRiGx1+0gRI0Nv5gwi1IsBC0wUvAS0A7LTBa0NCBxgRQC70Co72KWlkajZhoAYlURIxBTGx4zMQhWc3MOYdzdmbPLO+TkFC8MN88+2V2d87ZNUYIIYQQQggh6gxwEXgAfAJ+up9l4D4wVnV92QOcBV7RnCVgsOp6swQ4D2zQOhvASNV159jJu5G8wzfgTJP/nQtrwAxwOKboVpaLEC9rInqHmZgnvk4ZrZHotViiH5ZQ3GKNRBNLtL2E65RliW4uerME0ZsSnUb0D5Mhocl089Lx0WRIatH2VrtTFkyGpBY9VoLoCyZDkop2Az7vQPKSyZQqRJ8E1mPcgnczyUW7QUecuN1IHjEZU4loN/Cg3btoQfKLnDu5ctGFAkbtbbW9bHPX2Zvu98VcT3xdKTo1QC9wx974uIO6ABxJMO7eEQ1cAlZ3s1FV4tj1F83fLrafQW4H5ms7e1/kGuotmnAXF7HLiERH6uIicwnqqV9H01oX4w7CPHColqLtWR64Brx13+OoglV7QKJO9N85e4k54AngHdWx7ZaU3miT9M/bS8xOrlLyasou/m/uXmINZpeLPdPFRUKFmRi4NXnPdHGRUHGmiz8zbBW7FTtbZRcXCRWZdLA2+A1cB46bTMhV9A2TGbmKPmYyI0vRJkMkOhESnQiJToREJ0KiEyHRiZDoREh0Imolmjz5DtwDjkp0Gsr73ndZFZl6dfQOW8B+iY6PRCdiXktHXOxz8XdTngw/A6eA08CXRkEjOhI9XchNS3Q80ZOF3FWJjid6opC7ItHxRI8XcpclOp7oc4XcsETHEz1UyA1JdDzRA4XcgETHE91TyPVIdAc0kLflyf4KhY1oW/RXT9a+ssyLPLcv+r0n+yEUNqJt0a892TcSXb7op57sM4kuX/QjT/axRJcvetaTnZPo8kXf8mRvS3T5oic92eBWqRFti57wZINbpUa0LXrckw1ulRrRtuhhTza4VWpEU9Ergada+z3Z/sArIFbkubnomx5xTxrkn3ryUxLdXPRBJ3vFPdlq3wTW1yDf557hXnd/MwUckGghhBBCCCGEMN3BHx2YWDIqdavNAAAAAElFTkSuQmCC"
                            />
                          </defs>
                        </svg>
                      )}
                      {servicio.iconHome == "psicologia" && (
                        <svg
                          width="58"
                          height="72"
                          viewBox="0 0 54 68"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          className=" h-12 sm:h-16 md:h-14 lg:h-16 xl:h-14 2xl:h-16"
                        >
                          <rect
                            width="54"
                            height="68"
                            fill="url(#pattern0_355_96)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_355_96"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_355_96"
                                transform="matrix(0.0111111 0 0 0.00882353 0 0.102941)"
                              />
                            </pattern>
                            <image
                              id="image0_355_96"
                              width="90"
                              height="90"
                              preserveAspectRatio="none"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZUlEQVR4nO2cfaieYxzHr2feKYyhkYaWYWleTjhsIrSkmCXzj6K8pZSkU/YHC8Py/hZCjJQQVhP+85bRJP7AkZhthjmzF2xntuP56JefOp2e+znner2v+37uTz1/nNPTdf2u77nOff2u38ttTENDQ0NDQ0NDLQEmAScCNwLPAB8CPwGb+I82sBH4AfgeWKM/7wC26O9XAq8AtwLzgYPLXldO4p4NPA/8Tnj+AT4D7gSONr0GsAdwne7MVMh/xPvAJfIHNnUGaAGXA+soly+AC00dAaYD75EXy4DDTF0AFuiBlSObgUtNDR4V95A/bbVzF1M1xGjgWarFq8BupmI7WXzhKrJMvCJTBYC7qDYvyWYxOaN+ah24zeQKcJSe4nWgDZxvcgR4m3qxHjjE5ARwGfXkZZML4hIBq6kvZ5ocAK5MsNhfgReAa4A5wBHAZOAAPRvOAq4FlgK/BJ7789IDUeozf0O8A+ktOZRsbm0afp0LvKljhGBeXCXHX1Q/cfgE6AtgXx/wUQB7VoRRzH0hTxCWncBAyH9V3eGSudnuadvpoWxyWUTI2PIWybhEtHU2sMHDvqdi2Tae4ccEFrkvgc2zPMSWHOWesW3sZLR4ACHYYbOT9QAe0FSYuJULbR418ggAhh1tvcCkBng4kNADlvPK83Ysiy3HkJylC4+Yil65V9gefMBgh3H+sI24Ae862DtoUgN87SlyGzjZYd5tBePt5XDGjDjYPcWkBFjrKfRyx3mDCK1jSezZlvNMSgKEROdmIHR/7DPFG2Crh8g/uyZDAwvd0tIzG542KQH+9BB6qce8wYR2vN2+Y1LiWatxVUZC26bfvjIpGVXp6cIZXca9HvhSb2KdPkURuU0F3/8WuKXIjQSOcyieTFdS5lkBenjBmDcTjyUFc+7tMJY8NmdFF1kNHPJY9P4FY0qdcyw2F11qNGpoy49JcoqavAwt9FrisTWw0MLH0QNNnnnCIwvGXEw8OrplIpTnuC9GLbjRVgZX5nSp2VuisYtQiHf0WNHOA2YEmGNhTKGXexh29QTGn1zwKQpxTi34ftfdJvlA/BFPZH5QgUcZ6FMt+lwEP9qpOBF4iDD8JQ1PruvqZuBNHkatc32udRF6d8fxQno6cphPdbGjm4FSS+HDuYGF3tVhLGm5C82nrrfUIiP386ybeD2w0NZBKvFEiMPdLmvrZqh0OLnSBk4KKLRtpmYa8DdxWG+7rvGMvcPToA8cBFrVYZyNDra/RjyGbO0Zz9hTAhh1g+WcizqM8bhDp1hM7rcWcwKBc99Te9imCkgvNffqRWSb9stM+BoMzAx8IRrr4t0XpelIayx8+Q043mFul+dy6HjKdi2olBrxfWzXYGP8gV0OKBuGgNMi2jkzoMg7tdziiqIAWaxFPBloAcMTuZ472Lcg8OPioNA2TnQhh3oma8ciu2VGALumaaNmaMprj9P3YoRkREOQpzpUIZ2gl5FYfnKpQu8bsZdljbhw+maZY0cHkCTGIS8+AS4CHkz0HpByGz6BcwK2M0zkQJJK1DIov7MWeJT60ypb5/9TQ5JLqzMtkwNScZn4nUm9KbQgNz3PnpGcyUdoQT0EKWisGy2TG1pyJZ2vdaJlckRTRrm+wMqWdrZCC1Ipn9DHjskGkzuOrQy58YbJnch5ulT0myrg2HaWCw+YqqCF5lVjRAsw8z0ExyK9hVSH7/T1ctNN1dBixJxZpe3Xsyu1gwuy2LkxqDUqadolUpGJP70auN0l+14ZMhB6UaVe+FpRoQdMr1Ci0CsrfcBVSOiLTS9RotBTTC9RotCTTC9RotAt00s0QieiEToRjdANDQ0NDQ0NDSYh/wLNe6G8DtXHHgAAAABJRU5ErkJggg=="
                            />
                          </defs>
                        </svg>
                      )}
                      {servicio.iconHome == "nutricion" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 sm:h-14 md:h-12 lg:h-14 xl:h-12 2xl:h-14 stroke-white"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                          <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                          <path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 0 -2.632a1.775 1.775 0 0 0 -2.56 0l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 0a1.899 1.899 0 0 0 0 2.632l2.738 2.825z" />
                        </svg>
                      )}
                      {servicio.iconHome == "ruta" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 sm:h-12 md:h-10 lg:h-12 xl:h-12 2xl:h-14 stroke-white"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
                          <path d="M16 5l1.5 7l4.5 0" />
                          <path d="M2 10l15 0" />
                          <path d="M7 5l0 5" />
                          <path d="M12 5l0 5" />
                        </svg>
                      )}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100.000000pt"
                        height="100.000000pt"
                        viewBox="0 0 100.000000 100.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className={`${servicio.fillIconHome} absolute top-1/2 -translate-y-1/2 left-1/2 h-20 sm:h-24 md:h-20 lg:h-24 xl:h-22 2xl:h-24 -translate-x-1/2 -z-10`}
                      >
                        <g
                          transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path d="M312 984 c-29 -20 -62 -85 -77 -149 l-12 -50 -75 0 c-82 0 -105 -12 -134 -67 -24 -46 -18 -181 12 -294 15 -55 30 -136 33 -180 8 -97 34 -140 103 -168 49 -20 55 -24 92 -50 44 -31 112 -32 170 -2 l49 25 29 -21 c33 -23 94 -34 134 -24 15 4 42 23 59 41 29 33 33 34 67 24 86 -23 147 46 148 164 0 56 1 58 30 69 41 14 60 54 60 127 0 69 -36 192 -76 261 -18 31 -27 64 -30 104 -5 73 -30 125 -75 151 -46 27 -143 25 -228 -4 -63 -22 -64 -22 -85 -3 -64 60 -147 79 -194 46z"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-[70px] sm:mt-20 md:mt-14 lg:mt-20 xl:mt-16 2xl:mt-20 mb-2.5 sm:mb-6 md:mb-2 font-rakkas">
                      {servicio.titleHome}
                    </h3>
                    <p
                      className="text-sm sm:text-lg md:text-sm lg:text-base xl:text-sm 2xl:text-bamd
                     w-full text-center"
                    >
                      {servicio.descripHome}
                    </p>
                    <a
                      href={`${servicio.hrefHome}#${servicio.id}`}
                      className={`h-12 md:h-10 lg:h-12 xl:h-10 2xl:h-12 w-14 md:w-12 lg:w-14 xl:w-12 2xl:w-14 rounded-xl ${servicio.bgIconHome} absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center drop-shadow-md`}
                    >
                      <svg
                        width="30"
                        height="40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="w-8 mx-auto"
                      >
                        <rect
                          width="29"
                          height="38"
                          fill="url(#pattern0_31_273)"
                        ></rect>
                        <defs>
                          <pattern
                            id="pattern0_31_273"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_31_273"
                              transform="matrix(0.0111111 0 0 0.00847953 0 0.118421)"
                            ></use>
                          </pattern>
                          <image
                            id="image0_31_273"
                            width="90"
                            height="90"
                            preserveAspectRatio="none"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR4nO3avU7cQBhA0U0KSBBPTkMRRSJpeAcK4J1SJMof5UWruEKsF4Q9JJtzHmA8urJG1vjbbAAAAAAAAAAAAOCwVO+rT9XP6kt1Vh2/9r4OTn8iP3Qt9oKqN9WPR0KLvbTq+47QYi+pOp8JLfZStmfxdCaLvbbqqLraE/u2erf6Zg5dYo8j9kBiDyT2QGIPJPZAYv+LsauT6mP1bc9izLuejV1d7FmAp/u8K/Lb6vczFmLer21ToV8rtKNjcRf7/pt9qL4u/9z/yo0bvhfwLT2AyAOIPIDIA4g8gMgDiDyAyAOI/HcN0JjpeInp6kHkNU1XxNvbNm/ygNB3M8eFgfSlVJciD1CdTrHvpqH07RivN3nN6f/VFgcAAAAAAAAAANis6R6wmlEnvULw1AAAAABJRU5ErkJggg=="
                          />
                        </defs>
                      </svg>
                    </a>
                  </div>
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
