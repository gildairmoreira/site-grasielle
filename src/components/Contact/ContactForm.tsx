'use client';

export const ContactForm = () => {
  return (
    <div className="md:w-1/2 p-7 flex flex-col items-center bg-[#AD907161]">
      <p className="text-xl font-light mb-4">Contate Aqui</p>
      <h2 className="text-4xl font-dmtext mb-10">Consulta Grátis</h2>
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="w-full max-w-md"
      >
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
  );
};
