import NextLink from 'next/link';
import {useRouter} from 'next/router';

import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

interface NavItemProps {
  href: string
  text: string
}

const navLinks = [
  {
    id: "1",
    href: "/",
    text: "Home"
  },
  {
    id: "2",
    href: "/blog",
    text: "Blog"
  },
  {
    id: "3",
    href: "/about",
    text: "About"
  }
]

function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}

function NavItem({href, text}: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <Disclosure.Button
        as="button"
        className={classNames(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-800 bg-gray-100'
            : 'font-normal text-gray-300 dark:text-gray-400 hover:text-gray-800',
          'cursor-pointer inline-block p-1 px-3 py-2 rounded-lg hover:bg-gray-200 dark:transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </Disclosure.Button>
    </NextLink>
  )
}

export default function Navbar() {
  return (
      <Disclosure as="nav"
                  className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100"
                  aria-label="Header"
      >
        {({open}) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navLinks.map(navLink => {
                        return (
                          <NavItem key={navLink.id} href={navLink.href} text={navLink.text}/>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
  )
}
