import { Link } from 'react-router';
import logo from '../assets/logoApp.png';
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-[#3C6E71] z-50">
        <nav className="container mx-auto px-2 sm:px-1 py-2 flex justify-between items-center">
        <div className="flex items-center">
            <Link to="/" aria-label="Ir a la página principal" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden bg-white">
                <img 
                src={logo} 
                alt="Logo" 
                className="w-full h-full object-cover"
                />
            </div>
            
            <div className="hidden sm:block ml-3">
                <h1 className="text-lg font-bold text-white">GO TRYP</h1>
                <p className="text-sm text-gray-100">Tu aventura comienza aquí</p>
            </div>
            </Link>
        </div>

        <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white hover:text-gray-200 transition-colors duration-200">Iniciar Sesón</button>
            <button className="px-6 py-2 bg-[#45B5C4] text-white rounded-lg hover:bg-[#3da3b1] transition-colors duration-200">Regístrate</button> 
        </div>
        </nav>
    </header>
)
}

export default Navbar