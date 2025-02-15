import { useEffect, useState } from 'react';
import data from '../data/events';
import EVENTS from '../utils/constantsLocalSorage';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem(EVENTS)) || [];
      if (!storedEvents.length) {
        localStorage.setItem(EVENTS, JSON.stringify(data));
        setEvents(data);
      } else {
        setEvents(storedEvents);
      }
    } catch (error) {
      console.error('Error al traer la información del localstorage', error);
      setError(error);
      setEvents([]);
    } 
  }, []);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem(EVENTS, JSON.stringify(updatedEvents));
  };

  return {
    events,
    isLoading,
    setIsLoading,
    error,
    addEvent,
  };
};

export default useEvents;
