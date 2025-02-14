import React, { useEffect } from "react";
import RecomendadosCard from "./RecomendadosCard";
import useEvents from "../../../Hooks/useEvents";

const RecomendadosHome = () => {
  const { events } = useEvents();
  return (
    <div>
      {events.map((event) => (
        <RecomendadosCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default RecomendadosHome;
