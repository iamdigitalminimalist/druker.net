import { Container } from '@ordev/shared/ui';
import Link from 'next/link';

const metaNotFoundPage = {
  title: '404 Page Not Found - Or Druker',
  description: `This page doesn't exist. Please try different URL.`,
  image: '/or-banner.png',
  type: 'website',
};

const NotFoundPage = () => {
  return (
    <Container
      title={metaNotFoundPage.title}
      description={metaNotFoundPage.description}
      image={metaNotFoundPage.image}
      type={metaNotFoundPage.type}
    >
      <section className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Something Went Wrong 🫣
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It is either you have found something that used to exist, or you
          spelled something wrong. Can you double check the URL?
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-300 dark:bg-gray-800 text-center hover:bg-gray-400 hover:opacity-70 rounded-md text-gray-900 dark:text-gray-200"
        >
          Return Home
        </Link>
      </section>
    </Container>
  );
};

export default NotFoundPage;
