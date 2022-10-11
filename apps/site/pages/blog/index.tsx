import { GetStaticProps } from 'next';
import { BlogPostCard, Container } from '@ordev/shared/ui';
import Link from 'next/link';

export interface BlogProps {
  name: string;
}

const metaBlogPage = {
  title: 'Blog - Or Druker',
  description: `Explore my articles about Zen, Development and what is between`,
  image: '/or-banner.png',
  type: 'website',
};

const Blog = (props: BlogProps) => {
  return (
    <Container
      title={metaBlogPage.title}
      description={metaBlogPage.description}
      image={metaBlogPage.image}
      type={metaBlogPage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="prose prose-sm sm:prose-lg w-full dark:prose-dark">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mr-6 mb-16 max-w-2xl font-medium">
              I am wiring on coding with a zen spirit. If you have any feedback
              or correction, kindly <Link href="/contact">contact me</Link> or
              make a pull request to the{' '}
              <Link href="https://github.com/iamdigitalminimalist/ordev/tree/main/_articles">
                <a target="_blank">articles folder in this repo</a>
              </Link>
              .
            </p>
            <div className="flex gap-6 flex-col w-full md:flex-row mt-10">
              <BlogPostCard
                title={"Developer's Mind, Beginner's Mind"}
                slug="developers-mind-beginners-mind"
                gradient="from-[#D8B4FE] to-[#818CF8]"
              />
              <BlogPostCard
                title={'React in a Nutshell - Coming Soon'}
                slug=""
                gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
              />
              <BlogPostCard
                title={'Thinking in JavaScript - Coming Soon'}
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

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  return {
    props: {
      name: 'Or',
    },
  };
};

export default Blog;
