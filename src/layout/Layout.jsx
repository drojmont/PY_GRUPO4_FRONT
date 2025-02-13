import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[96px] ">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
