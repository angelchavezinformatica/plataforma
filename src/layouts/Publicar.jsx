import { useState } from "react";
import Button from "../components/ui/Button";
import { Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";

const MyComponent = () => {
  const [activeStep, setActiveStep] = useState(0); // Iniciar en el paso 0

  // Definir los pasos y sus contenidos
  const steps = [
    {
      title: "Informacion General del Proyecto",
      description: "Este es el contenido del Paso 1.",
      content: (
        <div className="flex flex-col pr-5 pl-5">
          <div className="mt-4 p-4 border rounded shadow-md">
            <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-800"
              >
                <span>Adjuntar banner o imagen referencial del proyecto</span>
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-7 mt-2">
              <div className="flex space-x-4">
                <div className="w-full">
                  <label htmlFor="titulo" className="block text-sm font-bold">
                    Titulo del proyecto
                  </label>
                  <input
                    id="titulo"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="academica"
                    className="block text-sm font-bold"
                  >
                    Categoria
                  </label>
                  <input
                    id="academica"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Desarrollo de software, diseño UX/UI, marketing, etc."
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="modalidad"
                    className="block text-sm font-bold"
                  >
                    Modalidad del trabajo
                  </label>
                  <input
                    id="modalidad"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Remoto, híbrido o presencial"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-full">
                  <label
                    htmlFor="descripcion"
                    className="block text-sm font-bold"
                  >
                    Descripcion del proyecto
                  </label>

                  <textarea
                    id="descripcion"
                    rows={4}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                  ></textarea>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="tiempo" className="block text-sm font-bold">
                    Tipo de compromiso requerido*
                  </label>
                  <input
                    id="tiempo"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Jornada completa, medio tiempo o practicante"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="duracion" className="block text-sm font-bold">
                    Duración del proyecto*
                  </label>
                  <input
                    id="duracion"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Tiempo estimado de duración."
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Botones inferiores */}
          <div className="flex justify-end items-center mt-8 pr-4">
            <Button
              className="flex items-center bg-[#20274D] hover:bg-[#4C1D95]/90 text-white gap-2 py-4"
              onClick={() =>
                setActiveStep((prev) =>
                  prev < steps.length - 1 ? prev + 1 : prev
                )
              }
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ),
    },

    {
      title: "Requisitos del Candidato",
      description: "Aquí hay una lista de elementos.",
      content: (
        <div className="flex flex-col pr-5 pl-5">
          <div className="mt-4 p-4 border rounded shadow-md">
            <form className="space-y-7 mt-2">
              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <label
                    htmlFor="aptitudes"
                    className="block text-sm font-bold"
                  >
                    Aptitudes asociadas al empleo*
                  </label>
                  <input
                    id="aptitudes"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Desarrollo de software, diseño UX/UI, marketing, etc."
                  />
                  <div className="p-1 rounded-lg space-x-2 space-y-2">
                    {/* Div hijo 1 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px]">
                        Texto dinámico 1
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 2 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto mucho más largo que el anterior
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 3 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 4 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>
                  </div>
                </div>
                <div className="w-1/2 space-y-2">
                  <label
                    htmlFor="tecnologias"
                    className="block text-sm font-bold"
                  >
                    Tecnologías y herramientas específicas*
                  </label>
                  <input
                    id="tecnologias"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Remoto, híbrido o presencial"
                  />
                  <div className="p-1 rounded-lg space-x-2 space-y-2">
                    {/* Div hijo 1 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px]">
                        Texto dinámico 1
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 2 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto mucho más largo que el anterior
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 3 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>

                    {/* Div hijo 4 */}
                    <div className="inline-flex items-center justify-between bg-[#20274D] p-3 rounded-lg shadow space-x-2">
                      <span className="text-[#ffffff] font-medium text-[12px] ">
                        Texto
                      </span>
                      <XIcon className="h-4 w-4 text-gray-500 cursor-pointer hover:text-red-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-full space-y-2">
                  <label
                    htmlFor="requisitos"
                    className="block text-sm font-bold"
                  >
                    Requisitos y calificaciones*
                  </label>

                  <textarea
                    id="requisitos"
                    rows={4}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                  ></textarea>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <label htmlFor="idioma" className="block text-sm font-bold">
                    Idioma necesario*
                  </label>
                  <input
                    id="idioma"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Inglés, Francés, etc."
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <label
                    htmlFor="tipo_colaboracion"
                    className="block text-sm font-bold"
                  >
                    Tipo de colaboración*
                  </label>
                  <input
                    id="tipo_colaboracion"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Freenlance, contrato temporal, o empleado fijo."
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Botones inferiores */}
          <div className="flex justify-end items-center mt-8 pr-4">
            <Button
              className="flex items-center bg-[#20274D] hover:bg-[#4C1D95]/90 text-white gap-2 py-4"
              onClick={() =>
                setActiveStep((prev) =>
                  prev < steps.length - 1 ? prev + 1 : prev
                )
              }
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ),
    },

    {
      title: "Detalles de Postulacion y Beneficios",
      description: "Aquí puedes ver una imagen.",
      content: (
        <div className="flex flex-col pr-5 pl-5">
          <div className="mt-4 p-4 border rounded shadow-md">
            <form className="space-y-4 mt-2">
              <div className="flex space-x-4">
                <div className="w-full space-y-2">
                  <label
                    htmlFor="responsabilidades"
                    className="block text-sm font-bold"
                  >
                    Responsabilidades y atribuciones*
                  </label>

                  <textarea
                    id="responsabilidades"
                    rows={4}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Tareas específicas y funciones del rol."
                  ></textarea>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2 space-y-2">
                  <label
                    htmlFor="beneficios"
                    className="block text-sm font-bold"
                  >
                    Beneficios Adicionales
                  </label>

                  <textarea
                    id="beneficios"
                    rows={4}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Incentivos adicionales."
                  ></textarea>
                </div>
                <div className="w-1/2 space-y-2">
                  <label htmlFor="etapas" className="block text-sm font-bold">
                    Etapas del Proyecto
                  </label>

                  <textarea
                    id="etapas"
                    rows={4}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Fases o etapas planificadas."
                  ></textarea>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-full space-y-2">
                  <label
                    htmlFor="requisitos"
                    className="block text-sm font-bold"
                  >
                    Requisitos de Envío*
                  </label>

                  <textarea
                    id="requisitos"
                    rows={2}
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="Tareas específicas y funciones del rol."
                  ></textarea>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="rango" className="block text-sm font-bold">
                    Rango Salarial
                  </label>
                  <input
                    id="rango"
                    type="text"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder="s/-$ (Presupuesto o rango de compensación.)"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="plazo" className="block text-sm font-bold">
                    Plazo para Postular*
                  </label>
                  <input
                    id="plazo"
                    type="date"
                    className="w-full bg-[#20274D26] rounded px-3 py-2"
                    placeholder=""
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Botones inferiores */}
          <div className="flex justify-end items-center mt-8 pr-4">
            <Link
              to="/profile"
              className="flex items-center bg-[#20274D] hover:bg-[#4C1D95]/90 text-white rounded-[10px] gap-2 p-4"
            >
              Finalizar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] h-screen pl-6 pr-6 rounded-lg shadow-lg flex flex-col">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <span className="text-[#20274D] text-[24px] font-medium">
              Crear proyecto
            </span>
            <span className="text-[#003D91] text-[20px] ">
              Conecta con los mejores candidatos en tiempo récord
            </span>
          </div>
          <p className="text-3xl text-[#20274D] font-bold">ConnectTalent</p>
        </div>
        <hr className="border-t border-gray-300 mt-2" />
      </div>

      <div className="flex  space-x-4 flex-1 ">
        {/* Div hijo izquierdo con barra de progreso vertical */}
        <div className="p-4 w-1/4 rounded-lg flex flex-col items-start relative ">
          <div className="flex flex-col space-y-[50px] pt-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)} // Cambia el paso activo al hacer clic
                className="flex items-center cursor-pointer"
              >
                <div className="flex items-center">
                  <span
                    className={`text-xl ${
                      activeStep === index
                        ? "text-[#393939] font-semibold"
                        : "text-[#393939B2]  "
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Barra deslizadora vertical */}
          <div className="absolute right-0 top-0 h-full w-3 bg-[#E8F1FF] rounded-full overflow-hidden">
            <div
              className="bg-[#143D67] w-full transition-all duration-500"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }} // Progreso hasta el paso actual
            ></div>
          </div>
        </div>

        {/* Div hijo derecho que muestra el contenido del paso actual */}
        <div
          className={`rounded-lg flex flex-col ${
            activeStep === steps.length - 1 ? "w-full" : "w-3/4"
          }`}
        >
          {steps[activeStep].content}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
