// components/ArtigosRecentes.tsx
import React from 'react';
import Link from 'next/link';
import BlogSlide, { BlogSlideProps } from './Artigo/BlogSlide';

interface ArtigosRecentesProps {
  // Adicione quaisquer outras propriedades necessárias
}

export const ArtigosRecentes: React.FC<ArtigosRecentesProps> = () => {
  // Supondo que você tenha uma lista de artigos recentes
  const recentArticles: BlogSlideProps[] = [
    {
      imageUrl: '/path/to/image1.jpg',
      tags: ['Tag1', 'Tag2'],
      title: 'Título do Artigo 1',
      preview: 'Esta é uma breve prévia do conteúdo do artigo 1.'
    }
    // Adicione mais artigos conforme necessário
  ];

  return (
    <section className="artigos-recentes">
      <h2 className="text-2xl font-bold mb-4">Artigos Recentes</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {recentArticles.map((article, index) => (
          <BlogSlide key={index} {...article} />
        ))}
      </div>
      <Link href="/blog">Ver Mais</Link>
    </section>
  );
};
