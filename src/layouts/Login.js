import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaLock,
  FaVoicemail,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-full h-full">
        {/* Sección izquierda - Formulario */}
        <div className="w-3/5 p-8 h-full flex items-center justify-center  flex-col bg-[#FFFFFF]">
          <div className="absolute top-4 left-4 text-[25px] font-semibold">
            ConnectTalent
          </div>
          <h2 className="text-4xl font-bold mb-4 text-center text-[#5145C6]">
            Iniciar Sesion
          </h2>
          {/* Contenedor de iconos de redes sociales */}
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-[#3C137B] rounded-full text-[#3C137B] hover:text-gray-300 transition duration-300"
            >
              <FaFacebookF size={25} />
            </a>

            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-[#3C137B] rounded-full text-[#3C137B] hover:text-gray-300 transition duration-300"
            >
              <FaGoogle size={24} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-[#3C137B] rounded-full text-[#3C137B] hover:text-gray-300 transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
          {/* Línea divisoria con "O" en el centro */}

          <div className="flex items-center justify-center w-full my-4">
            <hr className="w-[200px] border-t border-[#545454]" />
            <span className="mx-2 text-[#545454]">O</span>
            <hr className="w-[200px] border-t border-[#545454]" />
          </div>

          <h2 className="text-[#545454] text-[15px] font-bold mb-4 text-center">
            utiliza tu correo electronico
          </h2>
          {/* formulario inicio de sesion */}
          <form className="w-full max-w-sm space-y-6">
            <div className="mb-4">
              <div className="flex items-center bg-[#F4F8F7] border rounded-lg">
                <span className="p-2 text-[#9B9F9E]">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-[#F4F8F7] px-3 py-2 border-0 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center border bg-[#F4F8F7] rounded-lg">
                <span className="p-2 text-[#9B9F9E]">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="contraseña"
                  placeholder="Contraseña"
                  className=" bg-[#F4F8F7] w-full px-3 py-2 border-0 focus:outline-none"
                  required
                />
              </div>
            </div>

            <a className="text-[#545454] text-[15px] font-bold text-center mt-4 block">
              ¿Olvidaste tu contraseña?
            </a>
            <div className="flex justify-center">
              <Link
                to="/home"
                className="w-[150px] bg-[#4F43B1] text-center  text-[#FFFFFF] p-4 rounded-[40px] hover:bg-blue-600 transition duration-300"
              >
                Inicar Sesion
              </Link>
            </div>
          </form>
        </div>

        {/* Sección derecha */}
        <div className="w-2/5 rounded-tl-[60px] bg-[#5145C6] rounded-bl-[60px] blur-background text-white relative flex items-center justify-center h-full">
          {/* Título centrado */}

          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
            <h1 className="text-4xl font-bold">¡Hola!</h1>
            <p className="text-xl">
              Registrate para conectar con el futuro que deseas
            </p>
            <Link
              to="/register"
              className="bg-white text-blue-500 mt-4 px-6 py-2 rounded-[40px] font-semibold hover:bg-gray-200 transition duration-300"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
