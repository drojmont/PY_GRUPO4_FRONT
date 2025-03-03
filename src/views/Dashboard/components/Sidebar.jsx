import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { HiOutlineInbox } from 'react-icons/hi2';
import { LuShoppingBag } from 'react-icons/lu';
import { RxExit } from 'react-icons/rx';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const menuItems = [
  {
    text: 'Dashboard',
    icon: <HiOutlineInbox size={20} />,
    route: '/administracion',
  },
  {
    text: 'Productos',
    icon: <LuShoppingBag size={20} />,
    route: null,
    subItems: [
      { text: 'Lista', route: 'listar-productos' },
      { text: 'Crear Nuevo', route: 'crear-producto' },
      { text: 'Caracteristicas', route: 'caracteristicas' },
    ],
  },
  {
    text: 'Salir',
    icon: <RxExit size={20} />,
    route: '/',
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(0);

  const { pathname } = useLocation();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-none ">
      <List>
        {menuItems.map((item, index) =>
          item.subItems ? (
            <Accordion
              key={`item-menu-${index}`}
              open={open === index}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === index ? 'rotate-180' : ''
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === index}>
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>{item.icon}</ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    {item.text}
                  </Typography>
                </AccordionHeader>
              </ListItem>

              <AccordionBody className="py-1">
                <List className="p-0">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.route}
                      className={`${
                        pathname === `administrador/${subItem.route}`
                          ? 'bg-blue-gray-300/25'
                          : ''
                      }`}
                    >
                      <ListItem className='pl-14'>{subItem.text}</ListItem>
                    </Link>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
          ) : (
            <Link
              key={`item-menu-${index}`}
              to={item.route}
              className={`${
                pathname === item.route ? 'bg-blue-gray-300/25 rounded-lg' : ''
              }`}
            >
              <ListItem>
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                {item.text}
              </ListItem>
            </Link>
          )
        )}
      </List>
    </Card>
  );
};

export default Sidebar;
