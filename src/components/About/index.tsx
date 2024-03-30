import Image from 'next/image';

export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-10 px-3 bg-white flex flex-col bg-no-repeat bg-right bg-[length:500px_500px]"
      style={{ backgroundImage: "url('images/martelo.svg')" }}
    >
      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <span className="border-l-8 p-4 border-gold__principal-100"></span>
          <Image className="mt-6" src="/images/foto-about.png" alt="foto da advogada" width={500} height={450} />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <span className="flex mb-8">
            <Image src="/images/Rectangle.svg" alt="retangulo decorativo" width={150} height={3} />
            <h3 className="font-dmtext text-xl uppercase text-dark__text-200 ml-4 md:ml-12">O Escritório</h3>
          </span>
          <h2 className="font-dmtext text-4xl md:text-6xl text-gold__principal-100 mb-8">Sobre</h2>
          <div className="flex flex-col w-full md:w-[90%] font-sans font-medium text-xl text-dark__text-100">
            <p className="mb-4">
              Fundado em 2022, o escritório Grasielle Moreira destaca-se pela atuação humanizada, ética e diligente,
              oferecendo atendimento personalizado para cada cliente.
            </p>

            <p className="mb-4">
              Grasielle é advogada, formada pelas Faculdades Kennedy de Minas Gerais em 2020, com experiência desde o
              início do mesmo ano.
            </p>
            <p>
              Com atuação em todo o Brasil, oferecemos consultorias online e presenciais em Belo Horizonte, com atuação
              full Service. Adaptamos nossos serviços às necessidades específicas de cada cliente.
            </p>
          </div>
          <div className="pt-5 flex items-center">
            <Image src="/images/icons/balanca.svg" alt="icone de balança" width={44} height={38} />
            <p className="ml-3 font-sans uppercase text-xl font-extrabold text-[#a6a6a6]">OAB/MG 215.076</p>
          </div>
        </div>
      </main>
    </section>
  );
}
