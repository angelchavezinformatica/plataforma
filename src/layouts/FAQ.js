import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: '¿Cómo puedo registrarme en ConnectTalent?', answer: 'ConnectTalent es una plataforma de...' },
    { question: '¿Es gratis usar ConnectTalent?', answer: 'Para unirte a un proyecto, primero...' },
    { question: '¿Cómo funciona el proceso de pago?', answer: 'El costo del servicio depende de...' },
    { question: '¿Puedo trabajar en proyectos internacionales?', answer: 'Sí, puedes cancelar en cualquier momento...' },
    { question: '¿Es necesario estar verificado para conseguir un proyecto?', answer: 'Ofrecemos soporte 24/7 para nuestros usuarios...' },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center text-center p-4 bg-[#8379EE]">
        <h2 className="text-[#ffffff] text-[40px] font-bold mb-4">Preguntas Frecuentes</h2>
        <div className="w-full max-w-[848px]  space-y-2">
            {faqs.map((faq, index) => (
            <div key={index} className="border-b">
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-4 text-left"
                    >
                    <span className="text-lg text-[#ffffff] font-semibold">{faq.question}</span>
                    <FaChevronDown
                        className={`transition-transform duration-200 text-[#ffffff] ${
                        openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    />
                </button>
                {openIndex === index && (
                    <div className="p-4 text-[#ffffff]">
                        {faq.answer}
                    </div>
                )}
            </div>
            ))}
        </div>
  </div>
  );
};

export default FAQ;
