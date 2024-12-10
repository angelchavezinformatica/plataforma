import { useState } from "react";
import imagen_1 from "../img/image_1.png";
import imagen_2 from "../img/image_2.png";
import imagen_3 from "../img/image_3.png";
import imagen_4 from "../img/image_4.png";
import imagen_5 from "../img/image_5.png";
import imagen_6 from "../img/image_6.png";

import {
  FaStore,
  FaPalette,
  FaBars,
  FaPhone,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa"; // Importa el icono que necesitas
import { FaQuoteLeft } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import FAQ from "./FAQ";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const stats = [
    { icon: "📊", title: "Proyectos Publicados", value: "10 +" },
    { icon: "👤", title: "Talentos Registrados", value: "600 +" },
    { icon: "✅", title: "Tasa de Éxito", value: "40%" },
    { icon: "🌍", title: "Países Alcanzados", value: "30 +" },
  ];

  const testimonials = [
    {
      name: "Andrea López",
      role: "Desarrolladora Full Stack",
      content:
        "Gracias a ConnectTalent, pude unirme a proyectos internacionales que me han permitido crecer tanto profesional como personalmente. ¡Muy recomendable!",
      bgColor: "bg-bgcolor1",
      quoteColor: "text-blue-400",
    },
    {
      name: "Sofía Pérez",
      role: "Emprendedora",
      content:
        "Con ConnectTalent, encontré el equipo ideal para llevar mi startup al siguiente nivel. ¡Una herramienta clave para emprendedores!",
      bgColor: "bg-bgcolor2",
      quoteColor: "text-purple-400",
    },
    {
      name: "Manuel Gómez",
      role: "Ingeniero de Software",
      content:
        "Conectar con proyectos interesantes y desafiantes nunca había sido tan fácil. ConnectTalent me ha abierto puertas en industrias que no imaginaba.",
      bgColor: "bg-bgcolor3",
      quoteColor: "text-green-400",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#5145C6]">
        {/* Barra de navegación */}
        <nav className="flex justify-between items-center px-8 py-4">
          <p className="text-[30px] text-[#FFFFFF] font-bold">ConnectTalent</p>
          <div className="space-x-8">
            <a href="/" className="activo">
              Inicio
            </a>
            <a href="/about" className="btn-links">
              Proyectos
            </a>
            <a href="/services" className="btn-links">
              Talentos
            </a>
            <a href="/contact" className="btn-links">
              Cómo Funciona
            </a>
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
        <div className="flex items-center justify-center flex-grow">
          <div className="text-center">
            <h1 className="titulo">
              Conecta Talento <br />
              con Oportunidades Infinitas
            </h1>
            <p className="parrafo">
              Únete a nuestra plataforma innovadora para encontrar <br />
              proyectos emocionantes o el talento que necesitas <br />
              para hacer realidad tus ideas.
            </p>
            <div className="flex items-center justify-center space-x-4 m-4">
              <Link
                to="/publicar"
                className="w-[240px] px-4 py-2 font-bold text-[#3C137B] text-[20px] rounded-md bg-white border rounded-[10px] border-gray-300"
              >
                <span>Publica tu proyecto</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full my-8">
          <div className="border-t-4 flex-grow bg-[#FFFFFF]"></div>
          <span className="px-4 text-[#FFFFFF] font-semibold text-[20px]">
            ConnectTalent
          </span>
          <div className="border-t-4 bg-[#FFFFFF] flex-grow"></div>
        </div>
      </div>

      {/* proyectos destacados */}
      <div className="flex flex-col bg-[#5145c6]">
        <div className="flex justify-around items-center px-8 py-4">
          <span className="font-bold text-[30px] text-[#FFFFFF]">
            Proyectos Destacados
          </span>
          <p className="text-[#FFFFFF] text-[18px]">
            &quot;Descubre una amplia variedad de proyectos <br></br>
            en los que puedes participar según tu talento.&quot;
          </p>
          <a className="btn-todos">Ver Todos</a>
        </div>
        {/* imagenes */}
        <div className="relative w-full max-w-[1350px] mx-auto p-5 overflow-hidden flex items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 text-[#545454]  bg-[#FFFFFF] rounded-[10px] p-5"
          >
            &#8592;
          </button>
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-1/3 flex-shrink-0 p-2 relative"
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
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 text-[#545454]  bg-[#FFFFFF] rounded-[10px] p-5"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* estadisticas */}
      <div className="flex justify-center space-x-8 p-8 bg-white text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl mb-2 text-indigo-600">{stat.icon}</div>
            <h3 className="text-[20px] font-medium text-gray-600">
              {stat.title}
            </h3>
            <p className="text-[50px] font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* testimonios */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Testimonios
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative h-[507px] rounded-lg ${testimonial.bgColor} p-8 shadow-md`}
              >
                <div
                  className={`text-6xl ${testimonial.quoteColor}  top-4 left-4 leading-none`}
                >
                  <FaQuoteLeft />
                </div>

                <p className="text-[22px] font-medium text-gray-800 mt-5 mb-5">
                  {testimonial.content}
                </p>

                <blockquote className=" absolute left-0 bottom-0 bg-[#ffffff] rounded-lg">
                  <footer className="mt-4 flex items-center ">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* preguntas frecuentes */}
      <FAQ />

      {/* listo */}
      <div className="flex flex-col items-center justify-center p-10 flex-grow space-y-7">
        <span className="text-[40px] text-[#5145C6]">
          ¿Listo para comenzar tu próximo proyecto?
        </span>
        <p className="text-[20px] text-center">
          Únete a miles de profesionales y empresas que ya están
          <br />
          conectando talento con oportunidades.
        </p>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
