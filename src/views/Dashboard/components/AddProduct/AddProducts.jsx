import { Button } from '@material-tailwind/react';
import { Link } from 'react-router';
import { InboxIcon } from '@heroicons/react/24/solid';
import ProductsTable from '../ListProducts/components/ProductsTable';

const AddProducts = () => {
  return (
    <section className='flex flex-col gap-5'>

      <article className="flex justify-between pt-4">

        <div className="flex flex-row-reverse gap-2">
          <h2 className="text-4xl font-semibold tracking-wide">Dashboard</h2>
          <InboxIcon className="w-10" />
        </div>

        <Link to={'crear-producto'}>
          <Button>Agregar Producto</Button>
        </Link>

      </article>

      <ProductsTable />

    </section>
  );
};

export default AddProducts;
