import {
  Dialog,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react';
import useEvents from '../../../../../Hooks/useEvents';


const DeleteModal = ({ open, onClose, eventId, setOpenModal }) => {

  const { deleteEvents } = useEvents();

  const handleDeleteEvent = () => {
    deleteEvents(eventId)
    setOpenModal(false);
  };

  return (
    <Dialog open={open} handler={onClose} size="xs" className="bg-[#CEE7E2]">
      <DialogBody className="text-center py-5">
        <p>¿Desea Eliminar el producto?</p>
      </DialogBody>
      <DialogFooter className="flex justify-center gap-2 font-light">
        <Button
          color="blue"
          className="rounded-md capitalize font-light"
          onClick={handleDeleteEvent}
        >
          Si
        </Button>
        <Button
          color="red"
          onClick={onClose}
          className="rounded-md capitalize font-light"
        >
          No
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DeleteModal;
