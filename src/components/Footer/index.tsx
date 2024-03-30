import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-dark__principal-300 text-white p-4 text-center h-[10vh]">
      <p className="text-sm md:text-base">
        © 2023 GM Advogacia | CNPJ: 23.410.045/0001-30 | Todos os Direitos Reservados{' '}
        <a
          href="https://www.instagram.com/seu_instagram"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-500 hover:text-white hover:underline"
        >
          <span className="hidden md:inline">Powered by Grasielle</span>
          <FaInstagram className="inline-block ml-1" />
        </a>
      </p>
    </footer>
  );
};
