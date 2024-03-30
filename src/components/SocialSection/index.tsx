// components/SocialSection.tsx
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

/* const SocialSection = () => {
  return (
    <section
      className="flex p-2 items-center justify-center bg-black bg-right bg-no-repeat border-y-2 border-gold__principal-100"
      style={{ backgroundImage: "url('/images/world.png')" }}
    >
      <div className="w-1/2">
        <Image
          src="/images/logo-simbolo.png"
          alt="Logo da Advogada"
          width={400}
          height={400}
          className="m-auto"
        />
      </div>

      //Parte direita - Redes Sociais
      <div className="flex flex-col justify-around w-1/2 h-[60vh] pl-[10%] ">
        <h2 className="text-3xl font-bold mb-4 text-gold__principal-100 uppercase">
          Redes Sociais
        </h2>
        <div className="flex flex-col justify-around text-white">
          <div className="flex items-center space-x-4 py-3">
            <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
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
          <div className="flex items-center space-x-4 py-3">
            <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
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

          <div className="flex items-center space-x-4 py-3">
            <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
              <FaLinkedin />
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

          <div className="flex items-center space-x-4 py-3">
            <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
              <FaTiktok />
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
      </div>
    </section>
  );
}; 
*/

const SocialSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row p-2 items-center justify-center bg-contain md:bg-right bg-no-repeat border-y-2 border-gold__principal-100 bg-black"
      style={{ backgroundImage: "url('/images/world.png')" }}
    >
      {/* Parte Esquerda - Logo */}
      <div className="w-full md:w-1/2">
        <Image src="/images/logo-simbolo.png" alt="Logo da Advogada" width={400} height={400} className="m-auto" />
      </div>

      {/* Parte Direita - Redes Sociais */}
      <div className="flex flex-col justify-around w-full md:w-1/2 h-[60vh] md:pl-[5%]">
        <h2 className="text-3xl text-center md:text-start font-bold mb-4 text-gold__principal-100 uppercase">
          Redes Sociais
        </h2>
        <div className="flex flex-col items-center md:items-start text-white">
          <div className="flex flex-col justify-around text-white">
            <div className="flex items-center space-x-4 py-3">
              <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
                <FaFacebook />
              </div>
              <div>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Grasielle moreira
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-3">
              <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
                <FaInstagram />
              </div>
              <div>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  @grasiellemoreirasilva
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 py-3">
              <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
                <FaLinkedin />
              </div>
              <div>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  grassiele moreira
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 py-3">
              <div className="text-2xl p-1 rounded bg-[#ffffff38] bg-blend">
                <FaTiktok />
              </div>
              <div>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  grassiele moreira
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
