import React, { useEffect, useState } from "react";
import RecomendadosCard from "./RecomendadosCard";
import useEvents from "../../../Hooks/useEvents";

const RecomendadosHome = () => {
  const { events } = useEvents();
  const [pageEvent, setPageEvent] = useState([]);

  useEffect(() => {
    let max = events.length;
    let randomEventsPosition = new Set();
    let newPageEvent = [];

    while (randomEventsPosition.size < 10 && max != 0) {
      randomEventsPosition.add(Math.floor(Math.random() * max));
    }

    randomEventsPosition.forEach((value) => newPageEvent.push(events[value]));

    setPageEvent(newPageEvent);
  }, [events]);

  return (
    <>
      {pageEvent.map((event) => (
        <RecomendadosCard key={event.id} event={event} />
      ))}
    </>
  );
};

export default RecomendadosHome;
