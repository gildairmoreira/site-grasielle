import { About } from '@/components/About';
import { ArtigosRecentes } from '@/components/ArtigosRecentes';
import { AtuationAreas } from '@/components/AtuationAreas';
import { Banner } from '@/components/Banner';
import { SolicitarReuniao } from '@/components/SolicitarReuniao';

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <AtuationAreas />
      <SolicitarReuniao />
      <ArtigosRecentes />
    </>
  );
}
