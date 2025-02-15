import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { useState } from 'react';
import useEvents from '../../../../../Hooks/useEvents';
import { MdOutlineEdit } from 'react-icons/md';
import { LuTrash2 } from 'react-icons/lu';
import PaginationTable from './PaginationTable';
import DeleteModal from './DeleteModal';

const TABLE_HEAD = ['Id', 'Nombre', 'Acciones'];

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
  const { events, isLoading } = useEvents();

  //Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(events?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEventsPerPage = events?.slice(indexOfFirstItem, indexOfLastItem);

  const [openModal, setOpenModal] = useState(false);

  return (
    <Card className="h-full w-full mx-auto max-w-[900px] border mb-5">
      <CardBody className="max-h-[540px] overflow-hidden p-0 ">
        <table className=" w-full min-w-max table-auto text-left ">
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
              currentEventsPerPage?.map(({ id, name, images }, index) => {
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
                      <Tooltip
                        content="Editar"
                        className="bg-anti-flash-white text-jet"
                      >
                        <IconButton variant="text">
                          <MdOutlineEdit size={18} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip
                        content="Eliminar"
                        className="bg-anti-flash-white text-jet"
                      >
                        <IconButton
                          variant="text"
                          onClick={() => setOpenModal(true)}
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
      {/* Componente del modal para eliminar un producto */}
      <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
    </Card>
  );
};

export default ProductsTable;
