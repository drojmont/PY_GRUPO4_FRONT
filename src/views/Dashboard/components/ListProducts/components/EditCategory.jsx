import { useEffect } from 'react';
import { SelectCategory } from '../../AddProduct/components/SelectCategory';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { getProductById, updateProduct } from '../../../../../services/productService';
import { getCategoryById } from '../../../../../services/categoryService';

const EditCategory = ({ open, onClose, eventId, setOpenModal }) => {
console.log("id del evento", eventId)
  // useEffect(()=>{
  //  const fetchEvent =async()=>{
    
  //  }
  //  fetchEvent()
  // },[])

  const handleGetCategoryId = async (categoryId) => {
    console.log("id de la categoria",categoryId);
    try {
      const dataEvent= await getProductById(eventId);
      console.log("evento obtenido", dataEvent)
      // const dataCategory= await getCategoryById(categoryId);
      // console.log("categoria obtenida", dataCategory)
      const { categoryOutputDTO, ...eventWithoutCategory } = dataEvent;
      const changeCategoryEvent = {
        ...eventWithoutCategory,
        categoryId, 
      };
      console.log("🔍 Objeto enviado al backend:", changeCategoryEvent);
      const updateEvent = await updateProduct(eventId, changeCategoryEvent);
      console.log("evento actulizado en la lista", updateEvent)
     } catch (error) {
      console.log("Ha ocurrido un error", error)
     }
    // setOpenModal(false);
  };

  return (
    <Dialog open={open} handler={onClose} size="xs" className="bg-[#CEE7E2]">
      <DialogBody className="text-center py-5">
        <p>Editar categoría del Evento</p>
      </DialogBody>
      <DialogFooter className="flex justify-center gap-2 font-light">
        <SelectCategory onGetCategory={handleGetCategoryId} />
      </DialogFooter>
    </Dialog>
  );
};

export default EditCategory;
