'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { NavItem } from './nav-item';

const NAV_ITEMS = [
  {
    label: 'Início',
    href: '/'
  },
  {
    label: 'Sobre',
    href: '#sobre'
  },
  {
    label: 'Áreas de Atuação',
    href: '#areas-de-atuacao'
  },
  //{
  //   label: 'Blog',
  //   href: '/blog'
  // },
  {
    label: 'Faq',
    href: '#faq'
  },
  {
    label: 'Contato',
    href: '#contato'
  }
];

export const Header = () => {
  return (
    <header className="font-sans font-normal bg-dark__principal-200 text-white text-lg p-4 w-full left-0 z-10 shadow-md sticky top-0">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-center mb-4 md:mb-0">
          <Link href="/">
            <span>
              <Image src="/images/logo.png" alt="Logo da Advogada" width={300} height={75} />
            </span>
          </Link>
        </div>

        {/* Navegação */}
        <div className="flex items-center space-x-4 pr-6">
          <nav className="hidden md:flex space-x-4">
            {NAV_ITEMS.map(item => (
              <NavItem {...item} key={item.label} href={item.href} />
            ))}
          </nav>
          <a
            href="https://wa.me/5531997555954?text=Ol%C3%A1%2C+Dra.+Grasielle.+Gostaria+de+agendar+uma+consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <FaWhatsapp
              className="text-gold__principal-400 transition-colors duration-300 ease-in-out hover:text-white ml-3"
              size="2rem"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
