import FeaturesTable from './components/FeaturesTable';

const Features = () => {
  return (
    <section className='w-full max-w-[898px] mx-auto pt-4'>
      <div className="flex flex-row-reverse justify-self-start gap-2">
        <h2 className="text-4xl font-semibold tracking-wide">Tabla de Caracteristicas Creadas</h2>
      </div>
      <FeaturesTable />
    </section>
  );
};

export default Features;
