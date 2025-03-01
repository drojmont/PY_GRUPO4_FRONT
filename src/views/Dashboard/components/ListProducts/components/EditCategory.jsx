import { SelectCategory } from '../../AddProduct/components/SelectCategory';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import {
  getProductById,
  getProducts,
  updateProduct,
} from '../../../../../services/productService';

const EditCategory = ({ open, onClose, eventId, setEvents, setOpenModal }) => {
  const handleGetCategoryId = async (categoryId) => {
    try {
      const dataEvent = await getProductById(eventId);
      const { categoryOutputDTO, ...eventWithoutCategory } = dataEvent;
      const changeCategoryEvent = {
        ...eventWithoutCategory,
        categoryId,
      };
      await updateProduct(eventId, changeCategoryEvent);
      const updateEvents = await getProducts();
      setEvents([...updateEvents]);
      setOpenModal(false);
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
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
