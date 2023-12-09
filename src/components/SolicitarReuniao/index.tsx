import { BtnSecundario } from '../BtnSecundario';

export function SolicitarReuniao() {
  return (
    <section
      className="w-full h-[40vh] md:h-[60vh] lg:h-[55vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fundo-solicitar-reuniao.jpeg')" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-11/12 sm:w-full md:w-[70%] lg:w-[50%] h-[70%] md:h-[60%] lg:h-[80%] flex items-center flex-col justify-around">
          <p className="font-dmtext text-lg sm:text-xl md:text-3xl lg:text-5xl text-white text-center">
            Solicite uma reunião online com
          </p>
          <p className="font-dmtext italic text-lg sm:text-2xl md:text-3xl lg:text-5xl text-white text-center">
            advogados especialistas
          </p>
          <BtnSecundario
            corFundo="white"
            corTexto="dark__text-300"
            linkBotao="whatsapp"
            tamanhotexto="xl"
          >
            Solicitar Reunião
          </BtnSecundario>
        </div>
      </div>
    </section>
  );
}
