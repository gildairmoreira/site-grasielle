import Image from 'next/image';

interface IServicesProps {
  title: string;
  image: string;
  id: number;
  alt: string;
}

const services: IServicesProps[] = [
  {
    title: 'Assessoria na aquisição de imóveis em leilão',
    image: '/images/icons/Icone_Imoveis.png',
    alt: 'Icone de Imovel',
    id: 1
  },
  {
    title: 'Constituição de holding patrimonial',
    image: '/images/icons/Icone_Pessoas.png',
    alt: 'Icone de Pessoas',
    id: 2
  },
  {
    title: 'Ajuizamento e defesa em processos de direito imobiliário',
    image: '/images/icons/Icone_Direito.png',
    alt: 'Icone do Direito',
    id: 3
  },
  {
    title: 'Constituição de ônus reais',
    image: '/images/icons/Icone_Onus.png',
    alt: 'Icone de Onus',
    id: 4
  },
  {
    title: 'Assessoria Judicial para Redução de ITBI e ITCMD',
    image: '/images/icons/Icone_Reducao.png',
    alt: 'Icone de Reducao',
    id: 5
  },
  {
    title: 'Assessoria judicial para utilização de FGTS fora do SFH',
    image: '/images/icons/Icone_Imposto.png',
    alt: 'Icone de Imposto',
    id: 6
  },
  {
    title: 'Assessoria jurídica para condomínios e associações',
    image: '/images/icons/Icone_Condominio.png',
    alt: 'Icone de Condominio',
    id: 7
  },
  {
    title: 'Elaboração e negociação de Contratos Imobiliários',
    image: '/images/icons/Icone_Contrato.png',
    alt: 'Icone de Contrato',
    id: 8
  }
];

export function AtuationAreas() {
  return (
    <section
      id="areas-de-atuacao"
      className="bg-dark__principal-100 px-[10%] py-[2%] flex justify-between items-center flex-col "
    >
      <h1 className="font-dmtext text-white text-4xl py-12 uppercase">Áreas de Atuação</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {services.map(service => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-transparent px-7 py-3 rounded-md shadow-md border-4 border-[#626262] font-sans"
          >
            <Image src={service.image} alt={service.alt} width={90} height={90} className="object-cover mb-4" />
            <div className="left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold__principal-100 rounded-full my-2"></div>

            <h3 className="text-base text-center mb-2 text-white">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
