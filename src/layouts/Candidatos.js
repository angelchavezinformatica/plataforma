import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Code, Smartphone, Lock, Cpu, Wifi, Binary, Globe, Boxes, Database, Glasses } from "lucide-react";
import Button from '../components/ui/Button';

import figmalogo from '../img/figma.png';
import xdlogo from '../img/xd.png';
import sketchlogo from '../img/Sketch_Logo.svg.png';
import invisionlogo from '../img/invision.png'

import { FaCheck } from 'react-icons/fa'; // Importar el ícono de verificación
import { Link } from "react-router-dom";



const ProgressBar = () => { 
    
    const [step, setStep] = useState(1);
    const goToNextStep = () => { setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep)); };

    const categories = [
        {
          icon: <Code className="w-8 h-8" />,
          title: "Diseño UX/UI",
          projects: "120 projectos"
        },
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "Inteligencia artificial",
          projects: "34 projectos"
        },
        {
          icon: <Lock className="w-8 h-8" />,
          title: "Ciber - seguridad",
          projects: "80 projectos"
        },
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Desarrollo de apps móviles",
          projects: "46 projectos"
        },
        {
          icon: <Wifi className="w-8 h-8" />,
          title: "Internet de las cosas (IoT)",
          projects: "46 projectos"
        },
        {
          icon: <Binary className="w-8 h-8" />,
          title: "Desarrollo de software",
          projects: "65 projectos"
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Desarrollo web",
          projects: "98 projectos"
        },
        {
          icon: <Boxes className="w-8 h-8" />,
          title: "Blockchain",
          projects: "102 projectos"
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Big Data y análisis de datos",
          projects: "80 projectos"
        },
        {
          icon: <Glasses className="w-8 h-8" />,
          title: "Realidad virtual y aumentada",
          projects: "46 projectos"
        }
    ]
    
    const tools = [
        {
          name: "Figma",
          logo: figmalogo ,
          className: "h-10 w-10"
        },
        {
          name: "Adobe XD",
          logo: xdlogo ,
          className: "h-10 w-10"
        },
        {
          name: "Sketch",
          logo: sketchlogo ,
          className: "h-10 w-10"
        },
        {
          name: "InVision",
          logo: invisionlogo ,
          className: "h-10 w-10"
        }
    ]

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">ConnectTalent</h1>

        {/* Barra de progreso */}
        <div className="flex items-center space-x-6">
            {[1, 2, 3, 4].map((num) => (
            <div className="flex items-center" key={num}>
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${step >= num ? 'bg-[#4F43B1] text-white' : 'bg-gray-300 text-gray-700'} 
                    font-semibold`}
                >
                    {num}
                </div>
                {num < 4 && (
                <div className={`h-1 w-16 ${step > num ? 'bg-[#4F43B1]' : 'bg-gray-300'}`}></div>
                )}
            </div>
            ))}
         </div>

        {/* Sección de preguntas */}
        <div className="text-center mt-6">
            {step === 1 && (
            <>
                <p className="text-xl font-semibold mb-4">¿Cómo planeas utilizar ConnectTalent?</p>
                <p className="text-lg text-gray-700">Elige la opción para la cual te creas este perfil</p>
            </>
            )}
            {step === 2 && (
            <>
                <p className="text-xl font-semibold mb-4">¿Cuales son tus intereses?</p>
                <p className="text-lg text-gray-700">Optimizaremos su experiencia de configuracion segun sus preferencias</p>
            </>
            )}
            {step === 3 && (
            <>
                <p className="text-xl font-semibold mb-4">Tus Skills</p>
                <p className="text-lg text-gray-700">Elige las tecnologias que mejor se adapten a tus habilidades</p>
            </>
            )}

            {step === 4 && (
            <>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center bg-[#4F43B1] rounded-full h-16 w-16 mb-4">
                        <FaCheck className="text-white text-3xl" />
                    </div>
                </div>

                <p className="text-2xl font-semibold mb-4">Felicidades</p>
                <p className="text-lg text-gray-700">Haz completado tu registro en ConnectTalent</p>
            </>
            )}
        </div>

        {/* Sección de elección */}
        <div className="flex space-x-6 mt-6">
            {step === 1 && (
            <>
                <Link to='/innovadores' className="bg-white pl-6 pt-8 pb-8 rounded-lg shadow-lg w-64 cursor-pointer">
                    <FaLightbulb className="text-yellow-500 text-4xl mb-4" />
                    <h2 className="text-xl font-bold mb-2">Innovadores</h2>
                    <p className="text-gray-600">Comparte tus innovaciones tecnológicas y encuentra a los candidatos ideales</p>
                </Link>

                <div className="bg-white pl-6 pt-8 pb-8 rounded-lg shadow-lg w-64 cursor-pointer" onClick={goToNextStep}>
                    <FaLightbulb className="text-yellow-500 text-4xl mb-4" />
                    <h2 className="text-xl font-bold mb-2">Candidatos</h2>
                    <p className="text-gray-600">Destaca tus habilidades postulando a proyectos innovadores</p>
                </div>
            </>
            )}

            {step === 2 && (
            <>
                <div className="bg-gradient-to-br  to-white p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                        >
                            <div className="flex items-start gap-3">
                            <div className="text-gray-600">{category.icon}</div>
                            <div className="space-y-1">
                                <h3 className="font-medium text-sm text-gray-900">{category.title}</h3>
                                <p className="text-xs text-gray-500">{category.projects}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
      
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <Button className="w-full max-w-md  text-white" onClick={goToNextStep}>
                            Siguiente
                        </Button>
                        <button className="text-sm text-gray-600 hover:underline">
                            Saltar
                        </button>
                    </div>
                </div>
               
            </>
            )}

            {step === 3 && (
            <>
                <div className="bg-gradient-to-br  to-white p-6 space-y-6">
                    <div className="w-full max-w-4xl mx-auto p-6">
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                            {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                            >
                                <img
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className={tool.className}
                                />
                                <span className="text-sm font-medium text-gray-800">{tool.name}</span>
                            </div>
                            ))}
                        </div>
                    </div>
      
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <Button className="w-full max-w-md  text-white" onClick={goToNextStep}>
                            Siguiente
                        </Button>
                        <button className="text-sm text-gray-600 hover:underline">
                            Saltar
                        </button>
                    </div>
                </div>

      
            </>
            )}

            {step === 4 && (
            <>
                <div className="bg-gradient-to-br  to-white p-6 space-y-6">
                    <div className="flex flex-col items-center">
                        <Link to='/homecandidato' className="w-[500px] p-2 text-center rounded-[5px] bg-[#4F43B1] max-w-md  text-white" onClick={goToNextStep}>
                            Iniciar
                        </Link>
                    </div>
                </div>
            </>
            )}

        </div>
    </div>
  );
};

export default ProgressBar;
