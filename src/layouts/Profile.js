import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import imagen_logo from '../img/logo.png'
import imagen_perfil from '../img/image 49.png'
import profile_logo from '../img/profile-img.jpg'
import banner from '../img/banner.png'
import { MoreHorizontal, MessageCircle, Pencil, Search, Edit, Archive, Plus,SlidersHorizontal, Database, Settings, LayoutGrid, Phone, Video, Info, Paperclip, Image, PlusCircle, Send, Store, Palette, SmartphoneNfcIcon, Rocket, Box, Check, FileText } from 'lucide-react'
import {ShoppingCart,BarChart3,Megaphone,Utensils,Package,Smartphone,GraduationCap,Zap,HomeIcon,List} from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaEye } from 'react-icons/fa';
import Subir from './Subirarchivo';

import imagen_notificacion from '../img/imagen_notificacion.png'


import Calendar from "../layouts/proyectos/Calendario";


import imagen_1 from '../img/image_1.png';
import imagen_2 from '../img/image_2.png';
import imagen_3 from '../img/image_3.png';
import imagen_4 from '../img/image_4.png';
import imagen_5 from '../img/image_5.png';
import imagen_6 from '../img/image_6.png';

import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import avatar5 from '../img/avatar5.png';
import avatar6 from '../img/avatar6.png';
import avatar7 from '../img/avatar7.png';
import avatar8 from '../img/avatar8.png';
import avatar9 from '../img/avatar9.png';

import { FaStore, FaPalette, FaBars, FaPhone, FaRocket, FaGraduationCap } from 'react-icons/fa'; // Importa el icono que necesitas
import { Avatar, Button, Card, Checkbox} from '@mui/material';

import perfil from '../img/pefil.png'
import diseñador_principal from '../img/diseñador_principal.png'
import diseñador_productos from '../img/diseñador_productos.png'
import investigador from '../img/investigador.png'

import unt from '../img/unt.png'
import icpna from '../img/icpna.png'
import idat from '../img/idat.png'
import { Input } from '@mui/material';
import { Label } from '@radix-ui/react-select';
import { CiDeliveryTruck } from 'react-icons/ci';

import { useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';



export default function Home() {

    const [activePage, setActivePage] = useState("");
    const location = useLocation(); // Hook para acceder a la ubicación y al estado

    // Leer el estado de la ubicación (navegación anterior)
    useEffect(() => {
        if (location.state?.activePage) {
            setActivePage(location.state.activePage); // Actualiza activePage con el valor del estado
        }
    }, [location]);



    const [currentIndex, setCurrentIndex] = useState(0);

    const [showTable, setShowTable] = useState(false); // Estado para controlar la vista

    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const [selectedUsuario, setSelectedUsuario] = useState(null);

    const handleClick = (mensaje) => {
        setSelectedUsuario(mensaje);  // Establece el usuario seleccionado
    };



    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (usuario) => {
      setSelectedUser(usuario);
      setIsOpen(false);
    };

    const [photos, setPhotos] = useState([]);

    // Maneja la carga de fotos
    const handleUpload = (event) => {
        const files = event.target.files;
        const uploadedPhotos = Array.from(files).map((file) =>
        URL.createObjectURL(file)
        );
        setPhotos((prevPhotos) => [...prevPhotos, ...uploadedPhotos]);
    };


    // Maneja la eliminación de una foto
    const handleDelete = (photo) => {
        setPhotos(photos.filter((p) => p !== photo));
    };



    const Proyectos = [

        {   
            icon: <Store className='w-6 h-6' />,
            title: "App de Comercio Electronico",
            fecha: "27/dic/2024",
            tarea: "18",
            progreso: 18
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Diseño de Marca para Startup",
            fecha: "21/dic/2024",
            tarea: "24",
            progreso: 24


        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analisis de Datos de Mercado",
            fecha: "15/dic/2024",
            tarea: "19",
            progreso: 19


        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Desarrollo de App Movil",
            fecha: "09/dic/2024",
            tarea: "25",
            progreso: 25


        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Campaña de Marketing Digital",
            fecha: "03/dic/2024",
            tarea: "6",
            progreso: 6


        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Plataforma de Aprendizaje en Línea",
            fecha: "30/nov/2024",
            tarea: "12",
            progreso: 12


        },
        {
            icon: <Utensils className="w-6 h-6" />,
            title: "Aplicación de Reservas para Restaurantes",
            fecha: "23/nov/2024",
            tarea: "22",
            progreso: 22


        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Sistema de Monitoreo de Energía",
            fecha: "15/nov/2024",
            tarea: "15",
            progreso: 15


        },
        {
            icon: <Box className="w-6 h-6" />,
            title: "Sistema de Gestión de Inventarios",
            fecha: "07/nov/2024",
            tarea: "9",
            progreso: 9


        },
        {
            icon: <CiDeliveryTruck className="w-6 h-6" />,
            title: "App de Servicios a Domicilio",
            fecha: "07/nov/2024",
            tarea: "0",
            progreso: 0
        }
        
    ]

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

    const notifications = [
        {
          id: 1,
          name: "Name",
          project: "Desarrollo de una app móvil",
          time: "1 hora",
          avatar: avatar1,
          priorityColor: "bg-purple-500", // Cambia según la prioridad
        },
        {
          id: 2,
          name: "Name",
          project: "Desarrollo de una app móvil",
          time: "1 hora",
          avatar: avatar2,
          priorityColor: "bg-gray-400",
        },
        {
          id: 3,
          name: "Name",
          project: "Desarrollo de una app móvil",
          time: "1 hora",
          avatar: avatar3,
          priorityColor: "bg-purple-500",
        },
        {
            id: 4,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar4,
            priorityColor: "bg-purple-500",
        },
        {
            id: 5,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar5,
            priorityColor: "bg-purple-500",
        },
        {
            id: 6,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar6,
            priorityColor: "bg-purple-500",
        },
        {
            id: 7,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar7,
            priorityColor: "bg-purple-500",
        },
        {
            id: 8,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar8,
            priorityColor: "bg-purple-500",
        },
        {
            id: 9,
            name: "Name",
            project: "Desarrollo de una app móvil",
            time: "1 hora",
            avatar: avatar9,
            priorityColor: "bg-purple-500",
        },
    ];

    const usuarios = [
        {
            iduser: 1,
            name: "Lucia Fernandez",
            avatar: avatar1
        },
        {
            iduser: 2,
            name: "Carlos Lopez",
            avatar: avatar2
        },
        {
            iduser: 3,
            name: "Micaela Perez",
            avatar: avatar3
        },

    ]

    const tareas = [
        {
            name: "Crear prototipo en Figma",
            dueDate: "07 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar1
            }
        },
        {
            name: "Configurar entorno de desarrollo",
            dueDate: "17 Dic 2024",
            status: "assigned",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar2
            }
        },
        {
            name: "Pantalla de autenticación",
            dueDate: "12 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar3
            }
        },
        {
            name: "Integrar notificaciones push",
            dueDate: "20 Dic 2024",
            status: "in-progress",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar4
        }
        },
        {
            name: "Realizar pruebas funcionales",
            dueDate: "20 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar5
            }
        },
        {
            name: "Corregir errores encontrados",
            dueDate: "20 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar6
            }
        },
        {
            name: "Pruebas beta con usuarios",
            dueDate: "22 Dic 2024",
            status: "",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar7
            }
        },
        {
            name: "Obtener retroalimentación",
            dueDate: "26 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar8
            }
        },
        {
            name: "Implementar creación de tareas",
            dueDate: "22 Dic 2024",
            status: "active",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar9
            }
        },
        {
            name: "Pruebas internas",
            dueDate: "22 Dic 2024",
            status: "assigned",
            timeWorked: "00:45:14",
            assignee: {
              avatar: avatar3
            }
        },


    ]


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const mensajes = [
        {
          id: 1,
          name: "Name",
          project: "¡Felicitaciones y bienvenido al equipo! ",
          time: "1 hora",
          avatar: avatar1,
          priorityColor: "bg-purple-500", // Cambia según la prioridad
        },
        {
          id: 2,
          name: "Name",
          project: "¡Felicitaciones y bienvenido al equipo! ",
          time: "1 hora",
          avatar: avatar2,
          priorityColor: "bg-gray-400",
        },
        {
          id: 3,
          name: "Name",
          project: "Lamentamos informarte que tu perfil",
          time: "1 hora",
          avatar: avatar3,
          priorityColor: "bg-purple-500",
        },
        {
            id: 4,
            name: "Name",
            project: "Lamentamos informarte que tu perfil",
            time: "1 hora",
            avatar: avatar4,
            priorityColor: "bg-purple-500",
        },
        {
            id: 5,
            name: "Name",
            project: "¡Felicitaciones y bienvenido al equipo! ",
            time: "1 hora",
            avatar: avatar5,
            priorityColor: "bg-purple-500",
        },
        {
            id: 6,
            name: "Name",
            project: " ¡Felicitaciones y bienvenido al equipo! ",
            time: "1 hora",
            avatar: avatar6,
            priorityColor: "bg-purple-500",
        },
        {
            id: 7,
            name: "Name",
            project: "¡Felicitaciones y bienvenido al equipo! ",
            time: "1 hora",
            avatar: avatar7,
            priorityColor: "bg-purple-500",
        },
        {
            id: 8,
            name: "Name",
            project: "¡Felicitaciones y bienvenido al equipo! ",
            time: "1 hora",
            avatar: avatar8,
            priorityColor: "bg-purple-500",
        },
        {
            id: 9,
            name: "Name",
            project: "¡Felicitaciones y bienvenido al equipo! ",
            time: "1 hora",
            avatar: avatar9,
            priorityColor: "bg-purple-500",
        },
    ];

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
        <div className='flex ' >
            <aside class="sidebar shadow-2xl">
                <div class="sidebar-header">
                    <img src={imagen_logo} alt="logo" />
                    <h2>ConnectTalent</h2>
                </div>
                <ul class="sidebar-links">
                    {/* <h4>
                        <span>Main Menu</span>
                        <div class="menu-separator"></div>
                    </h4> */}
                    <li>
                        <a href="#">
                            <span class="material-symbols-outlined"> home </span >Menu</a>
                    </li>
                    <li onClick={() => handleMenuClick("Perfil")} >
                        <a href="#"
                            ><span class="material-symbols-outlined"> person </span > Perfil </a>
                    </li>
                    <li onClick={() =>handleMenuClick("Mensajes")} >
                        <a href="#"
                            ><span class="material-symbols-outlined"> chat </span >Mensajes </a>
                    </li>

                    <li onClick={()=> handleMenuClick("Notificaciones")}>
                        <a href="#"
                            ><span class="material-symbols-outlined"> notifications_active </span > Notificationes </a>
                    </li>

                    
                    <li>
                        <a href="#"
                            ><span class="material-symbols-outlined"> Calendar_Month </span >  Calendario </a>
                    </li>


                    <h4>
                        <span>_____</span>
                        <div class="menu-separator"></div>
                    </h4>
                    <li>
                        <a href="#"> <span class="material-symbols-outlined"> add </span> Projects </a>
                    </li>
                    <li onClick={() => handleMenuClick("Mis Proyectos")} >
                        <a href="#"><span class="material-symbols-outlined"> Description </span>Mis Proyectos</a>
                    </li>
                    <li onClick={() => handleMenuClick("Proyectos Guardados")} >
                        <a href="#"><span class="material-symbols-outlined"> Bookmark </span>Proyectos Guardados</a>
                    </li>

                    <li onClick={() => handleMenuClick("Tareas")} >
                        <a href="#"><span class="material-symbols-outlined"> task </span>Tareas</a>
                    </li>
             
                    <h4>
                        <span>Account</span>
                        <div class="menu-separator"></div>
                    </h4>
           
                    <li>
                        <a href="#"><span class="material-symbols-outlined"> settings </span>Configuracion</a>
                    </li>
                    <li>
                        <a href="#"><span class="material-symbols-outlined"> Help </span>Ayuda y Soporte</a>
                    </li>
                </ul>

                <div class="user-account">
                    <div class="user-profile">
                        <img src={profile_logo} alt="Profile Image" />
                        {/* <div class="user-detail">
                            <h3>Eva Murphy</h3>
                            <span>Web Developer</span>
                        </div> */}
                        
                    </div>

                </div>
            </aside>

            <div className='ml-[50px] w-full bg-[#ffffff] '>
                
                {/* Mis Proyectos */}
                {activePage === "Mis Proyectos" && (
                    <div className='flex flex-col w-full'>
                        <h2 className='pl-6 pt-4 text-[#20274D] font-bold  text-[20px]' >Mis Proyectos</h2>
                        
                        {/* imagenes */}
                        <div className="relative w-full  mx-auto p-4 flex items-center">
                            <div
                                className="grid grid-cols-3 transition-transform duration-300"
                                style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
                            >
                                {projects.map((project) => (
                                    <div  key={project.id} className="w-full flex-shrink-0 p-2 relative">
                                        <img
                                            src={project.src}
                                            alt={project.alt}
                                            className="imagen-projetc w-full h-auto rounded-lg shadow-md"
                                        />
                                    
                                        <div className=" absolute bottom-10 left-9 flex-column items-center">
                                            <span className='text-[#ffffff] text-[50px]'>{project.icon}</span>
                                            <span className="text-[#FFFFFF] text-[26px]">{project.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                 
                        </div>
            
                    </div>   

                )}

                {/* Proyectos Guardados */}
                {activePage === "Proyectos Guardados" && (
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
                              
                              <button className="gap-2 bg-[#1E1B4B] text-[#ffffff] hover:bg-[#1E1B4B]/90 flex items-center rounded-[5px] border-2 p-2">
                                  <Pencil className="h-4 w-4" />
                                  Editar proyecto
                              </button>
                          </div>
                      </div>
                  </div>


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

                )}

                {/* Perfil */}
                {activePage == "Perfil" && (
                    <div className="w-full">
                        <div className="relative">
                            {/* Banner Image */}
                            <div className=" w-full overflow-hidden rounded-t-lg">
                                <img
                                src= {imagen_perfil}
                                alt="Profile banner"
                                width={768}
                                height={192}
                                className="w-full h-full object-cover"
                                priority
                                />
                            </div>
                        
                            {/* Profile Picture */}
                            <div className="absolute -bottom-[110px] left-6">
                                <div className="rounded-full border-4 border-white dark:border-gray-900">
                                <img
                                    src = {perfil}
                                    alt="Profile picture"
                                    width={128}
                                    height={128}
                                    className="rounded-full h-32 w-32"
                                />
                                </div>
                            </div>
                
                            {/* Action Buttons */}
                            <div className="flex absolute right-0 bottom-[-60px]  items-center gap-2">
                                <button variant="ghost" size="icon" className=" border-2 border-[#B7B7B7] p-2 rounded-[5px] text-gray-500 hover:text-gray-600">
                                  <MoreHorizontal className="h-5 w-5" />
                                </button>

                                <button variant="outline" className="gap-2 flex border-2 border-[#B7B7B7] rounded-[5px] p-2"
                                    onClick={() =>handleMenuClick("Mensajes")}
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    Mensaje
                                </button>
                                         
                                <button className="gap-2 bg-[#1E1B4B] text-[#ffffff] hover:bg-[#1E1B4B]/90 flex items-center rounded-[5px] border-2 p-2">
                                    <Pencil className="h-4 w-4" />
                                    Editar proyecto
                                </button>
                            </div>
                        </div>
           
                        {/* Profile Info */}
                        <div className="px-[180px] pb-4 pt-4">
                            <div className="flex items-center gap-2 mb-1">
                                <h1 className="text-2xl font-bold text-[#20274D] ">User Name</h1>
                                <div variant="secondary" className="bg-blue-100 text-blue-700 rounded-full">
                                {/* <Check className="w-3 h-3 mr-1" /> */}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Soy diseñador de productos con sede en Trujillo.
                            </p>
                        </div>

                        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6  pt-10">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-semibold mb-4">Sobre mi</h2>
                                    <p className='text-sm text-muted-foreground'>
                                        Soy una diseñador de productos con sede en Trujillo, Perú. Disfruto trabajar en <br></br>
                                        proyectos de diseño de productos y Webflow. Ocasionalmente, realizo trabajos <br></br>
                                        como freelance. He trabajado con algunas de las empresas más emocionantes <br></br>
                                        del mundo, incluyendo Coinbase, Stripe y Linear. Me apasiona ayudar a las <br></br>
                                        startups a crecer, mejorar su experiencia de usuario y de cliente, y recaudar <br></br>
                                        fondos a través de un buen diseño. 
                                    </p>

                                    <p className=' text-sm text-muted-foreground pt-4'>
                                        Mi trabajo ha sido destacado en Typewolf, Mindsparkle Magazine, Webflow, <br></br>
                                        Fonts In Use, CSS Winner, Httpster, Siteinspire y Best Website Gallery.
                                    </p>

                            
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
                                            <h3 className="text-sm font-medium text-gray-500">Profesion:</h3>
                                            <p className="mt-1 font-medium">Diseño Digital</p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Email:</h3>
                                            <p className="mt-1 font-medium">username@gmail.com</p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Portafolio:</h3>
                                            <p className="mt-1 font-medium">@userportafolio</p>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Sitio web:</h3>
                                            <p className="mt-1 font-medium">hi@userweb.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <h2 className="text-xl font-semibold mb-6">Experiencia Laboral</h2>
                            <p className="text-sm text-muted-foreground mb-8">
                                Me especializo en diseño UX/UI, estrategia de marca y desarrollo en Webflow.
                            </p>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {experiencia.map((experiencia, index) => (
                                <div key={index} className="border-2 border-[#ECEFF2] rounded-[5px] bg-card">
                                    <div className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                                            <img
                                                alt={`${experiencia.company} logo`}
                                                className="w-full h-full object-cover"
                                                height="40"
                                                src={experiencia.logo}
                                                style={{
                                                aspectRatio: "40/40",
                                                objectFit: "cover",
                                                }}
                                                width="40"
                                            />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-medium leading-none">{experiencia.title}</h3>
                                                <p className="text-sm text-muted-foreground">{experiencia.company}</p>
                                                <p className="text-sm text-muted-foreground">{experiencia.period}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <h2 className="text-xl font-semibold mb-6">Educacion</h2>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {educacion.map((educacion, index) => (
                                <div key={index} className="border-2 border-[#ECEFF2] rounded-[5px] bg-card">
                                    <div className="p-6">
                                        <div className="  flex items-start gap-4">
                                            <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                                            <img
                                                alt={`${educacion.company} logo`}
                                                className="w-full h-full object-cover"
                                                height="40"
                                                src={educacion.logo}
                                                style={{
                                                aspectRatio: "40/40",
                                                objectFit: "cover",
                                                }}
                                                width="40"
                                            />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-medium leading-none">{educacion.title}</h3>
                                                <p className="text-sm text-muted-foreground">{educacion.company}</p>
                                                <p className="text-sm text-muted-foreground">{educacion.period}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>






                


    





                    </div>

                    



                )}

                {/* Mensajes */}
                {activePage == "Mensajes" && (
                    <>

                    <div className='flex'>
                        <div className='w-[600px] p-2 h-screen overflow-scroll '>
                            <div className='flex flex-col justify-between '>
                                <h2 className="font-semibold text-[28px]">Mensajes</h2>
                                <div className="w-full max-w-3xl space-y-4">
                                    <div className="flex items-center gap-2  ">
                                        <div className="relative w-full max-w-md">
                                            {/* Icono de buscar */}
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />

                                            {/* Input de búsqueda */}
                                            <input
                                                type="text"
                                                placeholder="Buscar..."
                                                className="pl-10 pr-4 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            />
                                        </div>
                                        <button className="px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200">
                                            Administrar
                                        </button>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <Button variant="ghost" size="sm" className="h-8">
                                        <span className="i-mail mr-2" />
                                        No leídos
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8">
                                        <span className="i-star mr-2" />
                                        Importante
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8">
                                        <span className="i-filter mr-2" />
                                        Todos los filtros
                                        </Button>
                                    </div>
                                </div>
                                

                            </div>
            
                            <div className="mt-4">
                                <h2 className="font-semibold mb-4">Prioridad alta</h2>
                                <ul className="space-y-4">
                                    {mensajes.map((mensaje) => (
                                    <li
                                        key={mensaje.id}
                                        className="flex items-center p-4 bg-purple-100  shadow-sm"
                                        onClick={() => handleClick(mensaje)}
                                    >
                                        <img
                                        src={mensaje.avatar}
                                        alt={`${mensaje.name}'s avatar`}
                                        className="w-12 h-12 rounded-full"
                                        />
                                        <div className="ml-4 flex-1">
                                        <p className="text-sm">
                                            <span className="font-bold">{mensaje.name}</span> {" "} <br></br>
                                            <span className="font-semibold">
                                            "{mensaje.project}"
                                            </span>.
                                        </p>
                                        <p className="text-xs text-gray-500">{mensaje.time}</p>
                                        </div>
                                        <span
                                        className={`w-3 h-3 rounded-full ${mensaje.priorityColor}`}
                                        ></span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
            
                        </div>

                        <div className='flex-grow'>
                            <div className="flex flex-col h-screen ">
                                {/* Cabecera del perfil */}
                                <div className="flex items-center justify-between bg-[#7A61D733] p-4 rounded-md mb-4">
                                    {/* Avatar y nombre */}
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <img
                                                className="w-16 h-16 rounded-full"
                                                src= {selectedUsuario? selectedUsuario.avatar:"https://via.placeholder.com/150"} 
                                                alt="User Avatar"
                                            />
                                            <span className="absolute bottom-1 right-1 bg-purple-500 h-4 w-4 rounded-full border-2 border-purple-100"></span>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-black">
                                                {selectedUsuario ? selectedUsuario.name : "Name"}

                                            </h2>
                                            <p className="text-sm text-purple-500">En línea</p>
                                        </div>
                                    </div>

                                    {/* Íconos de acciones */}
                                    <div className="flex space-x-4 text-black">
                                        <Phone className="w-6 h-6 cursor-pointer hover:text-purple-500" />
                                        <Video className="w-6 h-6 cursor-pointer hover:text-purple-500" />
                                        <Info className="w-6 h-6 cursor-pointer hover:text-purple-500" />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center p-6 space-y-3">
                                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                                        <img
                                        src= {selectedUsuario? selectedUsuario.avatar:"https://via.placeholder.com/150"} 
                                        alt="Profile picture"
                                        width={128}
                                        height={128}
                                        className="object-cover bg-yellow-400"
                                        priority
                                        />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <h2 className="text-xl font-semibold text-gray-900">Name</h2>
                                        <p className="text-sm font-medium text-violet-500">En línea</p>
                                    </div>
                                </div>

                                {/* Mensaje de bienvenida */}
                                <div className="p-4 rounded-md mb-4 text-[#0000000] h-full  flex justify-end ">
                                    <p>
                                    ¡Felicitaciones y bienvenido al equipo! Estamos muy <br></br>
                                    emocionados de contar con tu talento y energía. <br></br>
                                    Estamos seguros de que tu experiencia y habilidades <br></br>
                                    serán una gran adición a nuestro equipo. ¡Esperamos <br></br>
                                    trabajar juntos y lograr grandes cosas!
                                    </p>
                                </div>

                                <form className="flex items-center gap-2 w-full  p-2 bg-white rounded-lg border"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <Button variant="ghost" size="icon" type="button" className="text-primary">
                                        <PlusCircle className="h-5 w-5 text-[#9747FF] " />
                                        <span className="sr-only">Add content</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" type="button" className="text-primary">
                                        <Paperclip className="h-5 w-5 text-[#9747FF] " />
                                        <span className="sr-only">Attach file</span>
                                    </Button>
                                    <Button variant="ghost" size="icon" type="button" className="text-primary">
                                        <Image className="h-5 w-5 text-[#9747FF] " />
                                        <span className="sr-only">Add image</span>
                                    </Button>
                                    <Input 
                                        type="text" 
                                        placeholder="Escribele un mensaje." 
                                        className="flex-1 border-1  focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                    <Button size="icon" type="submit" className="bg-primary text-primary-foreground">
                                        <Send className="h-5 w-5 text-[#9747FF] " />
                                        <span className="sr-only">Send message</span>
                                    </Button>
                                </form>






                            </div>
       

                        </div>

                    </div>


      

                    </>
                )}

                {/* notificaciones */}
                {activePage == "Notificaciones" && (
                    <>
                    <div className='flex'>
                        <div className='w-[600px] p-2'>
                            <div className='flex justify-between items-center'>
                                <h2 className="font-semibold text-lg">Notificaciones</h2>
                                {/* iconos */}
                                <div className='flex gap-2'>
                                    <button className='p-4 border-2 border-[#00000066] rounded-[10px]'>
                                        <SlidersHorizontal className="h-5 w-5" />
                                        <span className="sr-only">Adjust settings</span>
                                    </button>
                                    <button className='p-4 border-2 border-[#00000066] rounded-[10px]'>
                                        <Database className="h-5 w-5" />
                                        <span className="sr-only">Database options</span>                    
                                    </button>  
                                    <button className='p-4 border-2 border-[#00000066] rounded-[10px]'>
                                        <Settings className="h-5 w-5" />
                                        <span className="sr-only">Configure</span>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h2 className="font-semibold mb-4">Prioridad alta</h2>
                                <ul className="space-y-4">
                                    {notifications.map((notification) => (
                                    <li
                                        key={notification.id}
                                        className="flex items-center p-4 bg-purple-100  shadow-sm"
                                    >
                                        <img
                                        src={notification.avatar}
                                        alt={`${notification.name}'s avatar`}
                                        className="w-12 h-12 rounded-full"
                                        />
                                        <div className="ml-4 flex-1">
                                        <p className="text-sm">
                                            <span className="font-bold">{notification.name}</span> ha
                                            postulado al proyecto{" "} <br></br>
                                            <span className="font-semibold">
                                            "{notification.project}"
                                            </span>.
                                        </p>
                                        <p className="text-xs text-gray-500">{notification.time}</p>
                                        </div>
                                        <span
                                        className={`w-3 h-3 rounded-full ${notification.priorityColor}`}
                                        ></span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex-grow'>

                            <div className='bg-[#7A61D733] flex p-6 justify-between'>
                                <div className=''>
                                    <h1 className='text-[30px] text-[#20274D] ' >Desarrollo de una App Movil</h1>
                                    <p className='text-[#434247]  ' >Name postulo a este proyecto</p>
                                </div>

                                <div className='flex items-center gap-2'>
                                    {/* Botón con icono de check */}
                                    <button className="flex items-center justify-center w-12 h-12 bg-white text-green rounded-full hover:bg-green-600 focus:outline-none">
                                        <Check />
                                    </button>

                                    {/* Botón con icono de X */}
                                    <button className="flex items-center justify-center w-12 h-12 bg-white text-red rounded-full hover:bg-red-600 focus:outline-none">
                                        <IoClose />
                                    </button>

                                </div>


                            </div>

                            <div className='flex bg-[#EDEDED]'>
                                <div className=' w-1/3 p-4 text-center'>
                                    <h2>Informacion de contacto</h2>
                                    <img
                                        src= {imagen_notificacion}
                                        alt="Profile photo"
                                        className="object-cover"
                                        width={250}
                                        height={250}
                                        fill
                                        priority
                                    />
                                </div>

                                <div className='w-2/3 pl-4 pr-4 pt-[70px] space-y-2'>
                                    {/* email */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#202020] mb-1">
                                            Email
                                        </label>
                                        <input 
                                            className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" 
                                            placeholder='username@gmail.com'
                                        />
                                    </div>

                                    {/* codigo pais */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#202020] mb-1">
                                            Codigo del pais
                                        </label>
                                        <input 
                                            className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" 
                                            placeholder='Perú (+51)'
                                        />
                                    </div>

                                    {/* codigo pais */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#202020] mb-1">
                                            Telefono Movil
                                        </label>
                                        <input 
                                            className="w-full p-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" 
                                            placeholder='978654321'
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className=' bg-[#EDEDED] '>
                                <div className="p-4 max-w-xl">
                                    <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
                                    <Card className="flex items-center">
                                        <div className="flex items-center flex-1 p-4">
                                            <div className="bg-[#1B365D] p-3 rounded-lg">
                                                <FileText className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium">CV_UserName.pdf</div>
                                                <div className="text-sm text-muted-foreground">152KB</div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className="mr-2 px-6 h-full rounded-l-none bg-muted hover:bg-muted-foreground/10"
                                        >
                                            Ver
                                        </Button>
                                    </Card>
                                </div>

                            </div>

                            <div className="flex items-center justify-center bg-[#EDEDED] ">
                                <div className="-md rounded-lg p-8 w-full">
                                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preguntas adicionales</h2>
                                    <form className="space-y-6">
                                        {/* Pregunta 1 */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                ¿Cuántos años de experiencia tienes con Flutter y/o React Native?
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="4 años"
                                                className="w-full border-2 p-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        {/* Pregunta 2 */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                            ¿Qué nivel de experiencia tienes integrando APIs RESTful?
                                            </label>
                                            <select
                                            className="w-full p-1 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option>Principiante</option>
                                                <option>Intermedio</option>
                                                <option>Avanzado</option>
                                            </select>
                                        </div>

                                        {/* Pregunta 3 */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                            ¿Cuál es tu nivel de familiaridad con patrones de diseño de aplicaciones móviles?
                                            </label>
                                            <select
                                            className="w-full p-1 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option>Principiante</option>
                                                <option>Intermedio</option>
                                                <option>Avanzado</option>
                                            </select>
                                        </div>

                                        {/* Pregunta 4 */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                            ¿Cuál es tu nivel de Español?
                                            </label>
                                            <select
                                            className="w-full p-1 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option>Principiante</option>
                                                <option>Intermedio</option>
                                                <option>Avanzado</option>
                                            </select>
                                        </div>

                                        {/* Botón de envío */}
                                        {/* <button
                                            type="submit"
                                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-600"
                                        >
                                            Enviar
                                        </button> */}
                                    </form>
                                </div>
                            </div>





                            
                        </div>

                    </div>
  
                    </>
                )}

                {/* tareas */}
                {activePage == "Tareas" && (
                    <>           
                    <div className="flex items-center justify-between p-4">
                        <h1 className="text-2xl font-bold">Tareas</h1>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m1.42-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Buscar proyecto o tarea"
                                style={{ width: "500px" }}
                                className="pl-10 pr-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

          
                    <div className="w-full  p-4">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-2xl font-semibold">Projects</h2>

                            <button className={`p-2 ${!showTable ? 'bg-blue-500' : 'bg-transparent'}`} onClick={() => setShowTable(false)}>
                                <LayoutGrid className="w-6 h-6" />
                            </button>

                            <button className={`p-2 ${showTable ? 'bg-blue-500' : 'bg-transparent'}`} onClick={() => setShowTable(true)}>
                                <List className="h-6 w-6" />

                            </button>

                            

                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ${
                                        showTable ? "hidden" : ""
                                        }`}
                        
                        >
                            {Proyectos.map((project, index) => (
                            <button
                                key={index}
                                className="flex items-center gap-3 p-4 rounded-lg border bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <div className="flex-shrink-0 text-gray-600">
                                {project.icon}
                                </div>
                                <span className="text-sm font-medium">{project.title}</span>
                            </button>
                            ))}
                        </div>



                        <div className={`overflow-x-auto mt-4 ${showTable ? "" : "hidden"}`} >

                            
                            <table className="min-w-full table-auto ">
                                <thead className="">
                                    <tr className='p-4'>
                                        <th className="p-4 text-left">Nombre del proyecto</th>
                                        <th className="p-4 text-left">Ultima fecha de modificacion</th>
                                        <th className="p-4 text-left">Nº de tareas activas</th>
                                        <th className="p-4 text-left">Progreso del proyecto</th>
                                        <th className="p-4 text-left">Ver Proyecto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Proyectos.map((item) => (
                                        <tr key={item.title} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2 flex items-center">
                                                {item.icon} {item.title}
                                            </td>                         
                                            <td className="border border-gray-300 px-4 py-2">{item.fecha}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.tarea}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <div className="w-12 h-12">
                                                    <CircularProgressbar
                                                        value={item.progreso}
                                                        text={`${item.progreso}%`}
                                                        styles={buildStyles({
                                                        textSize: '12px',
                                                        pathColor: '#4CAF50',
                                                        textColor: '#333',
                                                        trailColor: '#d6d6d6',
                                                        })}
                                                    />
                                                </div>
                                            </td>
                                            <td onClick={() => handleMenuClick(item.title)}
                                                className="border border-gray-300 px-4 py-2 text-center">
                                                <FaEye className='w-6 h-6' />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                        </div>




                    </div>
                    </>

                )}

                {/* mostrar las tareas de Desarrollo de App Movil */}
                {activePage == "Desarrollo de App Movil" && (
                    <>
                    <div className=' bg-[#F1F3FB] flex'>
                        <div className=' w-[800px] '>
                            <header className="flex items-center justify-between px-4 py-3 border-b">
                                <h1 className="text-xl font-medium">Desarrollo de una App Móvil</h1>
                                <div className="flex items-center gap-2">
                                    <Button 
                                            size="sm" 
                                            style={{ backgroundColor: '#FFFFFF', color: '#000000', border: 'none', padding: '8px 16px' }}
                                        >
                                        <Edit className="h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                    
                                        Cambiar estado
                                    </Button>
                                    <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                                        <Archive className="h-4 w-4" />
                                        Archivar
                                    </Button>


                                </div>

                            </header>

                            <div className="w-full max-w-6xl mx-auto p-4 md:p-6  rounded-lg shadow-sm text-sm">
                                <div className="flex items-center justify-between mb-6" >
                                    <h1 className="text-2xl font-semibold">Tareas</h1>
                                    <button onClick={() => handleMenuClick("Asignar")}  size="icon" style={{ backgroundColor: '#3C137B', color: '#ffffff', border: 'none', padding: '10px' }} >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left border-b">
                                            <th className="pb-3 font-medium">Nombre de la tarea</th>
                                            <th className="pb-3 font-medium">Fecha límite</th>
                                            <th className="pb-3 font-medium">Estado</th>
                                            <th className="pb-3 font-medium">Tiempo trabajado</th>
                                            <th className="pb-3 font-medium">Asignado a</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tareas.map((task, index) => (
                                            <tr key={index} className="border-b last:border-0">
                                                <td className="py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox></Checkbox>
                                                        <span>{task.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">{task.dueDate}</td>
                                                <td className="py-4">
                                                <button
                                                    className={`
                                                        p-2 rounded
                                                        ${task.status === "active" ? "bg-emerald-500 text-white" : ""}
                                                        ${task.status === "assigned" ? "bg-amber-500 text-white" : ""}
                                                        ${task.status === "in-progress" ? "bg-sky-500 text-white" : ""}
                                                        ${task.status !== "active" && task.status !== "assigned" && task.status !== "in-progress" ? "bg-rose-500 text-white" : ""}
                                                    `}
                                                >
                                                    {task.status === "active"
                                                        ? "Activo"
                                                        : task.status === "assigned"
                                                        ? "Asignado"
                                                        : task.status === "in-progress"
                                                        ? "En progreso"
                                                        : "Detenido"}
                                                </button>

                                                </td>
                                                <td className="py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-24 h-1 bg-indigo-100 rounded-full">
                                                    <div className="w-1/3 h-1 bg-indigo-600 rounded-full" />
                                                    </div>
                                                    {task.timeWorked}
                                                </div>
                                                </td>
                                                <td className="py-4">
                                                <Avatar>
                                                    <img src={task.assignee.avatar} alt="Avatar" />
                                                </Avatar>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>

                                    </table>

                                </div>
                            
                            </div>
                        </div>

                        <div className='bg-[#ffffff] flex-grow flex flex-col items-center  p-2'>
                            <div className="bg-[#4C1D95] text-white rounded-2xl p-6 max-w-md h-[200px]">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-pink-200 rounded-full p-1 w-16 h-16">
                                    <img
                                        src= {avatar2}
                                        alt="Profile"
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                    </div>
                                    <div>
                                    <h2 className="text-xl font-semibold">Sebastián Gómez</h2>
                                    <p className="text-purple-300">Desarrollador Full Stack</p>
                                    </div>
                                </div>
      
                                <div className="space-y-4">
                                    <div className="flex w-full h-3 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 w-[54%]" />
                                        <div className="bg-sky-400 w-[35.1%]" />
                                        <div className="bg-pink-200 w-[10.9%]" />
                                    </div>
                                    
                                    <div className="flex justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                            <span>Productivo</span>
                                            <span className="text-purple-300">54%</span>
                                        </div>
                                    
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-sky-400" />
                                            <span>Neutral</span>
                                            <span className="text-purple-300">35.1%</span>
                                        </div>
                                    
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-pink-200" />
                                            <span>Improductivo</span>
                                            <span className="text-purple-300">10.9%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-md mx-auto mt-2 p-6 bg-white shadow-md rounded-lg space-y-6">
                                {/* Fecha límite */}
                                <div className='flex justify-between items-center'>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Fecha límite
                                    </label>
                                    <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                        defaultValue="2024-12-17"
                                    />
                                    </div>
                                </div>

                                {/* Estado */}
                                <div className='flex justify-between items-center'>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Estado
                                    </label>
                                    <select
                                    
                                    
                                    className=" w-[172px] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option>Asignado</option>
                                        <option>En progreso</option>
                                        <option>Finalizado</option>
                                    </select>
                                </div>

                                {/* Línea divisora */}
                                <hr className="border-gray-300" />

                                {/* Comentarios */}
                                <div>
                                    <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src= {avatar4}
                                        alt="User"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="text-sm text-gray-700">
                                        <strong>Asignaste a</strong> <span className="text-blue-500">@worker</span>
                                    </p>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                    <img
                                        src= {avatar6}
                                        alt="Technician"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">
                                        <strong>@Technician</strong> dejó un comentario
                                        </p>
                                        <p className="text-sm text-gray-700">
                                        ¡Gran avance, Sebastián! Me gusta cómo está quedando la integración del formulario de tareas. 
                                        ¿Crees que podrías agregar una validación adicional para evitar que los usuarios creen tareas sin un título o fecha límite? 
                                        Si necesitas más detalles, házmelo saber.
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Escribir un comentario */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Escribe un comentario
                                    </label>
                                    <div className="relative">
                                    <textarea
                                        placeholder="Escribe tu comentario aquí"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                        rows="3"
                                    />
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center space-x-2 text-gray-500">
                                        <button className="p-2 hover:bg-gray-100 rounded">
                                            😊
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded">
                                            📎
                                        </button>
                                        </div>
                                    </div>

                                    <div className='flex justify-end'>
                                        <button className="text-sm text-blue-600">Tarea aprobada</button>

                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
            
                )}

                {/* asignar tarea */}
                {activePage == "Asignar" && (
                    <>
                    <div className='flex '>
                        <div className='w-[900px] p-6'>
                            <h2 className='text-[30px]' >Crear tarea</h2>
                            <p>Crea una nueva tarea para tu equipo</p>

                            <div className='flex mt-2'>
                                <div className='w-1/2' >
                                    <div className="max-w-md mx-auto p-6 bg-white h-full space-y-6">
                                        {/* Tarea */}
                                        <div>
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                            Tarea
                                            </label>
                                            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                                                <option>Seleccionar</option>
                                                <option>Corregir Error</option>
                                                <option>Actualizar UX</option>
                                                <option>Optimizacion de base de datos</option>
                                                <option>Tareas personalizadas</option>
                                            </select>
                                        </div>

                                        {/* Asignación */}
                                        <div className="relative max-w-md mx-auto">
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                                Asignacion
                                            </label>
                                            {/* Botón principal */}
                                            <button
                                                onClick={toggleDropdown}
                                                className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                            >
                                                {selectedUser ? (
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                    src={selectedUser.avatar}
                                                    alt={selectedUser.name}
                                                    className="w-8 h-8 rounded-full"
                                                    />
                                                    <span>{selectedUser.name}</span>
                                                </div>
                                                ) : (
                                                <span>Seleccione</span>
                                                )}
                                                <span className="ml-2 text-gray-500">▼</span>
                                            </button>

                                            {/* Lista desplegable */}
                                            {isOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
                                                {usuarios.map((usuario) => (
                                                    <button
                                                    key={usuario.iduser}
                                                    onClick={() => handleSelect(usuario)}
                                                    className="w-full flex items-center p-2 hover:bg-gray-100"
                                                    >
                                                    <img
                                                        src={usuario.avatar}
                                                        alt={usuario.name}
                                                        className="w-8 h-8 rounded-full mr-2"
                                                    />
                                                    <span>{usuario.name}</span>
                                                    </button>
                                                ))}
                                                </div>
                                            )}
                                        </div>
                                     

                                        {/* ¿Dónde? */}
                                        <div>
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                            ¿Dónde?
                                            </label>
                                            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                                                <option>Seleccionar</option>

                                                <option>Servidor de base de datos</option>
                                                <option>Modulo Fronted</option>
                                                <option>API de autenticacion</option>
                                                <option>Fronted del sitio web</option>
                                            </select>
                                        </div>

                                        {/* Comentarios */}
                                        <div>
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                            Comentarios
                                            </label>
                                            <textarea
                                            placeholder="Escribe aquí"
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                                            rows="4"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className='w-1/2 bg-[#ffffff]'>
                                    <div className="max-w-md mx-auto p-6 bg-white space-y-6">
                                        {/* cuando */}
                                        <div>
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                                ¿Cuando?
                                            </label>
                                            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                                                <option>Seleccione en el calendario</option>
                                            </select>
                                        </div>
                                    </div>

                                        {/* AQUI CODIGO */}

                                        <div className="max-w-md mx-auto p-4">
                                            <label className="block text-sm font-medium text-purple-700 mb-1">
                                                Fotos y Archivos
                                            </label>

                                            {/* Lista de fotos */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {photos.map((photo, index) => (
                                                <div
                                                    key={index}
                                                    className="relative group w-full h-[205px] border rounded-lg overflow-hidden"
                                                >
                                                    {/* Imagen */}
                                                    <img
                                                    src={photo}
                                                    alt={`Subida ${index}`}
                                                    className="object-cover w-full h-full"
                                                    />

                                                    {/* Botón de eliminar */}
                                                    <button
                                                    onClick={() => handleDelete(photo)}
                                                    className="absolute top-1 right-1 bg-gray-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                                                    >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                    </button>
                                                </div>
                                                ))}
                                            </div>

                                            {/* Botón para subir fotos */}
                                            <div className="flex items-center justify-center  space-x-2 mb-4 border-2 mt-2 w-[200px] p-6 ">
                                                <label
                                                htmlFor="photo-upload"
                                                className="cursor-pointer flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
                                                >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-gray-600"
                                                >
                                                    <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                                </label>
                                                <input
                                                id="photo-upload"
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                className="hidden"
                                                onChange={handleUpload}
                                                />
                                                <span className="text-sm text-gray-600">Añadir Archivos</span>
                                            </div>

                                    
                                        </div>

                                            

                                    
                                </div>
                            </div>
                        </div>

                        <div className='flex-grow  '>
                            <div className="p-6 h-full flex items-center">
                                <Calendar />
                            </div>


                            
                        </div>

                    </div>

                    <div className='w-full  p-4 bg-[#ffffff] '>
                        <div className='p-2 grid grid-cols-3 gap-2 '>

                            <div className="flex items-center space-x-2  p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Alta Prioridad</label>
                            </div>

                            <div className="flex items-center space-x-2 p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Enviar recordatorio automático un día antes del vencimiento</label>
                            </div>

                            <div className="flex items-center space-x-2  p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Bloquear tareas dependientes hasta que esta tarea se complete</label>
                            </div>

                            <div className="flex items-center space-x-2  p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Notificar al usuario asignado</label>
                            </div>

                            <div className="flex items-center space-x-2  p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Repetir si no se completa antes de la fecha límite</label>
                            </div>

                            <div className="flex items-center space-x-2  p-2">
                                <input type='checkbox' id="prioridad" className='scale-150 mr-2' />
                                <label htmlFor='prioridadd' >Requiere aprobación del administrador al completar</label>
                            </div>

                        </div>
                        <div className='p-6 flex justify-end gap-2'>
                            <button className='p-2 bg-[#20274D] text-[#ffffff]  rounded-[5px]'>
                                Crear Tarea
                            </button>

                            <button className='p-2 rounded-[5px] border-2 border-[#3C137B] '>
                                Cerrar sin guardar
                            </button>

                        </div>

                    </div>

  

                    </>
                )}




            </div>
        </div>

    </>

  )
}
