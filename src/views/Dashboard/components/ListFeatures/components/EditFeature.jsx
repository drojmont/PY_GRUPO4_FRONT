import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFeaturesById, updateFeatures } from '../../../../../services/featuresService'; 
import { Button, Typography } from '@material-tailwind/react';
import { uploadImage } from '../../../../../utils/uploadToCloudinaryCAT';

const EditFeature = () => {
  const { id } = useParams();
  const [feature, setFeature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const data = await getFeaturesById(id);
        setFeature(data);
      } catch (error) {
        console.error('Error fetching feature:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeature();
  }, [id]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const uploadedImageUrl = await uploadImage(file); 
      setImage(uploadedImageUrl); 
    }
  };
  

  const handleUpdate = async () => {
    try {
      const updatedFeature = {
        ...feature,
        description: image || feature.description, 
      };
  
      await updateFeatures(id, updatedFeature); 
      navigate('/administracion/caracteristicas');
    } catch (error) {
      console.error('Error updating feature:', error);
    }
  };
  
  
  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h2 className="text-4xl font-semibold tracking-wide p-4">Edición de Características Creadas</h2>
          <div className="mb-1 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3 p-4">
              Nombre de la Característica
            </Typography>
            <input

              name="name"
              value={feature?.name}
              className="placeholder:text-gray-500 border-2 rounded-lg py-2 px-10 m-4 focus:outline-none focus:border-teal-300"
              onChange={(e) => setFeature({ ...feature, name: e.target.value })}
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

            <Button color="teal" className="m-4" onClick={handleUpdate}>Actualizar</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditFeature;
