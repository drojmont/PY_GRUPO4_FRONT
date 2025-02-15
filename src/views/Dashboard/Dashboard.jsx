import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1 w-full max-w-screen-2xl mx-auto">
      <div className="flex-1 grid grid-cols-[auto_1fr]">
        <section className="row-span-2 ">
          <Sidebar />
        </section>

        <section className="row-span-2 p-3">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
