// components/BlogSlide.tsx
import React from 'react';
import Link from 'next/link';

export interface BlogSlideProps {
  imageUrl: string;
  tags: string[];
  title: string;
  preview: string;
}

const BlogSlide: React.FC<BlogSlideProps> = ({ imageUrl, tags, title, preview }) => {
  return (
    <div className="blog-slide">
      <img src={imageUrl} alt={title} className="blog-slide-image" />
      <div className="blog-slide-content">
        <div className="blog-slide-tags">{tags.join(', ')}</div>
        <h3 className="blog-slide-title">{title}</h3>
        <p className="blog-slide-preview">{preview}</p>
        <Link href="/blog/[slug]" as={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default BlogSlide;
