
import React, { useState } from 'react';
import imagen_1 from '../img/image_1.png';
import imagen_2 from '../img/image_2.png';
import imagen_3 from '../img/image_3.png';
import imagen_4 from '../img/image_4.png';
import imagen_5 from '../img/image_5.png';
import imagen_6 from '../img/image_6.png';

import { FaStore, FaPalette, FaBars, FaPhone, FaRocket, FaGraduationCap } from 'react-icons/fa'; // Importa el icono que necesitas
import { FaQuoteLeft } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import FAQ from './FAQ';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { BellIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { FaTimesCircle } from "react-icons/fa";
import { Button, Input, Select } from '@mui/material';
import { SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import ModalCategoria from './ModalCategoria'
import { Search } from 'lucide-react';

import Proyectos from "./Proyectos"



export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        { id: 1, src: imagen_1, alt: 'Imagen 1', text:'App de Comercio Electrónico', icon: <FaStore /> },
        { id: 2, src: imagen_2, alt: 'Imagen 2', text: 'Diseño de Marca para Startup', icon: <FaPalette /> },
        { id: 3, src: imagen_3, alt: 'Imagen 3', text: 'Analisis de Datos de Mercado', icon: <FaBars /> },
        { id: 4, src: imagen_4, alt: 'Imagen 4', text: 'Desarrollo de App Movil', icon: <FaPhone />},
        { id: 5, src: imagen_5, alt: 'Imagen 5', text: 'Campaña de Marketing Digital', icon: <FaRocket /> },
        { id: 6, src: imagen_6, alt: 'Imagen 6', text: 'Plataforma de Aprendizaje en linea', icon: <FaGraduationCap /> },

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };


    const stats = [
        { icon: '📊', title: 'Proyectos Publicados', value: '10 +' },
        { icon: '👤', title: 'Talentos Registrados', value: '600 +' },
        { icon: '✅', title: 'Tasa de Éxito', value: '40%' },
        { icon: '🌍', title: 'Países Alcanzados', value: '30 +' },
    ];

    const testimonials = [
        {
          name: 'Andrea López',
          role: 'Desarrolladora Full Stack',
          content: 'Gracias a ConnectTalent, pude unirme a proyectos internacionales que me han permitido crecer tanto profesional como personalmente. ¡Muy recomendable!',
          bgColor: 'bg-bgcolor1',
          quoteColor: 'text-blue-400',
        },
        {
          name: 'Sofía Pérez',
          role: 'Emprendedora',
          content: 'Con ConnectTalent, encontré el equipo ideal para llevar mi startup al siguiente nivel. ¡Una herramienta clave para emprendedores!',
          bgColor: 'bg-bgcolor2',
          quoteColor: 'text-purple-400',
        },
        {
          name: 'Manuel Gómez',
          role: 'Ingeniero de Software',
          content: 'Conectar con proyectos interesantes y desafiantes nunca había sido tan fácil. ConnectTalent me ha abierto puertas en industrias que no imaginaba.',
          bgColor: 'bg-bgcolor3',
          quoteColor: 'text-green-400',
        },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };


  return (
    <>
        <div className="flex flex-col min-h-screen bg-[#5145C6]">
            {/* Barra de navegación */}
            <nav className="flex justify-between items-center px-8 py-4">
                <p className="text-[30px] text-[#FFFFFF] font-bold">ConnectTalent</p>
                <div className="space-x-8">
                    <a href="/" className="btn-links">Inicio</a>
                    <a href="/about" className="activo">Proyectos</a>
                    <a href="/services" className="btn-links">Talentos</a>
                    <a href="/contact" className="btn-links">Cómo Funciona</a>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg ">
                    {/* Icono de notificaciones */}
                    <div className="relative">
                        <BellIcon className="h-6 w-6 text-[#FFFFFF] cursor-pointer" />
                        {/* Indicador de notificación */}
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                    </div>

                    {/* Icono de usuario */}
                    <UserCircleIcon className="h-8 w-8 text-[#FFFFFF]" />

                    {/* Nombre de usuario */}
                    <span className="text-[#FFFFFF] font-medium">User Name</span>

                    {/* Botón de flecha abajo */}
                    <button className="flex items-center justify-center p-2 rounded-full  hover:bg-gray-300">
                        <ChevronDownIcon className="h-5 w-5 text-[#FFFFFF] " />
                    </button>
                </div>
            </nav>

            {/* Contenido principal centrado */}
            <div className="flex flex-col gap-4 items-center justify-center flex-grow ">
                <div className="text-center">
                    <h1 className="titulo">
                        Busca el proyecto perfecto para ti
                    </h1>
                </div>

                <div className="bg-white rounded-full shadow-lg p-2 max-w-5xl mx-auto flex flex-wrap md:flex-nowrap gap-2">
                    <div className="flex items-center gap-2 w-full md:w-1/4 px-4">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <input
                        className="border-0 focus-visible:ring-0 text-sm" 
                        placeholder="Categoría"
                        />
                    </div>
          
                    <div className="flex items-center gap-2 w-full md:w-1/4 px-4 border-l border-gray-200">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <input
                        className="border-0 focus-visible:ring-0 text-sm" 
                        placeholder="Habilidades"
                        />
                    </div>
          
                    <div className="flex items-center gap-2 w-full md:w-1/4 px-4 border-l border-gray-200">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input
                        className="border-0 focus-visible:ring-0 text-sm" 
                        placeholder="Ubicación"
                        />
                    </div>
          
                    <div className="flex items-center gap-2 w-full md:w-1/4 px-4 border-l border-gray-200">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <Input
                        className="border-0 focus-visible:ring-0 text-sm" 
                        placeholder="Tipo de colaboración"
                        />
                    </div>
          
                    <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full">
                        <Search className="w-4 h-4" />
                    </Button>
                </div>



            </div>

        </div>


        <Proyectos />





        {/* footer */}
        <Footer />



    </>






  )
}
