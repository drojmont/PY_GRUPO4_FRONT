import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
} from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
// import useEvents from '../../../../../Hooks/useEvents';
import { MdOutlineEdit } from 'react-icons/md';
import { LuTrash2 } from 'react-icons/lu';
import PaginationTable from './PaginationTable';
import DeleteModal from './DeleteModal';
import { useNavigate } from 'react-router';
import EditCategory from './EditCategory';
import { EventContext } from '../../../../../context/ProductContext';
import { getProducts } from '../../../../../services/productService';

const TABLE_HEAD = ['Id', 'Nombre', 'Categoría', 'Acciones'];

const TABLE_ROWS = [
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
    name: 'John Michael',
    email: 'john@creative-tim.com',
    job: 'Manager',
    org: 'Organization',
    online: true,
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
    name: 'Alexa Liras',
    email: 'alexa@creative-tim.com',
    job: 'Programator',
    org: 'Developer',
    online: false,
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
    name: 'Laurent Perrier',
    email: 'laurent@creative-tim.com',
    job: 'Executive',
    org: 'Projects',
    online: false,
    date: '19/09/17',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
    name: 'Michael Levi',
    email: 'michael@creative-tim.com',
    job: 'Programator',
    org: 'Developer',
    online: true,
    date: '24/12/08',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
    name: 'Richard Gran',
    email: 'richard@creative-tim.com',
    job: 'Manager',
    org: 'Executive',
    online: false,
    date: '04/10/21',
  },
];

const ProductsTable = () => {
  
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [eventId, setEventId] = useState(null);

  /* Paginado */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(events?.length / itemsPerPage);
    // Estado para los eventos paginados
  const [currentEventsPerPage, setCurrentEventsPerPage] = useState([]);
 

  useEffect(() => {
    const api = async () => {
      try {
        const response = await getProducts();
        setEvents([...response]);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      } finally {
        setIsLoading(false);
      }
    };
    api();
  }, []);

  // Actualiza la lista paginada cuando cambien los eventos o la página actual
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const sortedEvents = events.sort((a, b) => a.id - b.id);
    const updateEvents = sortedEvents?.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentEventsPerPage(updateEvents);
  }, [events, currentPage, itemsPerPage]);

  const [openModal, setOpenModal] = useState(false);
  const [openModalCategory, setOpenModalCategory] = useState(false);

  const navigate = useNavigate();

  const handleGetIdDeleteIcon = (id) => {
    setEventId(id);
    setOpenModal(true);
  };

  const handleUpdateProduct = (id) => {
    navigate(`/administracion/editar-producto/${id}`);
  };

  const handleUpdateCategory = (id) => {
    console.log('hadle que obtine categoria para el padre table', id);
    setEventId(id);
    setOpenModalCategory(true);
  };

  
        
  return (
    <Card className="h-full w-full mx-auto max-w-[900px] border mb-5">
      <CardBody className="max-h-[540px] overflow-hidden  overflow-x-auto p-0 ">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`${head === 'Id' && 'rounded-tl-xl'} ${
                    head === 'Acciones' && 'rounded-tr-lg'
                  } border-b border-blue-gray-100 bg-anti-flash-white p-4 `}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 pl-4"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <p>Cargando eventos...</p>
                </td>
              </tr>
            ) : (
              currentEventsPerPage?.map(({ id, name, images, categoryOutputDTO }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 ';

                return (
                  <tr
                    key={`item-product-${id}`}
                    className="border-b border-anti-flash-white border-[3px] "
                  >
                    <td className={classes}>
                      <div className="flex flex-col px-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={images[0]} alt={name} size="lg" />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col px-2">
                        <Chip
                          className="capitalize bg-transparent pr-2"
                          value={
                            <div className="pr-2 text-blue-gray-400">
                              <Tooltip
                                content="Editar categoría"
                                className="bg-anti-flash-white text-jet"
                              >
                                <IconButton
                                  variant="text"
                                  onClick={() => handleUpdateCategory(id)}
                                >
                                  <MdOutlineEdit size={18} />
                                </IconButton>
                              </Tooltip>{' '}
                              {!categoryOutputDTO
                                ? 'Sin categoría'
                                : categoryOutputDTO.name}
                            </div>
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip
                        content="Editar evento"
                        className="bg-anti-flash-white text-jet"
                      >
                        <IconButton
                          variant="text"
                          onClick={() => handleUpdateProduct(id)}
                        >
                          <MdOutlineEdit size={18} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        content="Eliminar evento"
                        className="bg-anti-flash-white text-jet"
                      >
                        <IconButton
                          variant="text"
                          onClick={() => handleGetIdDeleteIcon(id)}
                        >
                          <LuTrash2 size={16} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center gap-3 border-t border-blue-gray-50 p-4">
        <PaginationTable
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </CardFooter>
      {/* Editar Categoría */}
      <EditCategory
        open={openModalCategory}
        onClose={() => setOpenModalCategory(false)}
        eventId={eventId}
        setOpenModal={setOpenModalCategory}
        setEvents={setEvents}
      />
      {/* Componente del modal para eliminar un producto */}
      <DeleteModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        setOpenModal={setOpenModal}
        eventId={eventId}
        setEvents={setEvents}
      />
    </Card>
  );
};

export default ProductsTable;
