import { useParams, useNavigate } from 'react-router';
import ProductForm from '../ProductForm';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getProductById } from '../../../../../services/productService';
import { EventContext } from '../../../../../context/ProductContext';

const EditProduct = () => {
  const { id } = useParams();
  const { updateEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(
          'Ocurrio un error al obtener la información del evento',
          error
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdate = async (updatedProduct) => {
    const error = await updateEvent(id, updatedProduct);
    if (error){
     toast.error('Error al actualizar el producto');
     return error; 
    }
    toast.success('Producto actualizado con éxito',{ type: 'success',
      autoClose: 1500,});
    setTimeout(()=>{
      navigate('/administracion/listar-productos');
    },2000)
  };

  return (
    <div className="h-full flex flex-col items-center justify-center ">
      {isLoading ? (
        <p className="text-center">Cargando Evento...</p>
      ) : (
        <ProductForm onSubmit={handleUpdate} initialData={product} />
      )}
    </div>
  );
};

export default EditProduct;
