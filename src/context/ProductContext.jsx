import { createContext, useEffect, useState } from 'react';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/productService';

export const EventContext = createContext();

export const ProductContext = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErrorApi] = useState('');


  const fetchEvents = async () => {
    try {
      const data = await getProducts();
      setEvents([...data]);
      // console.log("eventos", data)
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setErrorApi(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  /* Listar Eventos */
  useEffect(() => {
    fetchEvents();
  }, []);

  /* Agregar un Evento */
  const addEvent = async (newEvent) => {
    try {
      await createProduct(newEvent);
      const updatedList = await getProducts();
      setEvents([...updatedList]);
      // return null; // Sin error
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
      setEvents([...updatedList]);
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

      // ✅ Actualiza el estado eliminando el evento directamente
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
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

  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        errorApi,
        fetchEvents,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
