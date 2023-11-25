export function SolicitarReuniao() {
  return (
    <>
      <section
        className="w-full h-[35vh]"
        style={{
          backgroundImage: "url('/images/fundo-solicitar-reuniao.jpeg')"
        }}
      >
        <div className="w-full h-full flex items-center flex-col justify-center">
          <h3 className="font-dmtext text-4xl">
            Solicite uma reunião online com advogados especialistas
          </h3>
          <a
            href=""
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300 capitalize"
          >
            Solicitar Reunião
          </a>
        </div>
      </section>
    </>
  );
}
