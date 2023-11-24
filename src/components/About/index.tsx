import Image from 'next/image';

export function About() {
  return (
    <>
      <section
        className="w-full h-screen bg-white flex flex-col bg-no-repeat bg bg-right-bottom"
        style={{ backgroundImage: "url('images/martelo.svg')" }}
      >
        <span className="w-full">O Escritório</span>
        <main className="flex">
          <div className="w-1/2">
            <Image
              src="/images/foto-about.png"
              alt="foto da advogada"
              width={518}
              height={518}
            />
          </div>

          <div className="w-1/2">
            <div>Sobre</div>
            <div>
              <p>
                Fundado em 2022, o escritório Grasielle Moreira destaca-se pela
                atuação humanizada, ética e diligente, oferecendo atendimento
                personalizado para cada cliente.{' '}
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
          </div>
        </main>
      </section>
    </>
  );
}
