import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';
import { Card } from '@material-tailwind/react';
import { FaRegFaceGrimace } from 'react-icons/fa6';

const Dashboard = () => {
  return (
    <div className=" flex flex-col justify-center md:justify-start flex-1 w-full max-w-screen-2xl mx-auto">

      <Card className="bg-anti-flash-white shadow-lg border-b-4 border-platinum-two p-5 w-11/12 flex flex-col justify-center items-center gap-3 mx-auto my-5 md:hidden">
        <h2 className="text-jet font-bold text-xl text-center ">
          <i>Panel de Administrador</i> no disponible en Móvil
        </h2>
        <FaRegFaceGrimace size={40} />
      </Card>


      <div className="hidden flex-1 md:grid grid-cols-[auto_1fr]">
        <section className="row-span-2 ">
          <Sidebar />
        </section>

        <section className="row-span-2 p-3 overflow-hidden">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
