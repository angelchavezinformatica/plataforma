import { useState } from "react";
import { FaCheck } from "react-icons/fa"; // Importar el ícono de verificación
import Button from "../components/ui/Button";
import Photo from "./Photo";
import { Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MyComponent = () => {
  const [activeStep, setActiveStep] = useState(0); // Iniciar en el paso 0
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  // Definir los pasos y sus contenidos
  const steps = [
    {
      title: "Validacion de datos",
      description: "Este es el contenido del Paso 1.",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center justify-center bg-[#4F43B1] rounded-full h-16 w-16 mb-4">
            <FaCheck className="text-white text-3xl" />
          </div>
          <p className="text-lg text-gray-700">
            Validación completada con éxito.
          </p>
          <button
            onClick={() =>
              setActiveStep((prev) =>
                prev < steps.length - 1 ? prev + 1 : prev
              )
            }
            className="mt-4 bg-[#4F43B1] text-white px-4 py-2 rounded flex items-center space-x-2"
          >
            <span>Siguiente</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ),
    },

    {
      title: "Informacion de perfil",
      description: "Aquí hay una lista de elementos.",
      content: (
        <div className="flex space-x-4 pl-1 pr-1 rounded-lg">
          <div className="flex-1 p-4  text-blue-800 rounded-lg shadow-md">
            {/* <h3 className="font-bold text-lg">Sección 1</h3> */}
            {/* <p>Esta es la primera sección con información relevante del perfil.</p> */}
            <Photo />
          </div>

          {/* formulario */}
          <div className="flex-1 p-4  text-green-800 rounded-lg shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-green-800"
                  >
                    Nombre:
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellido"
                    className="block text-sm font-medium text-green-800"
                  >
                    Apellido:
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    placeholder="Apellido"
                    className="mt-1  p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-green-800"
                >
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="mt-1  p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="profesion"
                  className="block text-sm font-medium text-green-800"
                >
                  Profesión:
                </label>
                <input
                  id="profesion"
                  name="profesion"
                  type="text"
                  placeholder="Profesión"
                  className="mt-1  p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Línea separadora */}
              <hr className="my-6 border-t border-green-300" />

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-medium text-green-800"
                >
                  Nombre de la empresa u organización:
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la empresa"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ruc"
                  className="block text-sm font-medium text-green-800"
                >
                  RUC o razón social:
                </label>
                <input
                  id="ruc"
                  name="ruc"
                  type="text"
                  placeholder="RUC o razón social"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="cargo"
                  className="block text-sm font-medium text-green-800"
                >
                  Cargo o rol:
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  placeholder="Cargo o rol"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ubicacion"
                  className="block text-sm font-medium text-green-800"
                >
                  Ubicación:
                </label>
                <input
                  id="ubicacion"
                  name="ubicacion"
                  type="text"
                  placeholder="Ubicación (Ciudad, País)"
                  className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </form>

            {/* Botones   s de acción */}
            <div className="flex justify-around space-x-4 mt-6">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-[#ffffff] text-[#3C137B] border-[#3C137B] rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Editar perfil
              </button>
              <button
                onClick={() =>
                  setActiveStep((prev) =>
                    prev < steps.length - 1 ? prev + 1 : prev
                  )
                }
                type="button"
                className="flex items-center px-4 py-2 bg-[#3C137B] text-[#FFFFFF] rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Experiencia",
      description: "Aquí puedes ver una imagen.",
      content: (
        <div className="flex flex-col justify-between h-full pb-4">
          {/* Contenido superior */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Experiencia laboral
            </h2>

            {/* Botón "Añadir experiencia" (oculto si el formulario está visible) */}
            {!showForm && (
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white border-2 border-[#3C137B] text-[#3C137B] hover:bg-primary/10 py-4"
                onClick={toggleForm}
              >
                <Plus className="w-4 h-4" />
                Añadir experiencia
              </Button>
            )}

            {/* Formulario dinámico */}
            {showForm && (
              <div className="mt-4 p-4 border rounded shadow-md">
                <form className="space-y-7">
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="cargo"
                        className="block text-sm font-bold"
                      >
                        Cargo
                      </label>
                      <input
                        id="cargo"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Lider de proyectos"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="empleo"
                        className="block text-sm font-bold"
                      >
                        Tipo de empleo
                      </label>
                      <input
                        id="empleo"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Jornada Completa"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="empresa"
                        className="block text-sm font-bold"
                      >
                        Nombre de la empresa
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Microsoft"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="ubicacion"
                        className="block text-sm font-bold"
                      >
                        Ubicación
                      </label>
                      <input
                        id="ubicacion"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Trujillo - Perú"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="fecha_inicio"
                        className="block text-sm font-bold"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        id="fecha_inicio"
                        type="date"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Microsoft"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="fecha_final"
                        className="block text-sm font-bold"
                      >
                        Fecha de Finalizacion
                      </label>
                      <input
                        id="fecha_final"
                        type="date"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Trujillo - Perú"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="descripcion"
                        className="block text-sm font-bold"
                      >
                        Descripcion
                      </label>

                      <textarea
                        id="descripcion"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button
                      type="submit"
                      className="bg-[#3C137B] text-white px-4 py-2 rounded"
                    >
                      Guardar
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      className=" text-[#3C137B] bg-[#FFFFFF] border-2 border-[#3C137B] "
                      onClick={toggleForm}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Botones inferiores */}
          <div className="flex justify-between items-center mt-8 pr-4">
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-primary/10 py-4"
            >
              Omitir
            </Button>
            <Button
              className="flex items-center bg-[#4C1D95] hover:bg-[#4C1D95]/90 text-white gap-2 py-4"
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
      title: "Eduacion",
      description: "Este es un formulario.",
      content: (
        <div className="flex flex-col justify-between h-full pb-4">
          {/* Contenido superior */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Educacion</h2>

            {/* Botón "Añadir experiencia" (oculto si el formulario está visible) */}
            {!showForm && (
              <Button
                variant="outline"
                className="flex items-center bg-white border-2 border-[#3C137B] gap-2 
                        border-primary text-[#3C137B] py-4"
                onClick={toggleForm}
              >
                <Plus className="w-4 h-4" />
                Añadir Educacion
              </Button>
            )}

            {/* Formulario dinámico */}
            {showForm && (
              <div className="mt-4 p-4 border rounded shadow-md">
                <form className="space-y-7">
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="estudios"
                        className="block text-sm font-bold"
                      >
                        Institucion Educativa
                      </label>
                      <input
                        id="estudios"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: IDAT"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="grados"
                        className="block text-sm font-bold"
                      >
                        Titulo
                      </label>
                      <input
                        id="grado"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Grado"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="academica"
                        className="block text-sm font-bold"
                      >
                        Disciplina académica
                      </label>
                      <input
                        id="academica"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Base de datos SQL"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="ubicacion"
                        className="block text-sm font-bold"
                      >
                        Ubicación
                      </label>
                      <input
                        id="ubicacion"
                        type="text"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Trujillo - Perú"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label
                        htmlFor="fecha_inicio"
                        className="block text-sm font-bold"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        id="fecha_inicio"
                        type="date"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Microsoft"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="fecha_final"
                        className="block text-sm font-bold"
                      >
                        Fecha de Finalizacion
                      </label>
                      <input
                        id="fecha_final"
                        type="date"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                        placeholder="Ejemplo: Trujillo - Perú"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-full">
                      <label
                        htmlFor="descripcion"
                        className="block text-sm font-bold"
                      >
                        Descripcion
                      </label>

                      <textarea
                        id="descripcion"
                        className="w-full border-2 border-[#20274D] rounded px-3 py-2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button
                      type="submit"
                      className="bg-[#3C137B] text-white px-4 py-2 rounded"
                    >
                      Guardar
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      className=" text-[#3C137B] bg-[#FFFFFF] border-2 border-[#3C137B] "
                      onClick={toggleForm}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Botones inferiores */}
          <div className="flex justify-between items-center mt-8 pr-4">
            <Button
              variant="ghost"
              className="text-white hover:text-primary hover:bg-primary/10 py-4"
            >
              Omitir
            </Button>
            <Button
              className="flex items-center bg-[#4C1D95] hover:bg-[#4C1D95]/90 text-white gap-2 py-4"
              onClick={() =>
                setActiveStep((prev) =>
                  prev < steps.length - 1 ? prev + 1 : prev
                )
              }
            >
              Terminado
            </Button>
          </div>
        </div>
      ),
    },

    {
      title: "",
      description: "Este es un formulario.",
      content: (
        <div className="flex flex-col items-center justify-center  h-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-[#4F43B1] rounded-full h-16 w-16 mb-4">
              <FaCheck className="text-white text-3xl" />
            </div>
          </div>

          <p className="text-2xl font-semibold mb-4">Felicidades</p>
          <p className="text-lg text-gray-700">
            Haz completado tu registro en ConnectTalent
          </p>

          <div className="bg-gradient-to-br  to-white p-6 space-y-6">
            <div className="flex flex-col items-center">
              <Link
                to="/homeinova"
                className="w-[500px] max-w-md  bg-[#3C137B] text-white text-center py-2 rounded-[10px]"
              >
                Iniciar
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FFFFFF] h-screen pl-6 pd-6 rounded-lg shadow-lg flex flex-col">
      <div className="p-4">
        <p className="text-3xl font-bold mb-6">ConnectTalent</p>
        <hr className="border-t border-gray-300 mt-2" />
      </div>

      <div className="flex  space-x-4 flex-1 ">
        {/* Div hijo izquierdo con barra de progreso vertical */}
        <div
          className={`p-4 w-1/4 rounded-lg flex flex-col items-start relative ${
            activeStep === steps.length - 1 ? "hidden" : ""
          }`}
        >
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
