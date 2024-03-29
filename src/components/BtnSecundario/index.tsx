interface BtnSecundarioProps {
  children: React.ReactNode;
  corFundo: string;
  corTexto: string;
  linkBotao: string;
  tamanhotexto: 'xs' | 'xl';
}

export function BtnSecundario({ children, corFundo, corTexto, tamanhotexto, linkBotao }: BtnSecundarioProps) {
  return (
    <a
      href={linkBotao}
      target="_blank"
      className={`bg-${corFundo} text-${corTexto} px-6 py-2 rounded-full hover:bg-gray-300 transition-colors duration-300 capitalize text-${tamanhotexto} font-sans font-bold text-center`}
    >
      {children}
    </a>
  );
}
