import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-dark__principal-300 text-white p-4 text-center h-[10vh]">
      <p className="text-sm md:text-base">
        © 2023 GM Advocacia | OAB/MG 215.076 | Todos os Direitos Reservados{' '}
        <a
          href="https://www.instagram.com/grasiellemoreirasilva/"
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
