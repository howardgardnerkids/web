import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/Carrusel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const data = [
  {
    photoV: "/img/instalaciones/fachadaInteriorVertical.webp",
    photoH: "/img/instalaciones/fachadaInternaHorizontal.webp",
    title: "Nuestra Misión",
    subtitle: "¡Educar con amor!",
    desc1:
      "Brindar a los niños y niñas un ambiente cálido y afectuoso donde el juego, el amor y la creatividad sean las herramientas principales para su aprendizaje y desarrollo integral. Nuestro compromiso es apoyar a las familias en la formación de seres humanos con valores, confianza en sí mismos e imaginación, preparados para afrontar con alegría cada etapa de su vida.",
    desc2:
      "Para el 2026 el jardín infantil HOWARD GARDNER busca mantener y mejorar el reconocimiento como uno de los mejores jerdínes de Bogotá, altamente calificados para el mejor desarrollo y la mejor formación integral en los niños, con calor humano, responsabilidad e innovación.",
    lista: [],
    img1: "/img/personajes/booYSolivan.webp",
    img2: "/img/blob/VectorVerde.png",
    bg: "bg-secondary",
  },
  {
    photoH: "/img/instalaciones/fachadaExteriorHorizontal.webp",
    photoV: "/img/instalaciones/fachadaExteriorVertical.webp",
    title: "Nuestra Visión",
    subtitle: "¡Un futuro lleno de sonrizas!",
    desc1:
      "Ser un jardín infantil reconocido por nuestra excelencia en la formación integral, donde el amor, la imaginación y los valores se conviertan en la base de una niñez feliz. Queremos ser el lugar de confianza de las familias, un espacio donde cada niño crezca seguro, amado y lleno de posibilidades.",
    desc2:
      "El jardín infantil HOWARD GARDNER tiene como objetivo desarrollar desde el juego y el afecto la formación integral de los niñas para fortalecer su autoestima, cultivar valores, despertar su imaginación y su creatividad a través de ambientes adecuados que brinden seguridad para aprender, tomar desiciones y enfrentarse a los cambios de su entorno social.",
    lista: [],
    img1: "/img/personajes/booYSolivan.webp",
    img2: "/img/blob/vectorNaranjaOscuro.png",
    bg: "bg-primary",
  },
  {
    photoH: "/img/instalaciones/piscinaDePelotasHorizontal.webp",
    photoV: "/img/instalaciones/piscinaPelotasVertical.webp",
    title: "Nuestros Valores",
    subtitle: "¡El corazón de lo que hacemos!",
    desc1:
      "Más que un jardín infantil, somos una familia que acompaña el crecimiento de cada niño con amor, dedicación y respeto. Aquí, los padres encuentran un aliado en la formación integral de sus hijos, con la confianza de que cada paso está guiado por el cariño y la excelencia educativa. Nuestros Valores:",
    desc2: "",
    lista: [
      "Amor: La base de cada enseñanza",
      "Creatividad: Despertamos la imaginación para explorar el mundo",
      "Autoestima: Acompañamos a los niños a creer en sí mismos",
      "Respeto y valores: Sembramos principios que duran toda la vida",
      "Juego: Nuestra mejor herramienta para aprender y disfrutar",
    ],
    img1: "/img/personajes/booYSolivan.webp",
    img2: "/img/blob/VectorVerde.png",
    bg: "bg-secondary",
  },
];

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
        slidesPerView={1}
        initialSlide={0}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full 2xl:h-[950px] h-full xl:rounded-4xl overflow-hidden">
                <div
                  className="block lg:hidden w-full h-72 md:h-96 lg:h-auto bg-cover"
                  style={{ backgroundImage: `url(${item.photoH})` }}
                ></div>
                <div
                  className="hidden lg:block w-full h-auto bg-cover xl:bg-[position:center_30%]"
                  style={{ backgroundImage: `url(${item.photoV})` }}
                ></div>
                <div
                  className={`w-full h-[760px] sm:h-[650px] lg:h-[800px] xl:h-[900px] 2xl:h-[950px] flex relative flex-col justify-center items-start bg-[url('/img/bg/pattern.webp')] ${item.bg} bg-cover py-10`}
                >
                  <div className="w-4/5 lg:w-3/4 xl:w-4/5 mx-auto">
                    <h3 className="w-full my-7 text-3xl xl:text-5xl font-bold text-center xl:text-left uppercase font-rakkas text-white">
                      {item.title}
                    </h3>
                    <h2 className="w-full mb-5 text-4xl lg:text-5xl xl:text-6xl text-center xl:text-left uppercase text-accent">
                      {item.subtitle}
                    </h2>
                    <p className="w-11/12 mx-auto my-5 lg:my-7 text-base xl:text-xl text-center lg:text-left text-white">
                      {item.desc1}
                    </p>
                    {item.desc2.length > 0 ? (
                      <p className="w-11/12 sm:w-3/4 lg:w-9/12 2xl:w-8/12 mx-auto md:ml-8 lg:ml-4 mb-7 text-base xl:text-xl  text-center md:text-left  text-white">
                        {item.desc2}
                      </p>
                    ) : (
                      ""
                    )}

                    {item.lista.length > 0 ? (
                      <ul className="list-disc w-11/12 sm:w-3/4 lg:w-9/12 mx-auto md:ml-8 lg:ml-4">
                        {item.lista.map((item, index) => {
                          return (
                            <li className="mb-3 w-full text-base lg:text-sm xl:text-xl text-white">
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>

                  <img
                    className="hidden md:block z-30 h-56 lg:h-40 xl:h-52 2xl:h-56 absolute bottom-0 right-3 2xl:right-1"
                    src={item.img1}
                    alt="imagen de boo y solivan"
                  />
                  <img
                    className="hidden md:block z-20 h-56 lg:h-40 xl:h-52 2xl:h-56 absolute bottom-2 right-1"
                    src={item.img2}
                    alt="fondo verde"
                  />
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
