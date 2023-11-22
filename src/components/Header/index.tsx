import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <header className="flex items-center bg-dark__principal-200 text-white text-lg p-4 w-full h-1/4 ">
      <div className="flex justify-between w-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo-header.png"
            alt="Logo da Advogada"
            width={300}
            height={75}
          />
        </Link>

        {/* Navegação */}
        <div className="flex items-center space-x-4 pr-6">
          <nav className="space-x-4">
            <Link
              className="
              hover:underline
              hover:border-b-2
            hover:border-gold__principal-400
            "
              href="/"
            >
              Início
            </Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/areas-de-atuacao">Áreas de Atuação</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">Faq</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
          <a
            href="LINK_PARA_WHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp color="#A08356" size="2rem" />
          </a>
        </div>
      </div>
    </header>
  );
}
