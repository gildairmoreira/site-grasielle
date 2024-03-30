import React from 'react';

export function Banner() {
  return (
    <section
      className="w-full h-screen flex items-center bg-inherit bg-cover relative"
      style={{ backgroundImage: "url('/images/banner-fundo.png')" }}
    >
      {/* Parte esquerda com títulos */}
      <div className="w-1/2 h-[80vh] flex justify-center flex-col ml-8 p-9 ">
        {/* backdrop-blur-xl bg-white/40 rounded-lg shadow-xl */}
        <h3 className="text-2xl text-gold__principal-300 font-dmtext">Advocacia de Excelência</h3>
        <h1 className="font-dmtext text-6xl text-white my-1">Bem-vindo, Escritório Advocacia Grasielle</h1>
        <p className="font-sans text-xl text-gray-300 my-6">
          Oferecemos serviços jurídicos especializado, e eficiente para garantir seus direitos. Conte conosco!
        </p>
        <a
          href="https://wa.me/5531997555954?text=Ol%C3%A1%2C+Dra.+Grasielle.+Gostaria+de+agendar+uma+consulta."
          target="_blank"
          className="btn-default w-1/3 bg-gold__principal-300 hover:bg-gold__principal-400 font-sans font-bold text-white text-center py-2 px-4"
        >
          Contatar
        </a>
      </div>
    </section>
  );
}
