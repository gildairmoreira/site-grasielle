import React from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-dark__principal-300 py-16 text-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Lado Esquerdo */}
        <div className="md:w-1/2 p-4">
          <h2 className="font-dmtext text-4xl mb-4">Contato</h2>
          <div className="border-b-2 w-3/5 border-gold__principal-300 mb-4"></div>
          <p className="mb-4 text-sm md:max-w-[70%]">
            Estamos prontos para ajudar! Se você tem perguntas, precisa agendar
            uma consulta ou discutir seu caso, estamos a apenas um clique de
            distância.
          </p>
          <p className="mb-11 text-sm md:max-w-[70%]">
            Simplificamos o processo para que você possa obter a assistência
            jurídica de que precisa rapidamente. Não hesite, entre em contato
            agora e permita-nos guiar você na direção certa para uma solução
            legal eficaz.
          </p>

          <div className="flex items-center mb-11">
            <AiOutlineHome size={50} className="mr-5" />
            <div>
              <h3 className="font-dmtext text-2xl">Endereço</h3>
              <p>Venda Nova | Belo Horizonte, MG</p>
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
              <p>Seg-Sex 9h - 16h</p>
            </div>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="md:w-1/2 p-7 flex flex-col items-center bg-[#AD907161]">
          <p className="text-xl font-light mb-4">Contate Aqui</p>
          <h2 className="text-4xl font-dmtext mb-10">Consulta Grátis</h2>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu Nome"
                className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu Email"
                className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefone"
                className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
              />
            </div>
            <div className="mb-4">
              <select
                id="category"
                name="category"
                className="w-full p-4 border text-xl bg-transparent"
              >
                <option className="bg-gray-500" value="trabalhista">
                  Direito Trabalhista
                </option>
                <option className="bg-gray-500" value="familia">
                  Direito Família
                </option>
                <option className="bg-gray-500" value="tributario">
                  Direito Tributário
                </option>
                <option className="bg-gray-500" value="criminalista">
                  Direito Criminalista
                </option>
                <option className="bg-gray-500" value="outro">
                  Outro
                </option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Mensagem (Opcional)"
                className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
              />
            </div>
            <div className="w-full flex justify-center items-center submit-area">
              <button
                type="submit"
                className="btn-form hover:bg-white hover:text-black transition-all ease-in-out duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
