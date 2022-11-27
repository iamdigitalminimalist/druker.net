// import styles from './project-card-item.module.css';
import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { MdLink } from 'react-icons/md';

/* eslint-disable-next-line */
export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  liveSiteLink?: {
    href: string;
    label: string;
  };
  repoLink?: {
    href: string;
    label: string;
  };
  projectLink: {
    href: string;
    label: string;
  };
  logo: string;
}

export interface ProjectCardItemProps {
  project: ProjectItem;
}

export const ProjectCardItem = (props: ProjectCardItemProps) => {
  return (
    <div
      key={props.project.id}
      className="col-span-1 flex flex-col divide-y divide-gray-300 dark:divide-gray-200 rounded-lg dark:bg-gray-800 text-center shadow"
    >
      <div className="flex flex-1 flex-col p-8">
        <Image
          height={50}
          width={50}
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full bg-gray-200"
          src={props.project.logo}
          alt={`${props.project.name} logo`}
        />
        <h3 className="mt-6 text-sm font-medium dark:text-gray-100">
          {props.project.name}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm dark:text-gray-200">
            {props.project.description}
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-300 dark:divide-gray-200">
          {props.project.liveSiteLink ? (
            <div className="flex w-0 flex-1">
              <a
                href={`${props.project.liveSiteLink?.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <MdLink
                  className="h-5 w-5 dark:text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3 dark:text-gray-200">Website</span>
              </a>
            </div>
          ) : null}
          {props.project.repoLink ? (
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`${props.project.repoLink?.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <SiGithub
                  className="h-5 w-5 dark:text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3 dark:text-gray-200">Repo</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
