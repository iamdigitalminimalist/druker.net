import styles from './custom-link.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  children: React.ReactNode
  as: string;
  href: string;
}

export function CustomLink({ as, href,children, ...otherProps }: CustomLinkProps) {
  return (
    <Link as={as} href={href}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline transition ease-in-out duration-300 hover:opacity-80 hover:underline"
        {...otherProps}
      >
        {children}
      </a>
    </Link>
  );
}

export default CustomLink;
