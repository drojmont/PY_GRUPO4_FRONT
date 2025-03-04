import { useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { uploadImage } from '../../../../../utils/uploadToCloudinaryCAT';
import { createFeatures } from '../../../../../services/featuresService'; 
import { useNavigate } from 'react-router-dom'; 

const AddFeature = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 
  const navigate = useNavigate(); 

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Vista previa de la imagen seleccionada
      setImagePreview(URL.createObjectURL(file));

     
      const uploadedImageUrl = await uploadImage(file); 
      setImage(uploadedImageUrl);
    }
  };

  const handleAddFeature = async () => {
    try {
      const newFeature = {
        name,
        description: image || description, 
      };

      await createFeatures(newFeature); 


      navigate('/administracion/caracteristicas'); 


      setName('');
      setDescription('');
      setImage(null);
      setImagePreview(null);

      console.log('Característica agregada');
    } catch (error) {
      console.error('Error al agregar la característica:', error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold tracking-wide p-4">Agregar Nueva Característica</h2>
      <div className="mb-1 flex flex-col gap-3">
        <Typography variant="h6" color="blue-gray" className="-mb-3 p-4">
          Nombre de la Característica
        </Typography>
        <input
          placeholder="Ej. Tours de Tecnología"
          value={name}
          className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-10 m-4 focus:outline-none focus:border-teal-300"
          onChange={(e) => setName(e.target.value)}
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3 p-4">
          Cambiar Imagen
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 p-4"
        />
        

        {imagePreview && (
          <img src={imagePreview} alt="Vista previa" className="w-48 h-48 object-cover mb-4 p-4" />
        )}
        

        {image && !imagePreview && (
          <img src={image} alt="Imagen cargada" className="w-48 h-48 object-cover mb-4" />
        )}

        <Button color="teal" className="m-4" onClick={handleAddFeature}>Agregar Característica</Button>
      </div>
    </div>
  );
};

export default AddFeature;
