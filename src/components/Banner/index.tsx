import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
}

export function Banner({ children }: BannerProps) {
  return (
    <>
      <h1>Banner</h1>
      {children}
    </>
  );
}
