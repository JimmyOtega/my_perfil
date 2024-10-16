

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



export default function Footer() {
    return (
        <footer className="bg-slate-400 text-white py-8">
            <div className="container mx-auto px-6">
                <p className="text-sm text-center mb-4">© 2024 Tu Nombre. Todos los derechos reservados.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
                    <a href="#" className="hover:text-gray-400 transition duration-200">Inicio</a>
                    <a href="#" className="hover:text-gray-400 transition duration-200">Sobre Nosotros</a>
                    <a href="#" className="hover:text-gray-400 transition duration-200">Servicios</a>
                    <a href="#" className="hover:text-gray-400 transition duration-200">Contacto</a>
                </div>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-600 hover:text-white transition duration-200">
                        <FaFacebook size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white transition duration-200">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white transition duration-200">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-white transition duration-200">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}