import FeaturesTable from './components/FeaturesTable';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className='w-full max-w-[898px] mx-auto pt-4'>
      <div className="flex flex-row-reverse justify-self-start gap-2">
        <h2 className="text-4xl font-semibold tracking-wide">Tabla de Caracteristicas</h2>
        
      </div>
      <p className="text-platinum my-5">Mira mas informacion sobre las Caracteristicas de los eventos.</p>
      <button
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all mb-6"
      >
        <Link to="/administracion/agregar-caracteristica">Agregar Característica</Link>
      </button>
      <FeaturesTable />
    </section>
  );
};

export default Features;
