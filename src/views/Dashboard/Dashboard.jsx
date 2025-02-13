import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    
    <div className="bg-white grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <section className="row-span-2">
        <Sidebar />
      </section>

      <section className="row-span-2 p-3">
        <Outlet />
      </section>
    </div>
    
  );
};

export default Dashboard;
