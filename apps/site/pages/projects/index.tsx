import { Card, Container } from '@ordev/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/outline';
import { FaGithub } from 'react-icons/fa';

// export interface ProjectsProps {}

const projects = [
  {
    name: 'Druker Dev',
    description: 'We make your life simpler. You have more time for art and craft ',
    liveSiteLink: {
      href: 'https://drukerdev.com',
      label: 'Website',
    },
    // repoLink: {
    //   href: 'https://github.com/iamdigitalminimalist/liv-lior-landingpage',
    //   label: 'Repo',
    // },
    projectLink: {
      href: '#',
      label: 'read more',
    },
    logo: 'assets/logos/druker-dev-logo-fb-desktop.png',
  },
  {
    name: 'Liv Lior',
    description: 'Connecting outdoor wellness activities with technology.',
    liveSiteLink: {
      href: 'https://livlior.com',
      label: 'Website',
    },
    // repoLink: {
    //   href: 'https://github.com/iamdigitalminimalist/liv-lior-landingpage',
    //   label: 'Repo',
    // },
    projectLink: {
      href: '#',
      label: 'read more',
    },
    logo: 'assets/logos/livlior-logo.png',
  },
  {
    name: 'Plastic Free',
    description: 'Introducing an e-commerce website for a sustainable future.',
    liveSiteLink: {
      href: 'https://e-commerce-pttk.vercel.app/',
      label: 'Website',
    },
    repoLink: {
      href: 'https://github.com/iamdigitalminimalist/plastic-free-webstore',
      label: 'Repo',
    },
    projectLink: {
      href: '#',
      label: 'read more',
    },
    logo: 'assets/logos/plastic-free-logo.svg',
  },
  {
    name: 'Rating App',
    description:
      'A simple UI, built with Svelte, to collect feedback from users',
    liveSiteLink: {
      href: 'https://svelete-rating-app.vercel.app/',
      label: 'Website',
    },
    repoLink: {
      href: 'https://github.com/iamdigitalminimalist/svelete-rating-app',
      label: 'Repo',
    },
    projectLink: {
      href: '#',
      label: 'read more',
    },
    logo: 'assets/logos/rating-app-logo.svg',
  },
  {
    name: 'Find My Zen Center (Coming Soon)',
    description: 'Helping people to find a meditation group around them',
    repoLink: {
      href: 'https://github.com/iamdigitalminimalist/find-my-zen-center-front-end',
      label: 'Repo',
    },
    projectLink: {
      href: '#',
      label: 'read more',
    },
    logo: 'assets/logos/find-zen-center-logo.svg',
  },
];

const metaProjectsPage = {
  title: 'Projects - Or Druker',
  description: `See a collection of my projects. This is how I taught myself to write code`,
  image: '/or-banner.png',
  type: 'website',
};

const Projects = () => {
  return (
    <Container
      title={metaProjectsPage.title}
      description={metaProjectsPage.description}
      image={metaProjectsPage.image}
      type={metaProjectsPage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
        <div className="flex flex-col items-start">
          <div className="mb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Projects
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I have worked on many little projects over the years, but these
              are the ones that I want to showcase. Many projects are
              open-source, so if you see something that interests you, check out
              the code and contribute if you have ideas for how to improve them.
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 w-full"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <div className="relative z-10 aspect-square flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
                  <Image src={project.logo} alt="" layout="fill" unoptimized />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.projectLink.href}>
                    {project.name}
                  </Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <div className="relative z-10 mt-6 flex flex-row gap-3 text-sm font-medium text-blue-300 transition group-hover:text-blue-500 dark:text-blue-200">
                  {project.liveSiteLink ? (
                    <div className="flex flex-row gap-1">
                      <LinkIcon className="h-5 w-5 flex-none" />
                      <Link
                        href={project.liveSiteLink.href}
                        className="ml-2 cursor-pointer"
                      >
                        <a target="_blank">{project.liveSiteLink.label}</a>
                      </Link>
                    </div>
                  ) : null}
                  {project.repoLink ? (
                    <div className="flex flex-row gap-1">
                      <FaGithub className="h-5 w-5 flex-none" />
                      <Link
                        href={project.repoLink.href}
                        className="ml-2 cursor-pointer"
                      >
                        <a target="_blank">{project.repoLink.label}</a>
                      </Link>
                    </div>
                  ) : null}
                </div>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
