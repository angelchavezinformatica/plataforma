import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import banner from '../img/banner.png'
import { MoreHorizontal, MessageCircle, Pencil } from 'lucide-react'
import { BellIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/outline';

import imagen_1 from '../img/image_1.png';
import imagen_2 from '../img/image_2.png';
import imagen_3 from '../img/image_3.png';
import imagen_4 from '../img/image_4.png';
import imagen_5 from '../img/image_5.png';
import imagen_6 from '../img/image_6.png';

import { FaStore, FaPalette, FaBars, FaPhone, FaRocket, FaGraduationCap } from 'react-icons/fa'; // Importa el icono que necesitas


import diseñador_principal from '../img/diseñador_principal.png'
import diseñador_productos from '../img/diseñador_productos.png'
import investigador from '../img/investigador.png'

import unt from '../img/unt.png'
import icpna from '../img/icpna.png'
import idat from '../img/idat.png'
import ModalPostulacion from './ModalPostulacion'

export default function Home() {

    const [activePage, setActivePage] = useState("Mis Proyectos");
    const [currentIndex, setCurrentIndex] = useState(0);

    const experiencia = [

        {   
            title: "Diseñador Principal de Productos",
            company: "Coinbase",
            period: "Mayo 2020 - Presente",
            logo: diseñador_principal,
        },

        {
            title: "Diseñador de Productos",
            company: "Linear",
            period: "Enero 2018 - Mayo 2020",
            logo: diseñador_productos,
        },

        {
            title: "Investigador de Usuarios",
            company: "Loom",
            period: "Marzo 2017 - Enero 2018",
            logo: investigador,
        },

    ]

    const educacion = [

        {   
            title: "Ingeneria Informatica",
            company: "Universidad Nacional de Trujillo",
            period: "Mayo 2014 - Diciembre 2019",
            logo: unt,
        },

        {
            title: "Ingles Intermedio",
            company: "ICPNA",
            period: "Enero 2017 - Mayo 2019",
            logo: icpna,
        },

        {
            title: "Diseño Grafico Digital",
            company: "IDAT",
            period: "Marzo 2015 - Enero 2018",
            logo: idat,
        },

    ]

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

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href =
          'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
        document.head.appendChild(link);
      }, []);

    const handleMenuClick = (page) => {
        setActivePage(page);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    
    useEffect(() => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
          document.head.appendChild(link);
      
          return () => {
            // Limpieza: eliminar el enlace al desmontar el componente
            document.head.removeChild(link);
          };
        }, []);
      
    
  return (
    <>
        <div className='flex flex-col h-screen' >
            <nav className="flex justify-between items-center px-8 py-1">
                <div className="space-x-8 flex items-center justify-center">
                    <p className="text-[30px] text-[#20274D] font-bold">ConnectTalent</p>
                    <p className="text-[20px] text-[#434247] font-bold">Proyectos</p>
                    <p className="text-[20px] text-[#434247] font-bold">Desarrollo de una app Movil</p>


                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg ">
                    {/* Icono de notificaciones */}
                    <div className="relative">
                        <BellIcon className="h-6 w-6 text-[#434247] cursor-pointer" />
                        {/* Indicador de notificación */}
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                    </div>

                    {/* Icono de usuario */}
                    <UserCircleIcon className="h-8 w-8 text-[#434247]" />

                    {/* Nombre de usuario */}
                    <span className="text-[#434247] font-medium">User Name</span>

                    {/* Botón de flecha abajo */}
                    <button className="flex items-center justify-center p-2 rounded-full  hover:bg-gray-300">
                        <ChevronDownIcon className="h-5 w-5 text-[#434247] " />
                    </button>
                </div>
            </nav>

            <div className='w-full p-3'>
                <div className="w-full">
                  {/* Banner Image */}
                  <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
                      <img
                      src={banner}
                      alt="Project banner"
                      className="w-full h-full object-cover"
                      />
                  </div>

                  {/* Project Header Content */}
                  <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="space-y-1">
                              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                  Desarrollo de una App Móvil
                              </h1>
                              <p className="text-gray-600">
                              Categoría: Desarrollo de Software - Aplicaciones Móviles
                              </p>
                          </div>

                          <div className="flex items-center gap-2">
                              <button variant="ghost" size="icon" className=" border-2 border-[#B7B7B7] p-2 rounded-[5px] text-gray-500 hover:text-gray-600">
                                  <MoreHorizontal className="h-5 w-5" />
                              </button>
                              
                              <button variant="outline" className="gap-2 flex border-2 border-[#B7B7B7] rounded-[5px] p-2">
                                  <MessageCircle className="h-4 w-4" />
                                  Mensaje
                              </button>
                              
                              <button onClick={handleModalToggle} 
                              className="gap-2 bg-[#1E1B4B] text-[#ffffff] hover:bg-[#1E1B4B]/90 flex items-center rounded-[5px] border-2 p-2">
                                  <Pencil className="h-4 w-4" />
                                  Postular
                              </button>
                          </div>
                      </div>
                  </div>

                    {/* Modal */}
                        {isModalOpen && (
                        <ModalPostulacion handleModalToggle={handleModalToggle} />
                    )}


                  <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="space-y-1">
                              <h2 className="text-xl font-semibold mb-4">Descripción del proyecto</h2>
                              <p>Este proyecto tiene como objetivo desarrollar una aplicación móvil de gestión <br></br>
                                  de tareas que permita a los usuarios organizar su día a día de forma sencilla e <br></br>
                                  intuitiva. La app ofrecerá funciones como recordatorios, integración de <br></br>
                                  calendarios y listas personalizables. Se espera que la app sea compatible <br></br>
                                  tanto con Android como con iOS y que incluya una interfaz moderna y fácil de usar.
                              </p>

                              <div>
                                  <h3 className="font-medium mb-2">Duración del proyecto:</h3>
                                  <p className="text-gray-600">
                                  6 meses, con posibilidad de extensión para mantenimiento y actualizaciones.
                                  </p>
                              </div>
                          </div>

                          <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-y-6 gap-x-12 ">
                                  <div>
                                      <h3 className="text-sm font-medium text-gray-500">Empresa:</h3>
                                      <div className="mt-1 flex items-center">
                                      <div className="h-6 w-6 bg-black rounded-sm mr-2" />
                                      <span className="font-medium">HiBrand</span>
                                      </div>
                                  </div>

                                  <div>
                                      <h3 className="text-sm font-medium text-gray-500">Ubicación:</h3>
                                      <p className="mt-1 font-medium">Trujillo, Perú.</p>
                                  </div>

                                  <div>
                                      <h3 className="text-sm font-medium text-gray-500">Modalidad:</h3>
                                      <p className="mt-1 font-medium">Remoto</p>
                                  </div>

                                  <div>
                                      <h3 className="text-sm font-medium text-gray-500">Tipo de compromiso:</h3>
                                      <p className="mt-1 font-medium">Jornada completa</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <hr className='border-1 border-[#9B9F9E]'></hr>

                  <div className="mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="pt-6 pb-6">
                          <h2 className="text-xl font-semibold mb-6">Requisitos del Candidato</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                          {/* Left Column */}
                              <div className="space-y-6">
                                  <div>
                                      <h3 className="font-medium mb-3">Habilidades o competencias clave necesarias:</h3>
                                      <ul className="space-y-2 text-gray-600">
                                          <li>• Desarrollo en Flutter y/o React Native.</li>
                                          <li>• Experiencia con integración de APIs RESTful.</li>
                                          <li>• Familiaridad con patrones de diseño de aplicaciones móviles.</li>
                                      </ul>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Requisitos y calificaciones:</h3>
                                      <ul className="space-y-2 text-gray-600">
                                          <li>• Experiencia mínima de 2 años en desarrollo de aplicaciones móviles.</li>
                                          <li>• Conocimiento en diseño de interfaces de usuario (UI/UX).</li>
                                          <li>• Buenas prácticas de programación y desarrollo colaborativo en Git.</li>
                                      </ul>
                                  </div>
                              </div>

                          {/* Right Column */}
                              <div className="space-y-6">
                                  <div>
                                      <h3 className="font-medium mb-3">Tecnologías y herramientas específicas:</h3>
                                      <ul className="space-y-2 text-gray-600">
                                          <li>• Frameworks: Flutter o React Native</li>
                                          <li>• Herramientas: Firebase, Git, API de Google Calendar</li>
                                      </ul>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Idioma necesario:</h3>
                                      <div className="flex gap-2">
                                          <div variant="secondary" className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90">
                                          Español
                                          </div>
                                          <div variant="secondary" className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90">
                                          Inglés básico
                                          </div>
                                      </div>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Tipo de colaboración:</h3>
                                      <div className="flex gap-2">
                                          <div variant="secondary" className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90">
                                              Freelancer
                                          </div>
                                          <div variant="secondary" className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90">
                                              Contratista temporal
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <hr className='border-1 border-[#9B9F9E]'></hr>


                  <div className="mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="pt-6">
                          <h2 className="text-xl font-semibold mb-6">Detalles de Postulación y Beneficios</h2>
                          <div className="grid md:grid-cols-2 gap-8">
                              {/* Left Column */}
                              <div className="space-y-6">
                                  <div>
                                      <h3 className="font-medium mb-3">Habilidades o competencias clave necesarias:</h3>
                                      <ul className="space-y-2 text-gray-600">
                                          <li>• Desarrollar y mantener el código de la aplicación móvil.</li>
                                          <li>• Integrar APIs y servicios de backend.</li>
                                          <li>• Colaborar con el equipo de diseño para implementar la interfaz de usuario.</li>
                                          <li>• Realizar pruebas y correcciones de errores.</li>
                                      </ul>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Rango salarial:</h3>
                                      <div className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90 text-sm">
                                          $2,500 - $3,000 USD/mes, dependiendo de la experiencia.
                                      </div>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Etapas del proyecto:</h3>
                                      <div className="space-y-4">
                                          <div>
                                              <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2  ">Fase 1</div>
                                              <p className="text-gray-600 ml-4">• Definición de requerimientos y diseño de UI/UX (1 mes).</p>
                                          </div>
                                          <div>
                                              <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">Fase 2</div>
                                              <p className="text-gray-600 ml-4">• Desarrollo de la aplicación (3 meses).</p>
                                          </div>
                                          <div>
                                              <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">Fase 3</div>
                                              <p className="text-gray-600 ml-4">• Pruebas y lanzamiento en App Store y Google Play (1 mes).</p>
                                          </div>
                                          <div>
                                              <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">Fase 4</div>
                                              <p className="text-gray-600 ml-4">• Correcciones finales y preparación de documentación (1 mes).</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              {/* Right Column */}
                              <div className="space-y-6">
                                  <div>
                                      <h3 className="font-medium mb-3">Beneficios adicionales:</h3>
                                      <ul className="space-y-2 text-gray-600">
                                          <li>• Flexibilidad horaria.</li>
                                          <li>• Acceso a cursos online para capacitación en nuevas tecnologías.</li>
                                      </ul>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Plazo para postular:</h3>
                                      <p className="text-gray-600">• Hasta el 30 de noviembre de 2024.</p>
                                  </div>

                                  <div>
                                      <h3 className="font-medium mb-3">Requisitos de envío:</h3>
                                      <p className="text-gray-600">
                                          • Adjuntar portafolio de aplicaciones móviles desarrolladas anteriormente y un enlace a repositorios públicos (si los tiene).
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>   
            </div>
        </div>

    </>

  )
}
