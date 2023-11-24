import Image from 'next/image';

export function About() {
  return (
    <>
      <section
        className="w-full my-[5%] px-[3%] bg-white flex flex-col bg-no-repeat bg  bg-[length:500px_500px] bg-right"
        style={{ backgroundImage: "url('images/martelo.svg')" }}
      >
        <main className="flex">
          <div className="w-1/2">
            <span className="border-l-8 p-4 border-gold__principal-100"></span>
            <Image
              className="mt-6"
              src="/images/foto-about.png"
              alt="foto da advogada"
              width={500}
              height={450}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <span className="flex mb-8">
              <Image
                src="/images/Rectangle.svg"
                alt="retangulo decorativo"
                width={150}
                height={3}
              />
              <h3 className="font-dmtext text-2xl uppercase text-dark__text-200 ml-12">
                O Escritório
              </h3>
            </span>
            <h2 className="font-dmtext text-6xl text-gold__principal-100 mb-8">
              Sobre
            </h2>
            <div className="flex flex-col justify-around w-[85%] h-[100%] font-montserrat text-xl text-dark__text-100">
              <p>
                Fundado em 2022, o escritório Grasielle Moreira destaca-se pela
                atuação humanizada, ética e diligente, oferecendo atendimento
                personalizado para cada cliente.
              </p>

              <p>
                Grasielle é advogada, formada pelas Faculdades Kennedy de Minas
                Gerais em 2020, com experiência desde o início do mesmo ano.
                Membro das comissões de Direito e Tecnologia e Marketing
                Jurídico da OAB
              </p>
              <p>
                Com atuação em todo o Brasil, oferecemos consultorias online e
                presenciais em Belo Horizonte, com foco nas áreas trabalhista e
                empresarial. Adaptamos nossos serviços às necessidades
                específicas de cada cliente.
              </p>
            </div>
            <div className="pt-4 flex items-center">
              <Image
                src="/images/balanca.svg"
                alt="icone de balança"
                width={44}
                height={38}
              />
              <p className="ml-3 font-montserrat uppercase text-xl font-extrabold text-[#a6a6a6]">
                OAB/MG 127.300
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
