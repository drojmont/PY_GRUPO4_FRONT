import { useNavigate } from "react-router";
import useEvents from "../../../../../Hooks/useEvents";
import { toast } from "react-toastify";
import ProductForm from "../ProductForm";


const CreateProduct=()=>{

  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const handleCreate = async (newProduct) => {

    const submitError = await addEvent(newProduct);
  
        if (submitError) {
          toast(`Ocurrio un error inesperado al crear el evento`, {
            type: 'error',
            autoClose: 1500,
          });
          // Cuando me traiga el mjs del backend
          // toast(`Ocurrio un error inesperado al crear el evento: ${submitError}`, {
          //   type: 'error',
          //   autoClose: 1500,
          // });
          return submitError;
        }
  
        toast('Nuevo Evento creado con éxito!', {
          position: 'top-right',
          type: 'success',
          autoClose: 1500,
        });

        setTimeout(() => {
          navigate('/administracion/listar-productos');
        }, 2000);
  
  };

  return <ProductForm onSubmit={handleCreate} />;
}

export default CreateProduct;
