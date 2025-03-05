import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import viajeGlobo from '../assets/viaje en globo.jpg';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correoElectronico: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido';
        } else if (formData.nombre.length <= 3) {
            newErrors.nombre = 'Ingresa un nombre valido';
        }
    
        if (!formData.apellido.trim()) {
            newErrors.apellido = 'El apellido es requerido';
        } else if (formData.apellido.length <= 4) {
            newErrors.apellido = 'Ingresa un apellido valido';
        }

        if (!formData.correoElectronico.trim()) {
            newErrors.correoElectronico = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.correoElectronico)) {
            newErrors.correoElectronico = 'El correo electrónico no es válido';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL_DEVELOPMENT || 'http://localhost:8080';
            const response = await axios.post(`${apiUrl}/api/user/registro`, formData);

            if (response.status === 201) {
                navigate('/login', { state: { message: '¡Registro exitoso!' } });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors({
                    api: error.response.data.message || 'Ocurrió un error durante el registro'
                });
            } else {
                setErrors({ api: 'Error de conexión. Intente nuevamente más tarde.' });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${viajeGlobo})` }}>
            <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">¡Bienvenido a GO Trip!</h2>

                {errors.api && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {errors.api}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={`w-full p-3 bg-green-50 rounded-md ${errors.nombre ? 'border border-red-500' : ''}`}
                        />
                        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="apellido"
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className={`w-full p-3 bg-green-50 rounded-md ${errors.apellido ? 'border border-red-500' : ''}`}
                        />
                        {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="correoElectronico"
                            placeholder="Correo Electrónico"
                            value={formData.correoElectronico}
                            onChange={handleChange}
                            className={`w-full p-3 bg-green-50 rounded-md ${errors.correoElectronico ? 'border border-red-500' : ''}`}
                        />
                        {errors.correoElectronico && <p className="text-red-500 text-sm mt-1">{errors.correoElectronico}</p>}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full p-3 bg-green-50 rounded-md ${errors.password ? 'border border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition duration-300"
                    >
                        {isSubmitting ? 'Registrando...' : 'Registrarse'}
                    </button>

                    <p className="mt-4 text-center">
                        ¿Ya tienes una cuenta?{' '}
                        <a href="/login" className="text-teal-600 hover:underline">
                            Iniciar sesión
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;