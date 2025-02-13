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
import {
  ShoppingBagIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import {/*  ChevronRightIcon, */ ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const menuItems = [
  {
    text: 'Dashboard',
    icon: <InboxIcon className="h-5 w-5" />,
    route: '/administrador',
  },
  {
    text: 'Productos',
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    route: null,
    subItems: [
      { text: 'Lista', route: 'listar-productos' },
      { text: 'Crear Nuevo', route: 'crear-producto' },
    ],
  },
  {
    text: 'Salir',
    icon: <PowerIcon className="h-5 w-5" />,
    route: '/',
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(0);

  const { pathname } = useLocation();
  // console.log(pathname);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
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
                      <ListItem>
                        <ListItemPrefix>
                          {/* <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          /> */}
                        </ListItemPrefix>
                        {subItem.text}
                      </ListItem>
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
