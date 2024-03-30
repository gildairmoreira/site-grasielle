import React from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

export const ContactInfos = () => {
  return (
    <div className="md:w-1/2 p-4">
      <h2 className="font-dmtext text-4xl mb-4">Contato</h2>
      <div className="border-b-2 w-3/5 border-gold__principal-300 mb-4"></div>
      <p className="mb-4 text-sm md:max-w-[70%]">
        Estamos prontos para ajudar! Se você tem perguntas, precisa agendar uma consulta ou discutir seu caso, estamos a
        apenas um clique de distância.
      </p>
      <p className="mb-11 text-sm md:max-w-[70%]">
        Simplificamos o processo para que você possa obter a assistência jurídica de que precisa rapidamente. Não
        hesite, entre em contato agora e permita-nos guiar você na direção certa para uma solução legal eficaz.
      </p>

      <div className="flex items-center mb-11">
        <AiOutlineHome size={50} className="mr-5" />
        <div>
          <h3 className="font-dmtext text-2xl">Endereço</h3>
          <p>Belo Horizonte | MG</p>
        </div>
      </div>
      <div className="flex items-center mb-11">
        <AiOutlineMail size={50} className="mr-5" />
        <div>
          <h3 className="font-dmtext text-2xl">Email</h3>
          <p>Grasiellemoreira.adv@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center mb-11">
        <FaWhatsapp size={50} className="mr-5" />
        <div>
          <h3 className="font-dmtext text-2xl">WhatsApp</h3>
          <p>(31) 99755-5954</p>
        </div>
      </div>
      <div className="flex items-center">
        <BsClock size={50} className="mr-5" />
        <div>
          <h3 className="font-dmtext text-2xl">Horário</h3>
          <p>Seg-Sex 9h - 18h</p>
        </div>
      </div>
    </div>
  );
};
