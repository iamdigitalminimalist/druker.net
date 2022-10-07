import { GetStaticProps } from 'next';
import { Container } from '@ordev/shared/ui';
import Image from 'next/image';
import Link from 'next/link';

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm dark:prose-dark md:prose-md">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              About {props.name}
            </h1>
            <div className="flex flex-col">
              <blockquote className="text-md sm:text-xl">
                &ldquo;a minimalist is a person who knows what is truly
                essential for himself&rdquo; &nbsp;&nbsp;— Fumio Sasaki
              </blockquote>
              <div className="flex flex-row gap-4 items-center justify-evenly">
                <div className="relative h-28 w-28 sm:h-40 sm:w-40 border border-2 border-black dark:border-white rounded-full">
                  <Image
                    src="/avatar.jpg"
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-lg sm:text-3xl">
                  Hey, <br />
                  my name is{' '}
                  <span className="italic underline underline-offset-4">
                    Or
                  </span>
                  <br />
                  How can I help you?
                </h2>
              </div>
              <div className="mt-8 -mb-4">
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

              <h3>Motivation and Drive</h3>
              <p className="-my-0.5">
                Although I am still figuring out what is the purpose of this
                website, here are some thoughts:
              </p>
              <ul>
                <li className="-mt-2">
                  <strong>Showing my work</strong> - I wanted a platform where I
                  could share knowledge with everyone and show the world what I
                  have learned and discovered.
                </li>
                <li>
                  <strong>Zen</strong> - Coding has become a meditative
                  practice, an opportunity to focus on being in the moment and
                  cultivate habits of simplicity and mindfulness.
                </li>
                <li>
                  <strong>Collaboration</strong> - I am fascinated by the
                  open-source culture established by the dev community. It is
                  intriguing how different technologies, such as version control
                  systems like{' '}
                  <Link href="https://git-scm.com/">
                    <a target="_blank">Git</a>
                  </Link>{' '}
                  could create paradigm shifts in other aspects of our lives.
                </li>
              </ul>
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] border border-2 border-black dark:border-white rounded-2xl my-4 mx-auto">
                <Image
                  src="/about.jpg"
                  alt="Or is getting kissed by a happy cow at the Happy Herd, BC, Canada"
                  layout="fill"
                  className="rounded-xl"
                  title="Or and a happy cow in an intimate moment"
                />
              </div>
              <figcaption className="text-xs sm:text-sm mx-auto mb-2 sm:mb-4">
                Getting sniffed by a happy cow at{' '}
                <Link href="https://happyherd.org/">
                  <a target="_blank">The Happy Herd Farm Sanctuary</a>
                </Link>
              </figcaption>
              <h3>Getting in touch</h3>
              <div>
                <p className="-my-0.5">
                  Would you like to give a feedback? Connect for a
                  collaboration? A work opportunity? I would be happy to hear
                  from you. What to do?
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
                      <Link href="/contact">contact page</Link>
                    </address>
                  </li>
                  <li>
                    <address>
                      Send a message on the social media @ {'  '}
                      <Link href="https://twitter.com/OrDruker">
                        <a target="_blank">Twitter</a>
                      </Link>{' '}
                      or{' '}
                      <Link href="https://www.linkedin.com/in/or-druker/">
                        <a target="_blank">LinkedIn</a>
                      </Link>
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
