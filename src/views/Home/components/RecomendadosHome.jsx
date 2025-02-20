import React, { useEffect, useState } from "react";
import RecomendadosCard from "./RecomendadosCard";
import useEvents from "../../../Hooks/useEvents";

const RecomendadosHome = () => {
  const { events } = useEvents();
  const [startIndex, setStartIndex] = useState(0);
  const [eventsToDisplay, setEventsToDisplay] = useState([]);
  const itemsPerPage = 10; 
  
  useEffect(() => {
    if (events.length > 0) {
      const shuffled = [...events].sort(() => Math.random() - 0.5);
      setEventsToDisplay(shuffled);
      setStartIndex(0); 
    }
  }, [events]);

  const totalPages = Math.ceil(eventsToDisplay.length / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage) + 1;
  const visibleEvents = eventsToDisplay.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setStartIndex((page - 1) * itemsPerPage);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contenedor de eventos en dos columnas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {visibleEvents.map((event) => (
          <RecomendadosCard key={event.id} event={event} />
        ))}
      </div>

      {/* Contenedor de botones de paginación centrado */}
      <div className="flex justify-center space-x-2 mt-6">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-white ${
            currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-[#3C6E71] hover:opacity-80"
          }`}
        >
          Ir al inicio
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            disabled={currentPage === i + 1}
            className={`px-3 py-2 rounded-md ${
              currentPage === i + 1 ? "bg-[#3C6E71] text-white font-bold" : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md text-white ${
            currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-[#3C6E71] hover:opacity-80"
          }`}
        >
          Ir al final
        </button>
      </div>
    </div>
  );
};

export default RecomendadosHome;
