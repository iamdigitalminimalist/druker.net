import { Container, ProjectCardItem } from '@ordev/shared/ui';
import { projects } from '../../data/projectsData';

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
              the code and fork it.
            </p>
          </div>
          <div className="grid grid-cols-1 max-w-xs gap-6 sm:grid-cols-2 sm:max-w-2xl mx-auto">
            {projects.map((project) => (
              <ProjectCardItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
