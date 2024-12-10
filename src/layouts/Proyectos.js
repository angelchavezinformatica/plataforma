import React, { useState } from "react";
import comercio from "../img/comercio.png";
import diseño from "../img/diseño.png";
import analisis from "../img/analisis.png";
import appmovil from "../img/appmovil.png";
import marketing from "../img/marketing.png";
import digital from "../img/digital.png";
import { FaStore, FaPalette, FaBars, FaPhone, FaRocket, FaGraduationCap } from 'react-icons/fa'; // Importa el icono que necesitas



const Gallery = () => {

  
  const images = [

    { id: 1, src: comercio, alt: 'Imagen 1', text:'App de Comercio Electrónico', icon: <FaStore /> },
    { id: 2, src: diseño, alt: 'Imagen 2', text: 'Diseño de Marca para Startup', icon: <FaPalette /> },
    { id: 3, src: analisis, alt: 'Imagen 3', text: 'Analisis de Datos de Mercado', icon: <FaBars /> },
    { id: 4, src: appmovil, alt: 'Imagen 4', text: 'Desarrollo de App Movil', icon: <FaPhone />},
    { id: 5, src: marketing, alt: 'Imagen 5', text: 'Campaña de Marketing Digital', icon: <FaRocket /> },
    { id: 6, src: digital, alt: 'Imagen 6', text: 'Plataforma de Aprendizaje en linea', icon: <FaGraduationCap /> },
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    
  ];

  const imagesPerPage = 6; // 2 filas x 3 columnas
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y fin de las imágenes para la página actual
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pl-6 pr-6 pt-4 pb-4">
      
      {/* Contenedor de la galería */}
      <div className="grid grid-cols-3 gap-4">

        {currentImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={`Imagen ${startIndex + index + 1}`}
              className="w-full h-100 object-cover rounded shadow-md imagen-projetc"
            />
            <div className=" absolute bottom-10 left-9 flex-column items-center">
                <span className='text-[#ffffff] text-[50px]'>{image.icon}</span>
                <span className="text-[#FFFFFF] text-[26px]">{image.text}</span>
            </div>
          </div>
        ))}

      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
