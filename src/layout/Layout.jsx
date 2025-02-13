import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1 bg-yellow-400">
        <Outlet />
      </main>
      <Footer/>
      <p className='border-b-4'>NAVBAR</p>
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <p className='border-t-4'>FOOTER</p>
main
    </div>
  );
};

export default Layout;
