import { useState, useEffect } from 'react';

const Profile = () => {
  const [userLogin, setUserLogin] = useState(null);

  useEffect(() => {   
    if (localStorage.getItem("userGoTrip")) {
      setUserLogin(JSON.parse(localStorage.getItem("userGoTrip")));
    } else {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-cover bg-center bg-gray-100" 
                style={{ height: 'calc(100vh - 168px)' }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-2">Perfil de Usuario</h2>
        
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-3xl text-white">👤</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="text-gray-600 font-semibold">Nombre:</label>
            <span className="text-gray-700">{userLogin?.user.nombre}</span>
          </div>

          <div className="flex justify-between">
            <label className="text-gray-600 font-semibold">Apellido:</label>
            <span className="text-gray-700">{userLogin?.user.apellido}</span>
          </div>

          <div className="flex justify-between">
            <label className="text-gray-600 font-semibold">Correo Electrónico:</label>
            <span className="text-gray-700">{userLogin?.user.correoElectronico}</span>
          </div>

          <div className="flex justify-between">
            <label className="text-gray-600 font-semibold">Rol:</label>
            <span className="text-gray-700">{userLogin?.user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
