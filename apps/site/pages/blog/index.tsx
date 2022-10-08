import { GetStaticProps } from 'next';
import { BlogPostCard, Container } from '@ordev/shared/ui';
import Link from 'next/link';

export interface BlogProps {
  name: string;
}

const Blog = (props: BlogProps) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="prose prose-sm sm:prose-lg w-full dark:prose-dark">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Blog
            </h1>
            <p className="my-4">
              I am wiring on everything between coding to zen. If you have any
              feedback or correction, please{' '}
              <Link href="/contact">contact me</Link> or make a pull request to
              the{' '}
              <Link href="https://github.com/iamdigitalminimalist/ordev/tree/main/_articles">
                <a target="_blank">articles folder in therepo</a>
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
