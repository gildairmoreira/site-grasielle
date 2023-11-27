import { BtnSecundario } from '../BtnSecundario';

export function SolicitarReuniao() {
  return (
    <>
      <section
        className="w-full h-[40vh]"
        style={{
          backgroundImage: "url('/images/fundo-solicitar-reuniao.jpeg')"
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-[45%] h-[70%] flex items-center flex-col justify-between">
            <p className="font-dmtext text-4xl text-white">
              Solicite uma reunião online com
            </p>
            <p className="font-dmtext italic text-4xl text-white">
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
    </>
  );
}
