import { Container } from '@ordev/shared/ui';
import Link from 'next/link';

// TODO: Add link to the repo of the website and suggest to fork my repo and make pull requests
// TODO: Write this page in my own words

export const Uncopyright = () => {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm md:prose-md text-black dark:text-white">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Privacy Policy
            </h1>
            <p>Last updated on October 8, 2022</p>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default Uncopyright;
