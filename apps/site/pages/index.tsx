import { Container, BlogPostCard, SubscribeNewsletter } from '@ordev/shared/ui';
import Image from 'next/image';
import Link from 'next/link';

const metaHomePage = {
  title: 'Or Druker – Zen Student & Developer',
  description: `Helping developers build a faster web with cutting-edge
                technologies. Teaching front-end development with React,
                Next.js, and TypeScript.`,
  image: '/or-banner.png',
  type: 'website',
};

import { join } from 'path';

const SUBSCRIBE_API_PATH = join(process.cwd(), '/api/subscribers');
const SUBSCRIBERS_API_PATH = join(process.cwd(), '/api/subscribe?email=');

export default function Home() {
  console.log(SUBSCRIBE_API_PATH);
  console.log(SUBSCRIBERS_API_PATH);
  return (
    <Container
      title={metaHomePage.title}
      description={metaHomePage.description}
      image={metaHomePage.image}
      type={metaHomePage.type}
    >
      <>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="prose prose-sm dark:prose-dark md:prose-md">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Or Druker
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4 mt-1 text-xl sm:text-2xl">
                Zen Student & Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mr-6 mb-16 max-w-lg font-medium">
                Helping developers build a faster web with cutting-edge
                technologies. Teaching front-end development with React,
                Next.js, and TypeScript.
              </p>
            </div>
            <div className="relative w-[175px] sm:w-[200px] aspect-square relative mb-8 md:mb-0 mr-auto">
              <Image
                alt="Or Druker"
                layout="fill"
                src="/profile.jpg"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col w-full md:flex-row">
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
          <Link href="/blog">
            <a className="flex items-center mt-4 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
          <section id="newsletter" className="my-16">
            <SubscribeNewsletter />
          </section>
        </div>
      </>
    </Container>
  );
}
