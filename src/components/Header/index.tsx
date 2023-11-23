import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <header className="font-montserrat font-medium flex items-center bg-dark__principal-200 text-white text-lg p-4 w-full h-1/4">
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
              href="/"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Sobre
            </Link>
            <Link
              href="/areas-de-atuacao"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Áreas de Atuação
            </Link>
            <Link
              href="/blog"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Faq
            </Link>
            <Link
              href="/contacto"
              className="
              hover:border-b-2
            hover:border-gold__principal-400
            "
            >
              Contacto
            </Link>
          </nav>
          <a
            href="LINK_PARA_WHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp styles={} color='#A08356' size="2rem" />
          </a>
        </div>
      </div>
    </header>
  );
}
