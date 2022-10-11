import { GetStaticProps } from 'next';
import { Container } from '@ordev/shared/ui';
import Image from 'next/image';
import Link from 'next/link';

export interface AboutProps {
  name: string;
}

const metaAboutPage = {
  title: 'About - Or Druker',
  description: `An informal introduction to who is Or Druker and what this website is all about`,
  image: '/or-banner.png',
  type: 'website',
};

export function About(props: AboutProps) {
  return (
    <Container
      title={metaAboutPage.title}
      description={metaAboutPage.description}
      image={metaAboutPage.image}
      type={metaAboutPage.type}
    >
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm sm:prose-lg dark:prose-dark w-full">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              About {props.name}
            </h1>
            <div className="flex flex-col">
              <blockquote className="text-gray-600 dark:text-gray-400 mr-6 mb-8 max-w-xl font-medium">
                &ldquo;minimalists are people who know what&apos;s truly
                necessary for them versus what they may want for the sake of
                appearance&rdquo; &nbsp;&nbsp;— Fumio Sasaki
              </blockquote>
              <div className="flex flex-col items-center justify-evenly mt-4">
                <div className="relative w-full aspect-video border border-2 border-black dark:border-white rounded-lg">
                  <Image
                    src="/happy-herd-16-9-ratio.jpg"
                    layout="fill"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">
                  Hey, <br />
                  my name is{' '}
                  <span className="italic underline underline-offset-4">
                    Or
                  </span>
                  <br />
                  How can I help you?
                </h2>
              </div>
              <div className="mt-4 -mb-4">
                <p>
                  Thanks for taking the time and interest in hearing more about
                  my journey
                </p>
                <ol>
                  <li>
                    If you are interested in my technical background, please
                    consider reading some of my{' '}
                    <Link href="/blog">blog posts</Link>.
                  </li>
                  <li>
                    If you are interested to see some of my demo projects,
                    please consider visiting the{' '}
                    <Link href="/projects">project page</Link>.
                  </li>
                </ol>
                <p>
                  Otherwise, please proceed with reading the informal
                  introduction below.
                </p>
              </div>
              <hr />

              <h3>Motivation and Practice</h3>
              <div>
                <p className="-my-0.5">
                  I feel very fortunate to get support along the way. Creating
                  this platform is a means to give back and plant the seeds for
                  the next generation of zen developers 🤓
                </p>
                <ul>
                  <li>
                    <strong>Showing my work</strong> - I wanted a website where
                    I could share knowledge with everyone and show the world
                    what I have learned and discovered.
                  </li>
                  <li>
                    <strong>Zen</strong> - Coding has become a part of my
                    meditation practice, an opportunity to focus on being in the
                    present moment and explore new forms of simplicity and
                    mindfulness.
                  </li>
                  <li>
                    <strong>Collaboration</strong> - I am fascinated by the
                    open-source culture established by the dev community. It is
                    intriguing how different technologies, such as version
                    control systems like{' '}
                    <Link href="https://git-scm.com/">
                      <a target="_blank">Git</a>
                    </Link>{' '}
                    could create paradigm shifts in other aspects of our lives.
                  </li>
                </ul>
              </div>
              <div className="relative w-full aspect-square border border-2 border-black dark:border-white rounded-2xl mx-auto">
                <Image
                  src="/about.jpg"
                  alt="Or is getting kissed by a happy cow at the Happy Herd, BC, Canada"
                  layout="fill"
                  className="rounded-xl"
                  title="Or and a happy cow in an intimate moment"
                />
              </div>
              <figcaption className="text-[0.75rem] sm:text-sm mx-auto mb-2 sm:mb-4">
                Getting sniffed by a happy cow at{' '}
                <Link href="https://happyherd.org/">
                  <a target="_blank">The Happy Herd Farm Sanctuary</a>
                </Link>
              </figcaption>
              <h3>Getting in touch</h3>
              <div>
                <p className="-my-0.5">
                  Would you like to give feedback? Connect for a collaboration?
                  Offer a job? I would be happy to hear from you. Here are some
                  ways to contact me:
                </p>
                <ul>
                  <li className="-mt-2">
                    <address>
                      Send an email to{' '}
                      <a href="mailto:hello@druker.net">hello@druker.net</a>
                    </address>
                  </li>
                  <li>
                    <address>
                      Submit a form on the{' '}
                      <Link href="/contact">contact page</Link>{' '}
                      {` (doesn't work at
                      the moment)`}
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Or',
    },
  };
};

export default About;
