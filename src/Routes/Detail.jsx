import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import useEvents from "../Hooks/useEvents";
import Gallery from "../components/Gallery";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useEvents();
  const [currentEvent, setCurrentEvent] = useState(null);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize la búsqueda del evento para evitar re-renders innecesarios
  const currentEventMemo = useMemo(() => {
    return events.find(event => String(event.id) === String(id));
  }, [events, id]);

  useEffect(() => {
    // Usar el evento memoizado
    setCurrentEvent(currentEventMemo);

    // Obtenemos las características desde la API
    const fetchFeatures = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get('http://localhost:8080/api/features');
        
        const featuresData = response.data;
        
        if (Array.isArray(featuresData)) {
          setFeatures(featuresData);
        } else if (featuresData && Array.isArray(featuresData.content)) {
          setFeatures(featuresData.content);
        } else {
          console.error("Formato de respuesta inesperado:", featuresData);
          setFeatures([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener características:", error);
        setLoading(false);
        setFeatures([]);
        setError("No se pudieron cargar las características");
      }
    };

    // Solo llamar a fetchFeatures si currentEventMemo existe
    if (currentEventMemo) {
      fetchFeatures();
    }
  }, [currentEventMemo]); // Dependencia única y estable

  const goBack = () => {
    navigate(-1);
  };

  // Mapeo de iconos para características basado en su nombre
  const getFeatureIcon = (featureName) => {
    const iconMap = {
      "Fotos": "https://unpkg.com/heroicons/24/solid/camera.svg",
      "Alojamiento": "https://unpkg.com/heroicons/24/solid/home.svg",
      "Guia": "https://unpkg.com/heroicons/24/solid/user-group.svg",
      "Souvenirs": "https://unpkg.com/heroicons/24/solid/gift.svg",
      "default": "https://unpkg.com/heroicons/24/solid/question-mark-circle.svg",
      "Transporte" : "https://unpkg.com/heroicons@2.0.18/24/solid/train.svg",
      "Comida" : "https://unpkg.com/heroicons@2.0.18/24/solid/restaurant.svg",
    };
  
    const key = Object.keys(iconMap).find(
      key => key.toLowerCase() === (featureName || "").toLowerCase()
    );
  
    return key ? iconMap[key] : iconMap.default;
  };

  // Usar currentEventMemo en lugar de currentEvent para la renderización
  const event = currentEventMemo;

  if (!event) {
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
            {event.name}
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
            <Gallery images={event.images} />
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Descripción</h3>
              <p className="text-gray-700">
                {event.description}
              </p>
            </div>

            {/* Bloque de Características */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Características</h3>
              
              {loading ? (
                <p className="text-gray-500">Cargando características...</p>
              ) : error ? (
                <div className="bg-red-50 p-4 border border-red-200 rounded">
                  <p className="text-red-600">{error}</p>
                </div>
              ) : (features && features.length > 0) ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-gray-50 p-4 rounded flex flex-col items-center justify-center text-center border border-gray-200"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        {feature.description && feature.description.startsWith('http') ? (
                          <img
                            src={feature.description}
                            alt={feature.name}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <img
                            src={getFeatureIcon(feature.name)}
                            alt={feature.name}
                            className="w-6 h-6"
                          />
                        )}
                      </div>
                      <span className="text-sm font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No hay características disponibles</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;