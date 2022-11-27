import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

export interface OverlayProps {
  open: boolean;
  onClose: () => void;
  job: any;
}

export const Overlay = (props: OverlayProps) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll shadow-2xl bg-slate-100 dark:bg-slate-800 shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          id="slide-over-heading"
                          className="text-xl font-semibold text-slate-900 dark:text-slate-100"
                        >
                          {props.job.name}
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-500 hover:text-gray-800 focus:ring-2 focus:ring-blue-500"
                            onClick={props.onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <MdOutlineClose
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div>
                      <div className="pb-1 sm:pb-6">
                        <div>
                          <div className="">
                            <Image
                              className="object-cover aspect-video"
                              src={props.job.imageSrc}
                              alt=""
                              height={280}
                              width={500}
                            />
                          </div>
                          <div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
                            <div className="sm:flex-1">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                    {props.job.title}
                                  </h3>
                                </div>
                                <p className="text-sm text-slate-900 dark:text-slate-100">
                                  {props.job.scope}
                                </p>
                              </div>
                              <hr className="mt-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-0 pt-5 pb-5 px-1 sm:px-0 sm:pt-0">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              About
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              <p>{props.job.summary}</p>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              Highlights
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              <ul>
                                {props.job.highlights?.map((highlight: any) => (
                                  <div
                                    key={highlight.id}
                                    className="flex flex-col justify-between"
                                  >
                                    <li className="mt-2 flex flex-row justify-center">
                                      {/*<span className="font-semibold">*/}
                                      {/*  {highlight.name}*/}
                                      {/*</span>*/}
                                      <span>•</span>
                                      <span className="block ml-1">
                                        {highlight.about}
                                      </span>
                                    </li>
                                  </div>
                                ))}
                              </ul>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              Tools
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              <ul>
                                {props.job.tools?.map((tool: any) => (
                                  <li
                                    key={tool.id}
                                    className="inline-block mr-2"
                                  >
                                    {tool.name} •
                                  </li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              Location
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              {props.job.location}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              Dates
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              <time dateTime="1988-06-23">
                                {props.job.dates}
                              </time>
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-slate-900 dark:text-slate-100 sm:w-40 sm:flex-shrink-0 underline">
                              Website
                            </dt>
                            <dd className="mt-1 text-sm text-slate-900 dark:text-slate-100 sm:col-span-2">
                              <a
                                href={props.job.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600"
                              >
                                {props.job.websiteUrl.replace(
                                  /(^\w+:|^)\/\//,
                                  ''
                                )}
                              </a>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
