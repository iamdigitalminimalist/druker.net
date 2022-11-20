import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { Container } from '@ordev/shared/ui';
import { ItemList } from '@ordev/shared/ui';
import Image from 'next/image';
import clsx from 'clsx';
import { FiChevronDown } from 'react-icons/fi';
import { FaCaretRight } from 'react-icons/fa';
import { faqs, workExperience } from '../../data/resumeData';

const metaResumePage = {
  title: 'About - Resume - Or Druker',
  description: `An informal resume that introduces myself much better`,
  image: '/or-banner.png',
  type: 'website',
};

export function CheckIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
    </svg>
  );
}

export function Resume() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container
      title={metaResumePage.title}
      description={metaResumePage.description}
      image={metaResumePage.image}
      type={metaResumePage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-slate-900 dark:text-slate-100">
            About
          </h1>
          <div className="relative w-[175px] sm:w-[200px] border-[3px] border-gray-400 dark:border-gray-100 rounded-2xl aspect-square relative my-8 mr-auto">
            <Image
              alt="Or Druker"
              layout="fill"
              src="/profile.jpg"
              sizes="30vw"
              priority
              className="rounded-xl"
            />
          </div>
          <div className="max-full py-3">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                <span className="block mb-2">Hello folks,</span>
                My name is Or Druker. I am an Israeli-Canadian software
                engineer.
              </h2>
              <dl>
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-800 dark:text-slate-300">
                            <div className="flex flex-row items-center">
                              <FaCaretRight className="h-5 w-5" />
                              <span className="text-base sm:text-md font-medium">
                                {faq.question}
                              </span>
                            </div>
                            <span className="ml-6 flex h-7 items-center">
                              <FiChevronDown
                                className={clsx(
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 transform'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2">
                          {faq.answer.map((p) => (
                            <p
                              key={p.id}
                              className="text-base mt-3 max-w-xl ml-5"
                            >
                              {p.text}
                            </p>
                          ))}
                          {faq.bullets?.map((bullet) => (
                            <li
                              key={bullet.id}
                              className="ml-6 flex mt-4 max-w-xl"
                            >
                              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                              <span className="ml-4">{bullet.text}</span>
                            </li>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <p className="mt-4 inline-block">
              I would be glad to meet you and share my passion in more depth.
            </p>
            <div className="mt-4">
              <address className="inline-block not-italic">
                Please send me an email to{' '}
                <a
                  href="mailto:or@druker.net"
                  className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600 hover:underline"
                >
                  or@druker.net
                </a>
              </address>{' '}
              or submit a form through the{' '}
              <Link href="/contact">
                <a className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600 hover:underline">
                  contact page
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
            <Link href="apps/site/pages/about/index#free-chapters">
              <a className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600">
                Download my Formal Resume <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/or-druker">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600"
              >
                Visit my LinkedIn Profile <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          </div>
          <div>
            <div className="my-8">
              <hr className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto" />
            </div>
            <ItemList
              title="Work Experience"
              workExperience={workExperience}
              open={open}
              setOpen={setOpen}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Resume;
