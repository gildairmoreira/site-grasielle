'use client';
import { useState } from 'react';
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from 'react-icons/io';

interface FAQItem {
  title: string;
  description: string;
  id: number;
}

interface FAQProps {
  faqs: FAQItem[];
}

const Faq: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    const isActive = activeIndices.includes(index);

    if (isActive) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <section
      id="faq"
      className="bg-white__fundo-100 flex flex-col items-center pb-16"
    >
      <h2 className="w-[90%] border-l-8 border-gold__principal-100 text-gold__principal-100 text-3xl font-extrabold pl-2 my-16">
        Perguntas Frequentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-screen-lg">
        {faqs.map((faq) => (
          <div key={faq.id} className="transition">
            <div
              className="cursor-pointer border-b border-gray-300 py-2 flex items-center justify-start transition"
              onClick={() => toggleAccordion(faq.id)}
            >
              {activeIndices.includes(faq.id) ? (
                <IoMdArrowDropupCircle
                  className="text-gold__principal-500 transition"
                  size={20}
                />
              ) : (
                <IoMdArrowDropdownCircle
                  className="text-black transition"
                  size={20}
                />
              )}
              <h3
                className={`pl-2 text-lg font-semibold ${
                  activeIndices.includes(faq.id)
                    ? 'text-gold__principal-500'
                    : ''
                }`}
              >
                {faq.title}
              </h3>
            </div>
            <div
              className={`mt-2 text-gray-600 transition-opacity ${
                activeIndices.includes(faq.id)
                  ? 'opacity-100'
                  : 'hidden opacity-0'
              }`}
            >
              {faq.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
