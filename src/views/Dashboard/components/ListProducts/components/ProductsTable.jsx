// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  TrashIcon /* UserPlusIcon  */,
} from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  // Input,
  Typography,
  Button,
  CardBody,
  // Chip,
  CardFooter,
  // Tabs,
  // TabsHeader,
  // Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { useState } from 'react';
import useEvents from '../../../../../Hooks/useEvents';

// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];

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

  const {events, isLoading}=useEvents()

  //Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEventsPerPage = events?.slice(indexOfFirstItem, indexOfLastItem);

 
  return (
    <Card className="h-full w-full mx-auto max-w-[900px] border">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Tabla de Eventos Creados
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Mira más información sobre cada evento.
            </Typography>
          </div>
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm">
                  view all
                </Button>
                <Button className="flex items-center gap-3" size="sm">
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
                </Button>
              </div> */}
        </div>
        {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div> */}
      </CardHeader>
      <CardBody className="max-h-[540px] overflow-hidden px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
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
                    className="border-b border-blue-gray-50"
                  >
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                        {/* <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-70"
              >
                {email}
              </Typography> */}
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
                    {/* <td className={classes}>
          <div className="w-max">
            <Chip
              variant="ghost"
              size="sm"
              value={online ? "online" : "offline"}
              color={online ? "green" : "blue-gray"}
            />
          </div>
        </td> */}
                    {/* <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {date}
          </Typography>
        </td> */}
                    <td className={classes}>
                      <Tooltip content="Editar">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Eliminar">
                        <IconButton variant="text">
                          <TrashIcon className="h-4 w-4" />
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
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal dark:text-white"
        >
          Páginas {currentPage} de{' '}
          {events?.length ? Math.ceil(events?.length / itemsPerPage) : 0}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            className=" dark:text-white dark:border-white"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previos
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(events?.length / itemsPerPage)}
            className="dark:text-white dark:border-white"
          >
            Siguientes
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductsTable;
