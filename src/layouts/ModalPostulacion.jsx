import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import Subir from "./Subirarchivo";

// eslint-disable-next-line react/prop-types
const Modal = ({ handleModalToggle }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [, setSkills] = useState([]);
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

  // const getQuestionByCategory = () => {
  //     switch (selectedOption) {
  //         case "frontend":
  //             return "¿Qué herramientas frontend necesitas aprender?";
  //         case "backend":
  //             return "¿Qué tecnologías backend buscas?";
  //         case "design":
  //             return "¿Qué tipo de diseño prefieres trabajar?";
  //         case "data":
  //             return "¿Qué habilidades en datos necesitas?";
  //         case "devops":
  //             return "¿Qué herramientas DevOps te interesan?";
  //         default:
  //             return "¿Qué categoría buscas?";
  //     }
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[1000px] h-[600px] flex flex-col  bg-white pt-6 pl-6 pr-6 rounded-md shadow-lg relative  ">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-[#20274D] flex-grow text-center">
            Postular al proyecto de HiBrand
          </h2>
          <button
            onClick={handleModalToggle}
            className="text-blue-500 text-3xl"
          >
            <FaTimesCircle />
          </button>
        </div>
        <hr className="w-full" />

        <div className="p-2 cuerpo h-full overflow-hidden overflow-y-auto">
          {/* Barra de progreso */}
          <div className="flex items-center justify-center space-x-6">
            {[1, 2, 3, 4].map((num) => (
              <div className="flex items-center" key={num}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                                ${
                                  step >= num
                                    ? "bg-[#4F43B1] text-white"
                                    : "bg-gray-300 text-gray-700"
                                } 
                                font-semibold`}
                >
                  {num}
                </div>
                {num < 4 && (
                  <div
                    className={`h-1 w-16 ${
                      step > num ? "bg-[#4F43B1]" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <>
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">
                  Información de contacto
                </h2>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email<span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder="username@gmail.com"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Codigo del país<span className="text-destructive">*</span>
                  </label>
                  <select className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">+ 51 Perú</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Teléfono móvil<span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder="978654321"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <p>Postulación con ConnectTalent | Centro de Ayuda</p>
              </div>
            </>
          )}
          {step === 2 && <Subir />}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Preguntas Adicionales</h2>
              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Cuántos años de experiencia tienes con Flutter y/o React
                    Native?<span className="text-destructive">*</span>
                  </label>
                </div>
                <input
                  placeholder=""
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Qué nivel de experiencia tienes integrando APIs RESTful?
                    <span className="text-destructive">*</span>
                  </label>
                </div>
                <input
                  placeholder=""
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Cuál es tu nivel de familiaridad con patrones de diseño de
                    aplicaciones móviles?
                    <span className="text-destructive">*</span>
                  </label>
                </div>
                <input
                  placeholder=""
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  ¿Cuál es tu nivel de Español?
                  <span className="text-destructive">*</span>
                </label>
                <select
                  value={selectedOption}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  <option value=""> Nativo </option>
                  <option value=""> Basico </option>
                  <option value=""> Intermedio </option>
                  <option value=""> Avanzado </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  ¿Cuál es tu nivel de Ingles?
                  <span className="text-destructive">*</span>
                </label>
                <select
                  value={selectedOption}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>
                  <option value=""> Nativo </option>
                  <option value=""> Basico </option>
                  <option value=""> Intermedio </option>
                  <option value=""> Avanzado </option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Cuál es tu pretensión salarial?*
                    <span className="text-destructive">*</span>
                  </label>
                </div>
                <input
                  placeholder=""
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <p>Postulación con ConnectTalent | Centro de Ayuda</p>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold">Revisar tu solicitud</h2>
              <hr className="w-full" />

              {/* informacion de contacto */}
              <div className="space-y-6 mt-6 mb-6">
                <h2 className="text-xl font-semibold">
                  Información de contacto
                </h2>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Email<span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder="username@gmail.com"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Codigo del país<span className="text-destructive">*</span>
                  </label>
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

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Teléfono móvil<span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder="978654321"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* subir curriculim */}
              <Subir />

              <hr className="w-full" />

              {/* preguntas adicionales */}
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold">Preguntas Adicionales</h2>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ¿Cuántos años de experiencia tienes con Flutter y/o React
                      Native?<span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder=""
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ¿Qué nivel de experiencia tienes integrando APIs RESTful?
                      <span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder=""
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ¿Cuál es tu nivel de familiaridad con patrones de diseño
                      de aplicaciones móviles?
                      <span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder=""
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Cuál es tu nivel de Español?
                    <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={selectedOption}
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Selecciona una categoría
                    </option>
                    <option value=""> Nativo </option>
                    <option value=""> Basico </option>
                    <option value=""> Intermedio </option>
                    <option value=""> Avanzado </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    ¿Cuál es tu nivel de Ingles?
                    <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={selectedOption}
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Selecciona una categoría
                    </option>
                    <option value=""> Nativo </option>
                    <option value=""> Basico </option>
                    <option value=""> Intermedio </option>
                    <option value=""> Avanzado </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      ¿Cuál es tu pretensión salarial?*
                      <span className="text-destructive">*</span>
                    </label>
                  </div>
                  <input
                    placeholder=""
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <p>Postulación con ConnectTalent | Centro de Ayuda</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full justify-between items-center space-x-4 p-2">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Anterior
          </button>

          {step === 4 ? (
            <button
              onClick={handleModalToggle}
              className="flex items-center px-4 py-2 text-white bg-[#20274D] rounded-md hover:bg-blue-600"
            >
              Postular
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
