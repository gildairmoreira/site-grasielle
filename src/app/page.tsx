import { About } from '@/components/About';
//import { ArtigosRecentes } from '@/components/ArtigosRecentes';
import { AtuationAreas } from '@/components/AtuationAreas';
import { Banner } from '@/components/Banner';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import { SolicitarReuniao } from '@/components/SolicitarReuniao';

const faqs = [
  {
    title: 'A consulta é gratuita?',
    description:
      'Em razão da qualidade de nosso atendimento, não temos condições de realizar reuniões gratuitas. Isto porque, nossa reunião é, na verdade, uma Consultoria Jurídica.',
    id: 1
  },
  {
    title: 'Quais formas de pagamento são aceitas?',
    description:
      'Aceitamos pagamentos de maneira conveniente, oferecendo opções como Pix e pagamento por cartão. Nosso objetivo é tornar o processo fácil e acessível para nossos clientes.',
    id: 2
  },
  {
    title: 'Quanto tempo vai durar meu processo?',
    description:
      'A duração do processo varia de caso para caso, dependendo de vários fatores, como a complexidade do assunto e a cooperação das partes envolvidas. Estamos comprometidos em conduzir seu processo de maneira eficiente, buscando sempre a resolução o mais rápido possível.',
    id: 3
  },
  {
    title: 'Quanto eu posso ganhar na ação?',
    description:
      'A compensação em uma ação é única para cada caso, levando em consideração diversos elementos, incluindo danos sofridos e leis aplicáveis. Estudamos cuidadosamente cada situação para buscar a máxima compensação possível para nossos clientes.',
    id: 4
  },
  {
    title: 'Como proceder em casos de rescisão contratual?',
    description:
      'Em casos de rescisão contratual, orientamos nossos clientes sobre seus direitos e opções legais. Buscamos soluções eficazes, considerando a legislação trabalhista vigente, para garantir um processo justo e equitativo.',
    id: 5
  },
  {
    title: 'Como funciona a consultoria?',
    description:
      'Oferecemos consultoria online para clientes em todo o Brasil, e presencial na Região de Belo Horizonte, permitindo acesso fácil aos nossos serviços. Esse formato flexível nos permite atender a casos de forma abrangente, adaptando-nos às necessidades específicas de cada cliente.',
    id: 6
  },
  {
    title: 'Quais outras áreas de atuação são cobertas?',
    description:
      'Nosso escritório atua em diversas áreas, adaptando-se conforme a necessidade de cada caso. Seja em direito tributário, empresarial, Imobiliario, Penal ou outras áreas, estamos comprometidos em fornecer soluções jurídicas abrangentes e eficazes.',
    id: 7
  }
];

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <AtuationAreas />
      <SolicitarReuniao />
      {/* <ArtigosRecentes /> */}
      <Faq faqs={faqs} />
      <Contact />
    </>
  );
}
