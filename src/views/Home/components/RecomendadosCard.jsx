import React from "react";
import { Link } from "react-router-dom";

const RecomendadosCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link to={`/Detail/${event.id}`} className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 bg-gray-200 h-48 sm:h-40 flex-shrink-0">
          <img
            src={event.images[0]}
            alt={event.name}
            className="w-full h-full "
          />
        </div>
        <div className="sm:w-2/3 p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-gray-700 font-medium">{event.name}</h3>
            </div>
            <div className="text-sm text-gray-600 line-clamp-4">
              <span>{event.description}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RecomendadosCard;
