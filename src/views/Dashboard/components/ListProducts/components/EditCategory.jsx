import { SelectCategory } from "../../AddProduct/components/SelectCategory";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  getProductById,
  getProducts,
  updateProduct,
} from "../../../../../services/productService";
import { useEffect, useState } from "react";

const EditCategory = ({ open, onClose, eventId, setEvents, setOpenModal }) => {
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});

  const onCloseResetSelectedCartegory = () => {
    setSelectedCategory({});
    onClose();
  };

  useEffect(() => {
    const fetchEventCategory = async () => {
      if (open && eventId) {
        try {
          const dataEvent = await getProductById(eventId);
          setSelectedCategory(dataEvent.categoryOutputDTO || {});
        } catch (error) {
          console.error("Error al obtener la categoría:", error);
        }
      }
    };
    fetchEventCategory();
  }, [open, eventId]);

  // Manejar el cambio de categoría
  const handleGetCategoryId = async () => {
    if (!selectedCategory) return;

    setIsLoadingCategory(true);
    try {
      const dataEvent = await getProductById(eventId);
      const { categoryOutputDTO, ...eventWithoutCategory } = dataEvent;

      const changeCategoryEvent = {
        ...eventWithoutCategory,
        categoryId: selectedCategory.id_category,
      };

      await updateProduct(eventId, changeCategoryEvent);
      const updatedEvents = await getProducts();
      setEvents(updatedEvents);
      onCloseResetSelectedCartegory();
    } catch (error) {
      console.error("Ha ocurrido un error al cambiar la categoría:", error);
    } finally {
      setIsLoadingCategory(false);
    }
  };

  return (
    <Dialog
      open={open}
      handler={onCloseResetSelectedCartegory}
      size="xs"
      className="bg-[#CEE7E2]"
    >
      <DialogBody className="text-center pb-0">
        <p>Editar categoría del Evento</p>
      </DialogBody>
      <DialogFooter className="flex flex-col gap-4 items-center font-light">
        <SelectCategory
          onGetCategory={(category) => setSelectedCategory(category)}
          valueCategoryModal={selectedCategory}
        />

        <div className="flex gap-2">
          <Button
            color="blue"
            onClick={handleGetCategoryId}
            className="rounded-md capitalize font-light"
            disabled={isLoadingCategory}
          >
            {isLoadingCategory ? <p>Actualizando Categoría...</p> : "Aceptar"}
          </Button>

          <Button
            color="red"
            onClick={onClose}
            className="rounded-md capitalize font-light"
            disabled={isLoadingCategory}
          >
            Cancelar
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default EditCategory;
