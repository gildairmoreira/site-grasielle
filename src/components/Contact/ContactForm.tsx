'use client';
import { useState } from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Envia o formulário usando Axios
      const formData: FormData = {
        name: event.currentTarget.name.value,
        email: event.currentTarget.email.value,
        phone: event.currentTarget.phone.value,
        category: event.currentTarget.category.value,
        message: event.currentTarget.message.value
      };

      // Envia o formulário usando Axios
      await axios.post('https://formsubmit.co/ajax/Grasiellemoreira.adv@gmail.com', formData);

      // Após o envio bem-sucedido, você pode redirecionar o usuário para uma página de sucesso ou mostrar uma mensagem de sucesso
      window.location.href = '/successful';
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 p-7 flex flex-col items-center bg-[#AD907161]">
      <p className="text-xl font-light mb-4">Contate Aqui</p>
      <h2 className="text-4xl font-dmtext mb-10">Consulta Grátis</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu Nome"
            className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu Email"
            className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefone"
            className="w-full p-4 border placeholder:text-white text-xl bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <select id="category" name="category" className="w-full p-4 border text-xl bg-transparent">
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
          <input type="hidden" name="_captcha" value="false"></input>
          <button
            type="submit"
            className="btn-form hover:bg-white hover:text-black transition-all ease-in-out duration-300"
            disabled={loading}
          >
            {loading ? (
              <div className="ml-2 spinner">
                <ClipLoader />
              </div>
            ) : (
              'Enviar'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
