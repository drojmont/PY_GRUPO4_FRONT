import { Button, Card, Typography } from "@material-tailwind/react";
import DefaultImage from "@assets/image-default.svg";
import { useContext, useEffect, useState } from "react";
// import { useNavigate } from 'react-router';
// import useEvents from '../../../../Hooks/useEvents';
import validationCreateProduct from "../../../../utils/validationCreateProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbAlertCircle } from "react-icons/tb";
import ImageUploader from "../../components/AddProduct/components/ImageUploader";
import { uploadImages } from "../../../../utils/uploadToCloudinary";
import { SelectCategory } from "./components/SelectCategory";
import { EventContext } from "../../../../context/ProductContext";

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const { events, fetchEvents } = useContext(EventContext);
  const [availableFeatures, setAvailableFeatures] = useState([]); // Almacena las características disponibles
  const [selectedFeatures, setSelectedFeatures] = useState([]); // Almacena las características seleccionadas
  const [featureInput, setFeatureInput] = useState(""); // Para almacenar lo que el usuario escribe
  const [filteredFeatures, setFilteredFeatures] = useState(availableFeatures); // Características filtradas

  const handleFeatureSelect = (feature) => {
    // Asegurarse de que no se repita la característica seleccionada
    if (!selectedFeatures.find((f) => f.id === feature.id)) {
      setSelectedFeatures((prevSelected) => [...prevSelected, feature]);
  
      // Filtrar la característica seleccionada de la lista filtrada
      setFilteredFeatures((prevFiltered) =>
        prevFiltered.filter((f) => f.id !== feature.id)
      );
    }
    setFeatureInput(""); // Limpiar el campo de búsqueda
  };
  
  const handleFeatureSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFeatureInput(searchTerm);
  
    // Filtrar las características que contienen el texto ingresado y que no están seleccionadas
    const filtered = availableFeatures
      .filter((feature) => feature.name.toLowerCase().includes(searchTerm))
      .filter((feature) => !selectedFeatures.find((f) => f.id === feature.id));
  
    setFilteredFeatures(filtered);
  };
  
