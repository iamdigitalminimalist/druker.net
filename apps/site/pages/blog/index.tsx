import { GetStaticProps } from 'next';
import { Container } from '@ordev/shared/ui';

export interface BlogProps {
  name: string;
}

export function Blog(props: BlogProps) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm md:prose-md">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Blog {props.name}!
            </h1>
          </article>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  return {
    props: {
      name: 'Or',
    },
  };
};

export default Blog;
