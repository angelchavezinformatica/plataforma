import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ handleModalToggle }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [skills, setSkills] = useState([]);
    const [step, setStep] = useState(1);

    const options = [
        { value: "frontend", label: "Frontend" },
        { value: "backend", label: "Backend" },
        { value: "design", label: "Diseño" },
        { value: "data", label: "Datos" },
        { value: "devops", label: "DevOps" },
    ];

    const skillsByCategory = {
        frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
        backend: ["Node.js", "Express", "Django", "Ruby on Rails", "Spring"],
        design: ["Figma", "Adobe XD", "Photoshop", "Sketch", "Illustrator"],
        data: ["SQL", "Python", "R", "Tableau", "Power BI"],
        devops: ["Docker", "Kubernetes", "AWS", "Azure", "Jenkins"],
    };

    const handleSelectChange = (event) => {
        const category = event.target.value;
        setSelectedOption(category);
        setSkills(skillsByCategory[category] || []);
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const getQuestionByCategory = () => {
        switch (selectedOption) {
            case "frontend":
                return "¿Qué herramientas frontend necesitas aprender?";
            case "backend":
                return "¿Qué tecnologías backend buscas?";
            case "design":
                return "¿Qué tipo de diseño prefieres trabajar?";
            case "data":
                return "¿Qué habilidades en datos necesitas?";
            case "devops":
                return "¿Qué herramientas DevOps te interesan?";
            default:
                return "¿Qué categoría buscas?";
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[500px] h-[600px] bg-white p-6 rounded-md shadow-lg relative">
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-lg font-bold text-[#20274D] flex-grow text-center">
                        ConnectTalent
                    </h2>
                    <button onClick={handleModalToggle} className="text-blue-500 text-3xl">
                        <FaTimesCircle />
                    </button>
                </div>
                <hr className="w-full" />

                <div className="py-6 cuerpo">
                    {step === 1 && (
                        <>
                        <h2 className="text-lg font-medium mb-4 text-left">
                            {getQuestionByCategory()}
                        </h2>
                        <div className="relative w-full">
                            <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                            <option value="" disabled>
                                Selecciona una categoría
                            </option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div className="mt-4 p-4 rounded">
                            {skills.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 text-black border-2 rounded-[5px]"
                                    >
                                        {skill}
                                    </button>
                                    ))}
                                </div>
                            ) : (
                            <p className="text-gray-500">Selecciona una categoría para ver habilidades.</p>
                            )}
                        </div>
                        </>
                    )}
                    {step === 2 && (
                        <div>
                            <h2 className="text-lg font-medium mb-4 text-left">
                                ¿Donde te gustaria trabajar?
                            </h2>
                            <div className="relative w-full">
                                <input 
                                    placeholder="Añade una ubicacion (ciudad, region o pais)"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  
                                />
                            </div>

                            <div className="relative w-full flex gap-2 mt-2 ">
                                <input className="" type="checkbox" id="terminos" name="opcion" value="1" />
                                <label for="terminos">En cualquier parte del mundo de manera remota.</label>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <h2 className="text-lg font-medium mb-4 text-left">
                                Tipo de colaboracion
                            </h2>
                            <div className="relative w-full">
                                <input 
                                    placeholder="Jornada completa, medio tiempo o practicante"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  
                                />
                            </div>                        
                        </div>
                    )}
                </div>

                <div className="flex w-[450px] absolute bottom-0 justify-between items-center space-x-4 pb-4">
                    <button
                        onClick={handlePrevious}
                        className="bg-red-500 flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        disabled={step === 1}
                    >
                        <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior
                    </button>

                    {step === 3 ? (
                        <Link to="/homebuscar"
                            
                            className="flex items-center px-4 py-2 text-white bg-[#20274D] rounded-md hover:bg-green-600"
                        >
                            Buscar
                            <svg
                                className="w-5 h-5 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="flex items-center px-4 py-2 text-white bg-[#20274D] rounded-md hover:bg-blue-600"
                        >
                            Siguiente
                            <svg
                                className="w-5 h-5 ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    )}







                </div>
            </div>
        </div>
    );
};

export default Modal;


