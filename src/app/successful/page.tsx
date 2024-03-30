import React from 'react';
import Head from 'next/head';
import { TiArrowBack } from 'react-icons/ti';
import Link from 'next/link';

const SuccessfulPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Obrigado - Seu Site</title>
      </Head>
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Obrigado por entrar em contato!</h1>
          <p className="text-lg">Responderemos o mais rápido possível.</p>
        </div>

        <Link href="/">
          <button className="flex items-center justify-center bg-gold__principal-100 hover:bg-gold__principal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <TiArrowBack className="mr-2" />
            Voltar ao Início
          </button>
        </Link>
      </section>
    </div>
  );
};

export default SuccessfulPage;
