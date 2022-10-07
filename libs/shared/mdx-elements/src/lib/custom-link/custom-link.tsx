import styles from './custom-link.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface CustomLinkProps {
  as: string;
  href: string;
}

export function CustomLink({ as, href, ...otherProps }: CustomLinkProps) {
  return (
    <Link as={as} href={href}>
      <a
        target="_blank"
        className="no-underline transition ease-in-out duration-300 hover:opacity-80 hover:underline"
        {...otherProps}
      />
    </Link>
  );
}

export default CustomLink;
