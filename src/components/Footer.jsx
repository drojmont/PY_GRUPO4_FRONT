import logo from '../assets/logoApp.png';

const Footer = () => {
    return (
    <footer className="w-full bg-[#3C6E71] text-white mt-auto">
    <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">

        <div className="flex items-center space-x-4 mb-4 sm:mb-0">

            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
            <img src={logo} alt="Logo de la empresa" className="w-full h-full object-cover"/>
            </div>

            <div className="text-sm">
            <p className="font-medium">© 2025 MagicTour Todos los derechos reservados</p>
            </div>
        </div>
        </div>
    </div>
    </footer>
)
}

export default Footer