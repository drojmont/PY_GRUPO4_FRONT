import fotoFondo from "../assets/imagenBG.jpg";
import fotoImage from "../assets/imagen-default.jpg";
import React, { useState } from "react";
import RecomendadosHome from "../views/Home/components/RecomendadosHome";

const Body = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${fotoFondo})`,
          backgroundPosition: "50% 65%",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative h-full max-w-6xl mx-auto px-4">
          <div className="h-full flex flex-col items-center justify-center space-y-8 pt-8">
            <div className="bg-white rounded-full px-6 py-2 shadow-lg mt-8 md:mt-0">
              <h1 className="text-base md:text-lg text-[#3C6E71] font-medium text-center">
                Nuestras recomendaciones para tu próxima aventura
              </h1>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full md:w-auto bg-white/95 rounded-full px-6 py-3 shadow-lg flex items-center justify-between md:justify-center gap-2 hover:bg-white/100 transition-colors"
                >
                  <span className="text-gray-700 font-medium">Categorías</span>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute z-20 w-full md:w-48 bg-white rounded-lg shadow-lg py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Conciertos
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Festivales
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Congresos
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Conferencias
                    </a>

                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Eventos
                    </a>
                  </div>
                )}
              </div>

              <div className="w-full md:w-96">
                <div className="bg-white/95 rounded-full shadow-lg flex items-center p-2 px-1">
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="flex-1 px-1 py-1 bg-transparent focus:outline-none text-gray-700"
                  />
                  <button className="p-1 hover:bg-gray-100  rounded-full transition-colors">
                    <svg
                      className="w-6 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 mx-10 mt-7">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:flex-nowrap gap-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-200 h-48 w-full">
              <img
                src="https://www.vanguardia.com/resizer/v2/V6Q2DYOGH5ERZH5QUKBSDOYWP4.jpg?auth=ef408fd7956135b3951b879be803db567384799b28a98127667b001f3eb101f6&smart=true&width=1200&height=800&quality=70"
                alt=" imagen del producto"
                className="w-full h-full "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-gray-700 font-medium">Conciertos</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-200 h-48 w-full">
              <img
                src="https://static.wixstatic.com/media/b84f80_d022b845504e4c3585e6edd20e02a892~mv2.png/v1/fill/w_1013,h_603,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b84f80_d022b845504e4c3585e6edd20e02a892~mv2.png"
                alt=" imagen del producto"
                className="w-full h-full "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-gray-700 font-medium">Festivales</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-200 h-48 w-full">
              <img
                src="https://i0.wp.com/itseller.co/wp-content/uploads/2025/01/CES2025-ITSELLER.jpg?w=1000&ssl=1"
                alt=" imagen del producto"
                className="w-full h-full "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-gray-700 font-medium">Congresos</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-200 h-48 w-full">
              <img
                src="https://gijn.org/wp-content/uploads/2025/01/IDEAS-771x433.png"
                alt=" imagen del producto"
                className="w-full h-full "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-gray-700 font-medium">Conferencias</h3>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-200 h-48 w-full">
              <img
                src="https://www.uniminutoradio.com.co/wp-content/uploads/2024/09/Mundial-de-Clubes-2025.jpg"
                alt=" imagen del producto"
                className="w-full h-full "
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-gray-700 font-medium">Eventos</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 mx-10">
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Recomendaciones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="col-span-1 sm:col-span-2 ">
            <RecomendadosHome />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
