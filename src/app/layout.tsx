/* eslint-disable react/react-in-jsx-scope */
import { Header } from '@/components/Header';
import { Inter, DM_Serif_Text } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import SocialSection from '@/components/SocialSection';
import { Footer } from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '600', '800']
});

const dmtext = DM_Serif_Text({
  variable: '--font-dmtext',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'Advogada Grasielle',
  description: 'Site advogada grasielle'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${dmtext.variable}`}>
      <body className="font-montserrat">
        <Header />
        {children}
        <SocialSection />
        <Footer />
      </body>
    </html>
  );
}
