/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import imagen_logo from "../img/logo.png";
import profile_logo from "../img/profile-img.jpg";
import {
  Archive,
  BarChart3,
  Edit,
  GraduationCap,
  HomeIcon,
  LayoutGrid,
  List,
  Megaphone,
  Package,
  Plus,
  ShoppingCart,
  Smartphone,
  Utensils,
  Zap,
} from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaEye } from "react-icons/fa";

import imagen_1 from "../img/image_1.png";
import imagen_2 from "../img/image_2.png";
import imagen_3 from "../img/image_3.png";
import imagen_4 from "../img/image_4.png";
import imagen_5 from "../img/image_5.png";
import imagen_6 from "../img/image_6.png";
import banner from "../img/banner.png";
import { MoreHorizontal, MessageCircle, Pencil } from "lucide-react";
import imagen_perfil from "../img/image 49.png";
import perfil from "../img/pefil.png";
import diseñador_principal from "../img/diseñador_principal.png";
import diseñador_productos from "../img/diseñador_productos.png";
import investigador from "../img/investigador.png";

import unt from "../img/unt.png";
import icpna from "../img/icpna.png";
import idat from "../img/idat.png";

import {
  FaStore,
  FaPalette,
  FaBars,
  FaPhone,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa"; // Importa el icono que necesitas
import { Avatar, Button, Checkbox } from "@mui/material";

export default function Home() {
  const [activePage, setActivePage] = useState("Defecto");
  const [currentIndex] = useState(0);

  const [showTable, setShowTable] = useState(false); // Estado para controlar la vista

  const Proyectos = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "App de Comercio Electronico",
      fecha: "27/dic/2024",
      tarea: "18",
      progreso: 18,
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Diseño de Marca para Startup",
      fecha: "21/dic/2024",
      tarea: "24",
      progreso: 24,
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Analisis de Datos de Mercado",
      fecha: "15/dic/2024",
      tarea: "19",
      progreso: 19,
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Desarrollo de App Movil",
      fecha: "09/dic/2024",
      tarea: "25",
      progreso: 25,
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Campaña de Marketing Digital",
      fecha: "03/dic/2024",
      tarea: "6",
      progreso: 6,
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Plataforma de Aprendizaje en Línea",
      fecha: "30/nov/2024",
      tarea: "12",
      progreso: 12,
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Aplicación de Reservas para Restaurantes",
      fecha: "23/nov/2024",
      tarea: "22",
      progreso: 22,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Sistema de Monitoreo de Energía",
      fecha: "15/nov/2024",
      tarea: "15",
      progreso: 15,
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "Sistema de Gestión de Inventarios",
      fecha: "07/nov/2024",
      tarea: "9",
      progreso: 9,
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "App de Servicios a Domicilio",
      fecha: "07/nov/2024",
      tarea: "0",
      progreso: 0,
    },
  ];

  const projects = [
    {
      id: 1,
      src: imagen_1,
      alt: "Imagen 1",
      text: "App de Comercio Electrónico",
      icon: <FaStore />,
    },
    {
      id: 2,
      src: imagen_2,
      alt: "Imagen 2",
      text: "Diseño de Marca para Startup",
      icon: <FaPalette />,
    },
    {
      id: 3,
      src: imagen_3,
      alt: "Imagen 3",
      text: "Analisis de Datos de Mercado",
      icon: <FaBars />,
    },
    {
      id: 4,
      src: imagen_4,
      alt: "Imagen 4",
      text: "Desarrollo de App Movil",
      icon: <FaPhone />,
    },
    {
      id: 5,
      src: imagen_5,
      alt: "Imagen 5",
      text: "Campaña de Marketing Digital",
      icon: <FaRocket />,
    },
    {
      id: 6,
      src: imagen_6,
      alt: "Imagen 6",
      text: "Plataforma de Aprendizaje en linea",
      icon: <FaGraduationCap />,
    },
  ];

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
  ];

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
  ];

  const tareas = [
    {
      name: "Crear prototipo en Figma",
      dueDate: "07 Dic 2024",
      status: "active",
      timeWorked: "00:45:14",
      assignee: {
        avatar: "/placeholder.svg",
      },
    },
    {
      name: "Configurar entorno de desarrollo",
      dueDate: "17 Dic 2024",
      status: "assigned",
      timeWorked: "00:45:14",
      assignee: {
        avatar: "/placeholder.svg",
      },
    },
    {
      name: "Pantalla de autenticación",
      dueDate: "12 Dic 2024",
      status: "active",
      timeWorked: "00:45:14",
      assignee: {
        avatar: "/placeholder.svg",
      },
    },
    {
      name: "Integrar notificaciones push",
      dueDate: "20 Dic 2024",
      status: "in-progress",
      timeWorked: "00:45:14",
      assignee: {
        avatar: "/placeholder.svg",
      },
    },
    {
      name: "Realizar pruebas funcionales",
      dueDate: "20 Dic 2024",
      status: "active",
      timeWorked: "00:45:14",
      assignee: {
        avatar: "/placeholder.svg",
      },
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
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

  // const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="flex h-screen ">
        <aside className="sidebar">
          <div className="sidebar-header">
            <img src={imagen_logo} alt="logo" />
            <h2>ConnectTalent</h2>
          </div>
          <ul className="sidebar-links">
            <li>
              <a href="#">
                <span className="material-symbols-outlined"> home </span>Menu
              </a>
            </li>
            <li onClick={() => handleMenuClick("Perfil")}>
              <a href="#">
                <span className="material-symbols-outlined"> person </span>{" "}
                Perfil{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined"> chat </span>
                Mensajes{" "}
              </a>
            </li>

            <li>
              <a href="#">
                <span className="material-symbols-outlined">
                  {" "}
                  notifications_active{" "}
                </span>{" "}
                Notificationes{" "}
              </a>
            </li>

            <li>
              <a href="#">
                <span className="material-symbols-outlined">
                  {" "}
                  Calendar_Month{" "}
                </span>{" "}
                Calendario{" "}
              </a>
            </li>

            <h4>
              <span>_____</span>
              <div className="menu-separator"></div>
            </h4>
            <li>
              <a href="#">
                {" "}
                <span className="material-symbols-outlined"> add </span>{" "}
                Projects{" "}
              </a>
            </li>
            <li onClick={() => handleMenuClick("Mis Proyectos")}>
              <a href="#">
                <span className="material-symbols-outlined"> Description </span>
                Mis Proyectos
              </a>
            </li>
            <li onClick={() => handleMenuClick("Proyectos Guardados")}>
              <a href="#">
                <span className="material-symbols-outlined"> Bookmark </span>
                Proyectos Guardados
              </a>
            </li>

            <h4>
              <span>Account</span>
              <div className="menu-separator"></div>
            </h4>

            <li>
              <a href="#">
                <span className="material-symbols-outlined"> settings </span>
                Configuracion
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined"> Help </span>Ayuda y
                Soporte
              </a>
            </li>
          </ul>

          <div className="user-account">
            <div className="user-profile">
              <img src={profile_logo} alt="Profile Image" />
              <div className="user-detail">
                <h3>Carlos Ballona</h3>
                <span>Web Developer</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="w-full ml-[50px]  p-3">
          {activePage === "Mis Proyectos" && (
            <div className="flex flex-col w-full">
              <h2 className="pl-6 pt-4 text-[#20274D] font-bold  text-[20px]">
                Mis Proyectos
              </h2>

              {/* imagenes */}
              <div className="relative w-full  mx-auto p-4 flex items-center">
                <div
                  className="grid grid-cols-3 transition-transform duration-300"
                  style={{
                    transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                  }}
                >
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="w-full flex-shrink-0 p-2 relative"
                    >
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="imagen-projetc w-full h-auto rounded-lg shadow-md"
                      />

                      <div className=" absolute bottom-10 left-9 flex-column items-center">
                        <span className="text-[#ffffff] text-[50px]">
                          {project.icon}
                        </span>
                        <span className="text-[#FFFFFF] text-[26px]">
                          {project.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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
                    <button
                      variant="ghost"
                      size="icon"
                      className=" border-2 border-[#B7B7B7] p-2 rounded-[5px] text-gray-500 hover:text-gray-600"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>

                    <button
                      variant="outline"
                      className="gap-2 flex border-2 border-[#B7B7B7] rounded-[5px] p-2"
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
              </div>

              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold mb-4">
                      Descripción del proyecto
                    </h2>
                    <p>
                      Este proyecto tiene como objetivo desarrollar una
                      aplicación móvil de gestión <br></br>
                      de tareas que permita a los usuarios organizar su día a
                      día de forma sencilla e <br></br>
                      intuitiva. La app ofrecerá funciones como recordatorios,
                      integración de <br></br>
                      calendarios y listas personalizables. Se espera que la app
                      sea compatible <br></br>
                      tanto con Android como con iOS y que incluya una interfaz
                      moderna y fácil de usar.
                    </p>

                    <div>
                      <h3 className="font-medium mb-2">
                        Duración del proyecto:
                      </h3>
                      <p className="text-gray-600">
                        6 meses, con posibilidad de extensión para mantenimiento
                        y actualizaciones.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-y-6 gap-x-12 ">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Empresa:
                        </h3>
                        <div className="mt-1 flex items-center">
                          <div className="h-6 w-6 bg-black rounded-sm mr-2" />
                          <span className="font-medium">HiBrand</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Ubicación:
                        </h3>
                        <p className="mt-1 font-medium">Trujillo, Perú.</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Modalidad:
                        </h3>
                        <p className="mt-1 font-medium">Remoto</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Tipo de compromiso:
                        </h3>
                        <p className="mt-1 font-medium">Jornada completa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-1 border-[#9B9F9E]"></hr>

              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-6 pb-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Requisitos del Candidato
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">
                          Habilidades o competencias clave necesarias:
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Desarrollo en Flutter y/o React Native.</li>
                          <li>
                            • Experiencia con integración de APIs RESTful.
                          </li>
                          <li>
                            • Familiaridad con patrones de diseño de
                            aplicaciones móviles.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">
                          Requisitos y calificaciones:
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            • Experiencia mínima de 2 años en desarrollo de
                            aplicaciones móviles.
                          </li>
                          <li>
                            • Conocimiento en diseño de interfaces de usuario
                            (UI/UX).
                          </li>
                          <li>
                            • Buenas prácticas de programación y desarrollo
                            colaborativo en Git.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">
                          Tecnologías y herramientas específicas:
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Frameworks: Flutter o React Native</li>
                          <li>
                            • Herramientas: Firebase, Git, API de Google
                            Calendar
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Idioma necesario:</h3>
                        <div className="flex gap-2">
                          <div
                            variant="secondary"
                            className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90"
                          >
                            Español
                          </div>
                          <div
                            variant="secondary"
                            className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90"
                          >
                            Inglés básico
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">
                          Tipo de colaboración:
                        </h3>
                        <div className="flex gap-2">
                          <div
                            variant="secondary"
                            className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90"
                          >
                            Freelancer
                          </div>
                          <div
                            variant="secondary"
                            className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90"
                          >
                            Contratista temporal
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-1 border-[#9B9F9E]"></hr>

              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Detalles de Postulación y Beneficios
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">
                          Habilidades o competencias clave necesarias:
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>
                            • Desarrollar y mantener el código de la aplicación
                            móvil.
                          </li>
                          <li>• Integrar APIs y servicios de backend.</li>
                          <li>
                            • Colaborar con el equipo de diseño para implementar
                            la interfaz de usuario.
                          </li>
                          <li>• Realizar pruebas y correcciones de errores.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Rango salarial:</h3>
                        <div className="bg-[#1E1B4B] p-2 rounded-[5px] text-white hover:bg-[#1E1B4B]/90 text-sm">
                          $2,500 - $3,000 USD/mes, dependiendo de la
                          experiencia.
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">
                          Etapas del proyecto:
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2  ">
                              Fase 1
                            </div>
                            <p className="text-gray-600 ml-4">
                              • Definición de requerimientos y diseño de UI/UX
                              (1 mes).
                            </p>
                          </div>
                          <div>
                            <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">
                              Fase 2
                            </div>
                            <p className="text-gray-600 ml-4">
                              • Desarrollo de la aplicación (3 meses).
                            </p>
                          </div>
                          <div>
                            <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">
                              Fase 3
                            </div>
                            <p className="text-gray-600 ml-4">
                              • Pruebas y lanzamiento en App Store y Google Play
                              (1 mes).
                            </p>
                          </div>
                          <div>
                            <div className="bg-[#1E1B4B] w-[80px] text-center p-1 rounded-[5px] text-white mb-2">
                              Fase 4
                            </div>
                            <p className="text-gray-600 ml-4">
                              • Correcciones finales y preparación de
                              documentación (1 mes).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-medium mb-3">
                          Beneficios adicionales:
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Flexibilidad horaria.</li>
                          <li>
                            • Acceso a cursos online para capacitación en nuevas
                            tecnologías.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">
                          Plazo para postular:
                        </h3>
                        <p className="text-gray-600">
                          • Hasta el 30 de noviembre de 2024.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">
                          Requisitos de envío:
                        </h3>
                        <p className="text-gray-600">
                          • Adjuntar portafolio de aplicaciones móviles
                          desarrolladas anteriormente y un enlace a repositorios
                          públicos (si los tiene).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePage == "Perfil" && (
            <div className="w-full">
              <div className="relative">
                {/* Banner Image */}
                <div className=" w-full overflow-hidden rounded-t-lg">
                  <img
                    src={imagen_perfil}
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
                      src={perfil}
                      alt="Profile picture"
                      width={128}
                      height={128}
                      className="rounded-full h-32 w-32"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex absolute right-0 bottom-[-60px]  items-center gap-2">
                  <button
                    variant="ghost"
                    size="icon"
                    className=" border-2 border-[#B7B7B7] p-2 rounded-[5px] text-gray-500 hover:text-gray-600"
                  >
                    <MoreHorizontal className="h-5 w-5" />
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
                  <h1 className="text-2xl font-bold text-[#20274D] ">
                    User Name
                  </h1>
                  <div
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 rounded-full"
                  >
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
                    <p className="text-sm text-muted-foreground">
                      Soy una diseñador de productos con sede en Trujillo, Perú.
                      Disfruto trabajar en <br></br>
                      proyectos de diseño de productos y Webflow.
                      Ocasionalmente, realizo trabajos <br></br>
                      como freelance. He trabajado con algunas de las empresas
                      más emocionantes <br></br>
                      del mundo, incluyendo Coinbase, Stripe y Linear. Me
                      apasiona ayudar a las <br></br>
                      startups a crecer, mejorar su experiencia de usuario y de
                      cliente, y recaudar <br></br>
                      fondos a través de un buen diseño.
                    </p>

                    <p className=" text-sm text-muted-foreground pt-4">
                      Mi trabajo ha sido destacado en Typewolf, Mindsparkle
                      Magazine, Webflow, <br></br>
                      Fonts In Use, CSS Winner, Httpster, Siteinspire y Best
                      Website Gallery.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-y-6 gap-x-12 ">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Empresa:
                        </h3>
                        <div className="mt-1 flex items-center">
                          <div className="h-6 w-6 bg-black rounded-sm mr-2" />
                          <span className="font-medium">HiBrand</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Ubicación:
                        </h3>
                        <p className="mt-1 font-medium">Trujillo, Perú.</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Profesion:
                        </h3>
                        <p className="mt-1 font-medium">Diseño Digital</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Email:
                        </h3>
                        <p className="mt-1 font-medium">username@gmail.com</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Portafolio:
                        </h3>
                        <p className="mt-1 font-medium">@userportafolio</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">
                          Sitio web:
                        </h3>
                        <p className="mt-1 font-medium">hi@userweb.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h2 className="text-xl font-semibold mb-6">
                  Experiencia Laboral
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Me especializo en diseño UX/UI, estrategia de marca y
                  desarrollo en Webflow.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {experiencia.map((experiencia, index) => (
                    <div
                      key={index}
                      className="border-2 border-[#ECEFF2] rounded-[5px] bg-card"
                    >
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
                            <h3 className="font-medium leading-none">
                              {experiencia.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {experiencia.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {experiencia.period}
                            </p>
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
                    <div
                      key={index}
                      className="border-2 border-[#ECEFF2] rounded-[5px] bg-card"
                    >
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
                            <h3 className="font-medium leading-none">
                              {educacion.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {educacion.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {educacion.period}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* muestra las tareas */}

          {activePage == "Defecto" && (
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

              <div className="container mx-auto p-4">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-2xl font-semibold">Projects</h2>

                  <button
                    className={`p-2 ${
                      !showTable ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => setShowTable(false)}
                  >
                    <LayoutGrid className="w-6 h-6" />
                  </button>

                  <button
                    className={`p-2 ${
                      showTable ? "bg-blue-500" : "bg-transparent"
                    }`}
                    onClick={() => setShowTable(true)}
                  >
                    <List className="h-6 w-6" />
                  </button>
                </div>

                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ${
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
                      <span className="text-sm font-medium">
                        {project.title}
                      </span>
                    </button>
                  ))}
                </div>

                <div
                  className={`overflow-x-auto mt-4 ${
                    showTable ? "" : "hidden"
                  }`}
                >
                  <table className="min-w-full table-auto ">
                    <thead className="">
                      <tr className="p-4">
                        <th className="p-4 text-left">Nombre del proyecto</th>
                        <th className="p-4 text-left">
                          Ultima fecha de modificacion
                        </th>
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
                          <td className="border border-gray-300 px-4 py-2">
                            {item.fecha}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {item.tarea}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <div className="w-12 h-12">
                              <CircularProgressbar
                                value={item.progreso}
                                text={`${item.progreso}%`}
                                styles={buildStyles({
                                  textSize: "12px",
                                  pathColor: "#4CAF50",
                                  textColor: "#333",
                                  trailColor: "#d6d6d6",
                                })}
                              />
                            </div>
                          </td>
                          <td
                            onClick={() => handleMenuClick(item.title)}
                            className="border border-gray-300 px-4 py-2 text-center"
                          >
                            <FaEye className="w-6 h-6" />
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
              <div className=" bg-[#F1F3FB] flex">
                <div className=" w-[800px] ">
                  <header className="flex items-center justify-between px-4 py-3 border-b">
                    <h1 className="text-xl font-medium">
                      Desarrollo de una App Móvil
                    </h1>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        style={{
                          backgroundColor: "#FFFFFF",
                          color: "#000000",
                          border: "none",
                          padding: "8px 16px",
                        }}
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Cambiar estado
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex gap-2"
                      >
                        <Archive className="h-4 w-4" />
                        Archivar
                      </Button>
                    </div>
                  </header>

                  <div className="w-full max-w-6xl mx-auto p-4 md:p-6  rounded-lg shadow-sm text-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-2xl font-semibold">Tareas</h1>
                      <button
                        size="icon"
                        style={{
                          backgroundColor: "#3C137B",
                          color: "#ffffff",
                          border: "none",
                          padding: "10px",
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b">
                            <th className="pb-3 font-medium">
                              Nombre de la tarea
                            </th>
                            <th className="pb-3 font-medium">Fecha límite</th>
                            <th className="pb-3 font-medium">Estado</th>
                            <th className="pb-3 font-medium">
                              Tiempo trabajado
                            </th>
                            <th className="pb-3 font-medium">Asignado a</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tareas.map((task, index) => (
                            <tr key={index} className="border-b last:border-0">
                              <td className="py-4">
                                <div className="flex items-center gap-3">
                                  <Checkbox />
                                  <span>{task.name}</span>
                                </div>
                              </td>
                              <td className="py-4">{task.dueDate}</td>
                              <td className="py-4">
                                <button
                                  className={`p-2 rounded
                                    ${
                                      task.status === "active"
                                        ? "bg-emerald-500 text-white"
                                        : ""
                                    }
                                    ${
                                      task.status === "assigned"
                                        ? "bg-amber-500 text-white"
                                        : ""
                                    }
                                    ${
                                      task.status === "in-progress"
                                        ? "bg-sky-500 text-white"
                                        : ""
                                    }
                                    ${
                                      task.status !== "active" &&
                                      task.status !== "assigned" &&
                                      task.status !== "in-progress"
                                        ? "bg-rose-500 text-white"
                                        : ""
                                    }
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
                                  <img
                                    src={task.assignee.avatar}
                                    alt="Avatar"
                                  />
                                </Avatar>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500 flex-grow"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
