/* eslint-disable react/react-in-jsx-scope */
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="pt-br">
      <body className="font-montserrat">
        <Header />
        {children}
      </body>
    </html>
  );
}
