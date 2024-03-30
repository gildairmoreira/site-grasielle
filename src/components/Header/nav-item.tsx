import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        `hover:border-b-2 hover:border-gold__principal-400 ` //        isActive && 'border-b-2 border-gold__principal-400'
      )}
    >
      {label}
    </Link>
  );
};
