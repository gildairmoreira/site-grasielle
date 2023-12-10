// components/SocialSection.tsx
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialSection = () => {
  return (
    <section className="flex items-center justify-center h-[30vh]">
      <div className="w-1/2 h-max">
        <Image
          src="/images/logo-simbolo.png"
          alt="Logo da Advogada"
          width={400}
          height={400}
          className="w-full ob"
        />
      </div>

      {/* Parte direita - Redes Sociais */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Redes Sociais</h2>
        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            <FaFacebook />
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Grasielle moreira
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            <FaInstagram />
          </div>
          <div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              @grasiellemoreirasilva
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-2xl">
            <FaInstagram />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              grassiele moreira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
