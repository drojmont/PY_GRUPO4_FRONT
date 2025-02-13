import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <p className='border-b-4'>NAVBAR</p>
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <p className='border-t-4'>FOOTER</p>
    </div>
  );
};

export default Layout;
