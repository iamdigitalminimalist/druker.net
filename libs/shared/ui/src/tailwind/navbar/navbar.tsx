import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

interface NavItemProps {
  href: string;
  text: string;
}

const navLinks = [
  {
    id: '1',
    href: '/',
    text: 'Home',
  },
  {
    id: '2',
    href: '/projects',
    text: 'Projects',
  },
  {
    id: '3',
    href: '/about',
    text: 'About',
  },
];

function NavItem({ href, text }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={clsx(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-800 bg-gray-200'
          : 'font-normal text-gray-300 dark:text-gray-400 dark:hover:text-gray-600',
        'cursor-pointer inline-block p-1 px-3 py-2 mx-[1px] sm:mx-2 rounded-lg hover:bg-gray-200 dark:transition-all'
      )}
    >
      <span>{text}</span>
    </NextLink>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // Getting access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-center sm:items-start sm:justify-between gap-3 sm:gap-4 w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
      <div className="sm:flex-1">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        {navLinks.map((navLink) => {
          return (
            <NavItem key={navLink.id} href={navLink.href} text={navLink.text} />
          );
        })}
      </div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="sm:flex-2 w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300  transition-all"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-gray-800 dark:text-gray-200"
          >
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
    </nav>
  );
}
