import { Button, Card, Typography } from '@material-tailwind/react';
import DefaultImage from '@assets/image-default.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useEvents from '../../../../../Hooks/useEvents';
import validationCreateProduct from '../../../../../utils/validationCreateProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbAlertCircle } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';
import ImageUploader from './ImageUploader';

const CreateProduct = () => {
  const { events, addEvent } = useEvents();
  const [images, setImages] = useState(
    Array(5)
      .fill(null)
      .map(() => ({
        preview: DefaultImage,
        isDefault: true,
      }))
  );

  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

   const handleInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    const updatedInputs = {
      ...inputs,
      [name]: value,
    };
  
    setInputs(updatedInputs);
  
    // Primero, validamos los campos y actualizamos los errores
    let newErrors = validationCreateProduct(updatedInputs);
  
    // Verificamos si el nombre ya existe
    if (name === "name") {
      const nameExists = events.some(
        (event) => event.name.toLowerCase() === value.toLowerCase()
      );
  
      if (nameExists) {
        newErrors.nameRepeat = "El nombre ya está en uso";
      }
    }
  
    // Eliminamos errores corregidos
    Object.keys(error).forEach((key) => {
      if (!newErrors[key]) {
        delete error[key];
      }
    });
  
    setError({ ...error, ...newErrors });
  };
  

  /* Envio del nuevo producto */
  const handleSubmitNewProduct = (e) => {
    e.preventDefault();

    const errors = validationCreateProduct(inputs);

    if (images.some((image) => image.isDefault)) {
      errors.images = 'Debes agregar 5 imágenes para tu evento';
    }

    // Verificar si el nombre del evento ya existe antes de enviar
    const nameExists = events.some(
      (event) => event.name.toLowerCase() === inputs.name.toLowerCase()
    );

    if (nameExists) {
      errors.nameRepeat = 'El nombre ya está en uso';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const imageUrls = images.map((image) => image.preview);

    const newProduct = {
      id: uuidv4().slice(0, 3),
      name: inputs.name,
      description: inputs.description,
      images: imageUrls,
    };

    console.log(newProduct);
    addEvent(newProduct);

    toast('Nuevo Evento exitosamente creado!', {
      position: 'top-right',
      type: 'info',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    setInputs({ name: '', description: '' });
    setError({});

    setTimeout(() => {
      navigate('/administracion/listar-productos');
    }, 2000);
  };

  useEffect(() => {
    if (images.every((img) => !img.isDefault)) {
      setError((prev) => {
        const newError = { ...prev };
        delete newError.images;
        return newError;
      });
    }
  }, [images]);

  return (
    <div className="w-full mx-auto flex flex-col items-center pt-3">
      <ImageUploader
        images={images}
        setImages={setImages}
        error={error}
        setError={setError}
      />

      <Card className="w-full max-w-[600px] my-5">
        <form
          className="mt-8 mb-2 w-[90%] max-w-screen-lg mx-auto "
          onSubmit={handleSubmitNewProduct}
        >
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nombre del Evento
            </Typography>

            <input
              placeholder="Tours de Tecnología"
              name="name"
              onChange={handleInputsChange}
              value={inputs.name}
              className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4"
            />
            {error.name && (
              <p className="text-red-400 flex items-center gap-2">
                <TbAlertCircle color="red" />
                {error.name}
              </p>
            )}
            {error.nameRepeat && (
              <p className="text-red-400 flex items-center gap-2">
                <TbAlertCircle color="red" />
                {error.nameRepeat}
              </p>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Descripción
            </Typography>
            <textarea
              placeholder="Evento a nivel mundial.."
              name="description"
              onChange={handleInputsChange}
              value={inputs.description}
              className="placeholder:text-gray-500 placeholder:pl-1 border-2 rounded-lg pl-2 h-40 py-2"
            />
          </div>
          {error.description && (
            <p className="text-red-400 flex items-center gap-2">
              <TbAlertCircle color="red" />
              {error.description}
            </p>
          )}
          <Button
            className="block mx-auto mt-6 bg-sky capitalize text-[16px]"
            type="submit"
            disabled={Object.keys(error).length > 0}
          >
            Crear Producto
          </Button>
        </form>
      </Card>

      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
