import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react';
import DefaultImage from '../../../../../assets/imagen-default.jpg';
import {  useState } from 'react';
import { useNavigate } from 'react-router';
import useEvents from '../../../../../Hooks/useEvents';

const CreateProduct = () => {
  
  const { events, addEvent } = useEvents();
  const [images, setImages] = useState(Array(5).fill(DefaultImage));
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedEvents = JSON.parse(localStorage.getItem('events'));
  //   setEvents(storedEvents);
  // }, []);

  const handleImageChange = (index, event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (name === 'name') {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          name: 'El nombre no puede estar vacío',
        }));
      } else if (events.some((event) => event.name === value)) {
        setErrors((prev) => ({
          ...prev,
          name: 'Este nombre de evento ya existe',
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }
  };

  const handleSubmitNewProduct = (e) => {
    e.preventDefault();

    if (!inputs.name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: 'El nombre no puede estar vacío',
      }));
      return;
    }

    if (events.some((event) => event.name === inputs.name)) {
      setErrors((prev) => ({
        ...prev,
        name: 'Este nombre de evento ya existe',
      }));
      return;
    }
    const newProduct = {
      id: events.length + 1,
      name: inputs.name,
      description: inputs.description,
      images: images,
    };

    const verifyName = events.some((event) => event.name === newProduct.name);

    if (verifyName) {
      setErrors({
        name: 'Este nombre de evento ya existe',
      });
    }

    addEvent(newProduct);

    // Limpiar formulario después de agregar
    setInputs({ name: '', description: '' });
    setErrors({});
    navigate('/administrador');
  };

  return (
    <Card className=" w-max mx-auto flex flex-col items-center shadow-lg pt-3">
      <CardBody>
        <h2 className="font-bold border-b mb-5">Agregar Imagen</h2>
        <section className="grid grid-cols-3 place-items-center gap-1">
          {images.map((image, index) => (
            <div
              key={index}
              className={`border rounded-lg relative w-[128px] h-[84px] hover:border-dashed hover:border-2 hover:scale-105 ${
                index === 0 ? 'row-span-2 h-[176px] w-[135px]' : ''
              }`}
            >
              <label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(index, e)}
                />
                <img
                  src={image}
                  alt={`imagen producto ${index}`}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </label>
            </div>
          ))}
        </section>

        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmitNewProduct}
        >
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Nombre del Evento
            </Typography>

            <Input
              size="lg"
              label="Nombre"
              name="name"
              onChange={handleInputsChange}
              value={inputs.name}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Descripción
            </Typography>
            <Textarea
              size="lg"
              label="Descripción"
              name="description"
              onChange={handleInputsChange}
              value={inputs.description}
            />
          </div>

          <Button
            className="mt-6"
            fullWidth
            type="submit"
            disabled={!!errors.name}
          >
            Crear Producto
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default CreateProduct;