const handleFeatureRemove = (id) => {
  setSelectedFeatures((prevSelected) =>
    prevSelected.filter((feature) => feature.id !== id)
  );
};


    const fetchFeatures = async () => {
    try {
    const response = await fetch('http://localhost:8080/api/features'); // Reemplaza esta URL por la real
    if (!response.ok) {
      throw new Error('No se pudo obtener las características');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar las características', error);
    throw error; // Esto permitirá que el error se propague a la función que lo llama
  }
};

  useEffect(() => {
    fetchEvents();
  }, []);

  const [images, setImages] = useState(
    Array(5)
      .fill(null)
      .map(() => ({
        preview: DefaultImage,
        isDefault: true,
      }))
  );
  const [selectedCategory, setSelectedCategory] = useState(0);

  const [inputs, setInputs] = useState({
    name: "",
    //price: '',
    description: "",
    features: [],
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const currentIdEvent = initialData.id;

  useEffect(() => {
    if (images.every((img) => !img.isDefault)) {
      setError((prev) => {
        const newError = { ...prev };
        delete newError.images;
        return newError;
      });
    }
  }, [images]);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        name: initialData.name ?? "",
        price: initialData.price ?? "",
        description: initialData.description ?? "",
        categoryOutputDTO: initialData.categoryOutputDTO?.name ?? "",
      }));

      setImages(
        initialData.images?.map((url) => ({
          preview: url,
          isDefault: false,
        })) ?? []
      );

      setSelectedCategory(initialData.categoryOutputDTO ?? null);
    }
  }, [initialData]);
    // Cargar características desde la base de datos
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchFeatures(); // Asegúrate de que esta función obtenga las características correctamente
          setAvailableFeatures(data); // Suponiendo que data es un array de objetos con { id, name }
        } catch (error) {
          console.error("Error al cargar las características", error);
        }
      };
      fetchData();
    }, []);

    const handleInputsChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
    
      const updatedInputs = {
        ...inputs,
        [name]: value,
        categoryId: selectedCategory,
      };
    
      setInputs(updatedInputs);
    
      // Primero, validamos los campos y actualizamos los errores
      let newErrors = validationCreateProduct(updatedInputs, selectedCategory);
    
      // Verificamos si el nombre ya existe
      if (name === "name") {
        const nameExists = events.some(
          (event) => event.name.toLowerCase() === value.toLowerCase()
        );
    
        if (nameExists) {
          newErrors.nameRepeat = "El nombre ya está en uso";
        }
      }
      if (name === "features") {
        // Convertimos el input en un array separando por comas
        setInputs((prev) => ({
          ...prev,
          features: value.split(",").map((feature) => feature.trim()),
        }));
      } else {
        setInputs((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    
      // Validación de las características
      if (!selectedFeatures.length) {
        newErrors.features = "Debes seleccionar al menos una característica";
      }
    
      const cleanedErrors = { ...error };
      Object.keys(error).forEach((key) => {
        if (!newErrors[key]) delete cleanedErrors[key];
      });
    
      // Actualizar el estado con los errores limpios
      setError({ ...cleanedErrors, ...newErrors });
    };
  /* estefania
  const handleGetCategory = (id) => {
    setSelectedCategory(id);
  };
*/
  const handleGetCategory = (category) => {
    setSelectedCategory(category.id_category);
  };

  const handleSubmitNewProduct = async (e) => {
    e.preventDefault();

    const errors = validationCreateProduct(inputs);

    if (images.some((image) => image.isDefault)) {
      //errors.images = "Debes agregar 5 imágenes para tu evento";
      errors.images = "Debes agregar por lo menos 5 imágenes para tu evento";
    }

    const nameExists = events.some(
      (event) =>
        event.name.toLowerCase() === inputs.name.toLowerCase() &&
        event.id !== currentIdEvent
    );

    if (nameExists) {
      errors.nameRepeat = "El nombre ya está en uso";
    }

    if (selectedCategory === 0) {
      errors.categoryId = "Debes elegir una categoría";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      // Identificar imágenes existentes y nuevas a Cloudinary
      const existingImages = images
        .filter((img) => img.preview.startsWith("https://res.cloudinary.com"))
        .map((img) => img.preview);

      const newImages = images.filter(
        (img) => !img.preview.startsWith("https://res.cloudinary.com")
      );

      // Subir solo imágenes nuevas a Cloudinary
      const uploadedImages = newImages.length
        ? await uploadImages(newImages)
        : [];

      if (uploadedImages.some((url) => !url)) {
        toast("Error al subir algunas imágenes", { type: "error" });
        return;
      }

      const imageUrls = [...existingImages, ...uploadedImages];
      const featureIds = selectedFeatures.map((feature) => feature.id);
      const newProduct = {
        name: inputs.name,
        //price: inputs.price,
        description: inputs.description,
        images: imageUrls,
        categoryId: selectedCategory,
        featureIds: featureIds,
      };

      console.log(newProduct);
      const errorSubmit = onSubmit(newProduct);

      if (!errorSubmit) {
        setInputs({ name: "", /* price: '' */ description: "" });
      }

      setError({});
      setIsLoading(true);
    } catch (error) {
      console.error("Error creando el evento:", error);
      toast("Hubo un problema, intenta de nuevo", { type: "error" });
    }
  };



  
  return (
    <div className="w-full mx-auto flex flex-col items-center pt-3">
      {/* Componente de las Imagenes */}
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
              className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300"
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

            {/*       <Typography variant="h6" color="blue-gray" className="-mb-3">
              Precio del Evento
            </Typography>
            <input
              type="number"
              placeholder="500 USD"
              name="price"
              onChange={handleInputsChange}
              value={inputs.price}
              className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300"
            />
            {error.price && (
              <p className="text-red-400 flex items-center gap-2">
                <TbAlertCircle color="red" />
                {error.price}
              </p>
            )} */}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Seleciona una Categoría
            </Typography>
            {/* Componente que maneja la lista de categorias */}
            <SelectCategory
              onGetCategory={handleGetCategory}
              initialData={initialData}
              setError={setError}
              error={error}
            />
            {error.categoryId && (
              <p className="text-red-400 flex items-center gap-2">
                <TbAlertCircle color="red" />
                {error.categoryId}
              </p>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
  Características
</Typography>

{/* Campo de texto para escribir las características */}
<input
  type="text"
  placeholder="Escribe una característica"
  onChange={handleFeatureSearch}
  value={featureInput}
  className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-300"
/>

{/* Mostrar las características filtradas */}
<div className="mt-2 max-h-40 overflow-auto border-2 rounded-lg py-2">
  {filteredFeatures.map((feature) => (
    <div
      key={feature.id}
      onClick={() => handleFeatureSelect(feature)}
      className="cursor-pointer hover:bg-teal-200 p-2"
    >
      {feature.name}
    </div>
  ))}
</div>

{/* Características seleccionadas */}
<div className="mt-4 flex flex-wrap gap-2">
  {selectedFeatures.map((feature) => (
    <span
      key={feature.id}
      className="bg-teal-200 text-teal-800 px-3 py-1 rounded-lg flex items-center"
    >
      {feature.name}{" "}
      <button
        onClick={() => handleFeatureRemove(feature.id)}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        x
      </button>
    </span>
  ))}
</div>





            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Descripción
            </Typography>
            <textarea
              placeholder="Evento a nivel mundial.."
              name="description"
              onChange={handleInputsChange}
              value={inputs.description}
              className="placeholder:text-gray-500 placeholder:pl-1 border-2 rounded-lg pl-2 h-40 py-2 focus:outline-none focus:border-teal-300"
            />
          </div>
          {error.description && (
            <p className="text-red-400 flex items-center gap-2">
              <TbAlertCircle color="red" />
              {error.description}
            </p>
          )}
          <Button
            className="block mx-auto my-6 bg-sky capitalize text-[16px]"
            type="submit"
            disabled={Object.keys(error).length > 0 || isLoading}
          >
            {Object.keys(initialData)?.length
              ? "Actualizar Evento"
              : "Crear Evento"}
          </Button>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default ProductForm;
