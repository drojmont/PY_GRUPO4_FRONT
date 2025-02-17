import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fotoImage from "../assets/imagen-default.jpg";
import events from "../data/events";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [event, setEvent] = useState(null);
  useEffect(() => {
    const fetchedEvent = events.find((e) => e.id === Number(id));
    setEvent(fetchedEvent || {});
  }, [id]);

  if (!event) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="w-full mt-[40px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center bg-[#35A6B8] p-4">
          <h2 className="text-lg font-semibold  text-white">{event.name}</h2>
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
            src={event.images[0] || fotoImage}
            alt={event.name}
            className="w-64 h-64 object-cover"
          />
          <p className="text-gray-700 text-left w-full max-w-lg mt-4">
            {event.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default Detail;
