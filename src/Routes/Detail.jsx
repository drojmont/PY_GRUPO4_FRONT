import React from "react";
import { useNavigate } from "react-router-dom";
import fotoImage from "../assets/imagen-default.jpg";

const Detail = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="w-full mt-[40px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center bg-[#35A6B8] p-4">
          <h2 className="text-lg font-semibold  text-white">
            Nombre del producto
          </h2>
          <img
            src="/arrow-circle-left-svgrepo-com.svg"
            alt="Volver"
            className="w-6 h-6 cursor-pointer"
            onClick={goBack}
          />
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col items-center">
          <img
            src={fotoImage}
            alt="Producto"
            className="w-64 h-64 object-cover"
          />
          <p className="text-gray-700 text-left w-full max-w-lg mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            sapiente asperiores quam blanditiis aut repellendus aliquid
            dignissimos? Repellat minus veritatis dignissimos ipsum expedita et
            pariatur odio debitis nulla. Corporis, expedita.
          </p>
        </div>
      </div>
    </>
  );
};
export default Detail;
