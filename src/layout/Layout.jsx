import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <p className="bg-blue-gray-300">NAVBAR</p>
      <main className="flex-1 bg-yellow-400">
        <Outlet />
      </main>
      <p className="bg-purple-300">FOOTER</p>
    </div>
  );
};

export default Layout;
