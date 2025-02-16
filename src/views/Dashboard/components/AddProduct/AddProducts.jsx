import { Button, Card } from '@material-tailwind/react';
import { Link } from 'react-router';
import { HiOutlineInbox } from 'react-icons/hi2';
import ProductsTable from '../ListProducts/components/ProductsTable';

const AddProducts = () => {
  return (
    <section className="flex flex-col gap-5">
      <article className="flex justify-between pt-4 w-full max-w-[898px] mx-auto">
        <div className="flex flex-row-reverse gap-2">
          <h2 className="text-4xl font-semibold tracking-wide">Dashboard</h2>
          <HiOutlineInbox size={40} />
        </div>

        <Link to={'crear-producto'}>
          <Button className="bg-sky capitalize font-light tracking-wider">
            Agregar Producto
          </Button>
        </Link>
      </article>

      <Card className="bg-anti-flash-white shadow-lg border-b-4 border-platinum-two pl-6 pt-5 pb-10 w-full max-w-[898px] mx-auto mt-5">
        <h2 className="text-jet font-bold text-xl">Tabla de Eventos Creados</h2>
        <p className="text-platinum mt-3">
          Mira más información sobre el evento.
        </p>
      </Card>

      <ProductsTable />
    </section>
  );
};

export default AddProducts;
