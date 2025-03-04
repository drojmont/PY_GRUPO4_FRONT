import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoApp.png";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
const Navbar = () => {
  const [userLogin, setUserLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userGoTrip");
    const userToken = localStorage.getItem("token");

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUserLogin(parsedUser);
      } catch (error) {
        console.error("Error al parsear el usuario:", error);
        localStorage.removeItem("userGoTrip");
      }
    }

    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userGoTrip");
    localStorage.removeItem("token");
    setUserLogin(null);
    setToken(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#3C6E71] z-50">
      <nav className="container mx-auto px-2 sm:px-1 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Ir a la página principal"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden bg-white">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block ml-3">
              <h1 className="text-lg font-bold text-white">GO TRIP</h1>
              <p className="text-sm text-gray-100">
                ¡Tu aventura comienza aquí!
              </p>
            </div>
          </Link>
        </div>

        {userLogin ? (
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">
              <HiOutlineUser size={25} />
            </span>
            <span className="text-white font-semibold">
              Hola, {userLogin.user.nombre} {userLogin.user.apellido}
            </span>
            <div className="relative">
              <button
                className="bg-gray-200 text-gray-800 font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {userLogin?.user?.nombre?.charAt(0)}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <button
                    className="flex block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                    onClick={handleLogout}
                  >
                    <HiOutlineLogout size={25} />{" "}
                    <span className="pl-2">Cerrar Sesión</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-white hover:text-gray-200 transition-colors duration-200"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-[#45B5C4] text-white rounded-lg hover:bg-[#3da3b1] transition-colors duration-200"
            >
              Regístrate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
