import { useEffect, useState } from 'react';
import data from '../data/events';
import EVENTS from '../utils/constantsLocalSorage';

/* Este hook esta DEPRECADO ⚠ */
const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

/* Primer sprint usando localstorage */
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

/* Agregar un Evento */
const addEvent = (newEvent) => {
  const updatedEvents = [...events, newEvent];
  setEvents(updatedEvents);
  localStorage.setItem(EVENTS, JSON.stringify(updatedEvents));
};

/* Eliminar un Evento */
const deleteEvents = (eventId) => {
  const updatedEvents = events.filter((event) => event.id !== eventId);
  setEvents([...updatedEvents]);
  localStorage.setItem(EVENTS, JSON.stringify(updatedEvents));
  window.dispatchEvent(new Event('storage'));
};

useEffect(() => {
  const handleStorageChange = () => {
    const updatedEvents = JSON.parse(localStorage.getItem(EVENTS)) || [];
    setEvents(updatedEvents);
  };

  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);

  return {
    events,
    isLoading,
    error,
    setIsLoading,
    addEvent,
    deleteEvents,
  };
};

export default useEvents;


