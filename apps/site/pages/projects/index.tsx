import { GetStaticProps } from 'next';
import { BlogPostCard, Container } from '@ordev/shared/ui';
import Link from 'next/link';

export interface ProjectsProps {}

const metaProjectsPage = {
  title: 'Projects - Or Druker',
  description: `See a collection of my projects. This is how I taught myself to write code`,
  image: '/or-banner.png',
  type: 'website',
};

const Projects = (props: ProjectsProps) => {
  return (
    <Container
      title={metaProjectsPage.title}
      description={metaProjectsPage.description}
      image={metaProjectsPage.image}
      type={metaProjectsPage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="prose prose-md sm:prose-lg w-full dark:prose-dark">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Projects
            </h1>
            <p className="my-4">
              List of my projects...
              <Link href="https://github.com/iamdigitalminimalist/ordev/tree/main/_articles">
                <a target="_blank">articles folder in therepo</a>
              </Link>
              .
            </p>
            <div className="flex gap-6 flex-col w-full md:flex-row mt-10">
              <BlogPostCard
                title={'Find My Zen Center - Coming Soon'}
                slug=""
                gradient="from-[#D8B4FE] to-[#818CF8]"
              />
              <BlogPostCard
                title={'Plastic Free Store - Coming Soon'}
                slug=""
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title={'Liv Lior Landingpage - Coming Soon'}
                slug=""
                gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
