import { useParams, useNavigate } from "react-router-dom";
// import useEvents from "../Hooks/useEvents";
import { useContext, useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import { EventContext } from "../context/ProductContext";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useContext(EventContext);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    // Convertimos ambos a string para asegurar una comparación correcta
    const foundEvent = events.find(event => String(event.id) === String(id));
    setCurrentEvent(foundEvent);
  }, [id, events]);

  const goBack = () => {
    navigate(-1);
  };

  if (!currentEvent) {
    return (
      <div className="w-full mt-[40px] p-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">Evento no encontrado</p>
          <button 
            onClick={goBack}
            className="bg-[#35A6B8] text-white px-6 py-2 rounded-lg hover:bg-[#2d8b9a] transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mt-[40px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center bg-[#35A6B8] p-4">
          <h2 className="text-lg font-semibold text-white">
            {currentEvent.name}
          </h2>
          <img
            src="/arrow-circle-left-svgrepo-com.svg"
            alt="Volver"
            className="w-6 h-6 cursor-pointer"
            onClick={goBack}
          />
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="max-w-6xl mx-auto">
            <Gallery images={currentEvent.images} />
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Descripción</h3>
              <p className="text-gray-700">
                {currentEvent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;