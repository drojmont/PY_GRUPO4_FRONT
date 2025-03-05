import { LuUsers } from 'react-icons/lu'; // Changed to LuUsers
import UsersTable from './components/UsersTable';

const ListUsers = () => {
  return (
    <section className='w-full max-w-[898px] mx-auto pt-4'>
      <div className="flex flex-row-reverse justify-self-start gap-2 items-center">
        <h2 className="text-4xl font-semibold tracking-wide">Gestión de Usuarios</h2>
        <LuUsers size={40} /> {/* Changed to LuUsers */}
      </div>
      
      <p className="text-platinum my-5">
        Administra los permisos de los usuarios registrados en la plataforma.
      </p>
      
      <UsersTable />
    </section>
  );
};

export default ListUsers;