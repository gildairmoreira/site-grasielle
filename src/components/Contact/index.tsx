import React from 'react';
import { ContactInfos } from './ContactInfos';
import { ContactForm } from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-dark__principal-300 py-16 text-white">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Lado Esquerdo */}
        <ContactInfos />
        {/* Lado Direito */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
