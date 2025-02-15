import ProductsTable from './components/ProductsTable';
import { LuTable2 } from 'react-icons/lu';

const ListProducts = () => {
  return (
    <section className='pt-4'>
      <div className="flex flex-row-reverse justify-self-start gap-2">
        <h2 className="text-4xl font-semibold tracking-wide">Tabla de Eventos Creados</h2>
        <LuTable2 size={40} />
      </div>

      <p className="text-platinum my-3 ">
        Mira más información sobre el evento.
      </p>

      <ProductsTable />
    </section>
  );
};

export default ListProducts;
