import { useEffect, useState } from 'react';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';
// import data from '../data/events';
// import EVENTS from '../utils/constantsLocalSorage';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErrorApi] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getProducts();
        setEvents(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setErrorApi(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  /* Agregar un Evento */
  const addEvent = async (newEvent) => {
    try {
      await createProduct(newEvent);
      const updatedList = await getProducts();
      setEvents(updatedList);

      return null; // Sin error
    } catch (error) {
      console.error('Ha ocurrido un error al registrar un evento', error);
      setErrorApi(error.message);
      return error.message;
    } finally {
      setIsLoading(false);
    }
  };

  /* Actualizar Evento */
  const updateEvent = async (id, updatedProduct) => {
    try {
      await updateProduct(id, updatedProduct);
      const updatedList = await getProducts();
      setEvents(updatedList);
    } catch (error) {
      console.log('Ocurrio un error al intentar actiualizar un evento ', error);
      setErrorApi(error.message);
      return error.message;
    } finally {
      setIsLoading(false);
    }
  };

  /* Eliminar Evento */
  const deleteEvent = async (id) => {
    try {
      await deleteProduct(id);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      const updatedList = await getProducts();
      setEvents(updatedList);
    } catch (error) {
      console.log(
        'Ha ocurrido un error al intentar eliminar el evento con id' + id,
        error
      );
      setErrorApi(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    events,
    isLoading,
    errorApi,
    setIsLoading,
    addEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEvents;

/* Primer sprint usando localstorage */
// useEffect(() => {
//   try {
//     const storedEvents = JSON.parse(localStorage.getItem(EVENTS)) || [];
//     if (!storedEvents.length) {
//       localStorage.setItem(EVENTS, JSON.stringify(data));
//       setEvents(data);
//     } else {
//       setEvents(storedEvents);
//     }
//   } catch (error) {
//     console.error('Error al traer la información del localstorage', error);
//     setError(error);
//     setEvents([]);
//   }
// }, []);

// /* Agregar un Evento */
// const addEvent = (newEvent) => {
//   const updatedEvents = [...events, newEvent];
//   setEvents(updatedEvents);
//   localStorage.setItem(EVENTS, JSON.stringify(updatedEvents));
// };

// /* Eliminar un Evento */
// const deleteEvents = (eventId) => {
//   const updatedEvents = events.filter((event) => event.id !== eventId);
//   setEvents([...updatedEvents]);
//   localStorage.setItem(EVENTS, JSON.stringify(updatedEvents));
//   window.dispatchEvent(new Event('storage'));
// };

// useEffect(() => {
//   const handleStorageChange = () => {
//     const updatedEvents = JSON.parse(localStorage.getItem(EVENTS)) || [];
//     setEvents(updatedEvents);
//   };

//   window.addEventListener('storage', handleStorageChange);
//   return () => window.removeEventListener('storage', handleStorageChange);
// }, []);
