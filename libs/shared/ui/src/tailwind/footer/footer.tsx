import Link from 'next/link';
import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
// export interface FooterProps {}

const navigation = {
  main: [
    {
      key: 1,
      name: 'Contact',
      href: '/contact',
    },
    {
      key: 2,
      name: 'Uncopyright',
      href: '/uncopyright',
    },
    {
      key: 3,
      name: 'Privacy Policy',
      href: '/privacy-policy',
    },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/or-druker',
      icon: SiLinkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/iamdigitalminimalist',
      icon: SiGithub,
    },
    {
      name: 'Email',
      href: 'mailto:or@druker.net',
      icon: MdEmail,
    },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 w-screen h-full">
      <hr className="max-w-[250px] sm:max-w-lg lg:max-w-3xl mx-auto mt-8" />
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.key} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-600 dark:text-gray-200 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex items-center justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-900"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
