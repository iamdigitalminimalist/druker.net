import Link from 'next/link';
import { Container } from '@ordev/shared/ui';
import Image from 'next/image';
import { RiPlantLine, RiEmpathizeFill } from 'react-icons/ri';
import { GiMeditation } from 'react-icons/gi';
import { MdOutlinePodcasts } from 'react-icons/md';
import clsx from 'clsx';

const metaAboutPage = {
  title: 'About - Or Druker',
  description: `An informal introduction to who is Or Druker and what this website is all about`,
  image: '/or-banner.png',
  type: 'website',
};

const funFacts = [
  {
    id: 1,
    title: 'I lead Plant-based lifestyle',
    description:
      'I eat only plant-based whole foods and consume cruelty-free products. It is not religion, just a preference and a way to support animals.',
    icon: RiPlantLine,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    id: 2,
    title: 'I invented an empathy practice at age 7',
    description:
      'In my practice, I used to imagine the world through the perspective of characters in the books I read. I remember appreciating well-rounded characters that presented raw emotions with high intellectual skills.',
    icon: RiEmpathizeFill,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'I practice zen meditation and minfulness',
    description:
      'In the last 5 years, I have been practicing meditation almost every day. I practice both by myself and with a group.',
    icon: GiMeditation,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    id: 4,
    title: 'I listen to podcasts at 2x speed',
    description:
      'I trained myself to listen at 2x speed so I could save time. I am working now to consume content at 3x speed.',
    icon: MdOutlinePodcasts,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
];

export function About() {
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
              About
            </h1>
            <div className="flex flex-col -mt-4 sm:-mt-16">
              <h2 className="leading-tight text-2xl md:text-3xl text-black dark:text-white">
                Hi, my name is{' '}
                <span className="italic underline underline-offset-4">
                  Or Druker.
                </span>{' '}
                I am a technology researcher, developer, and writer.
              </h2>
              <p className="leading-tight text-2xl md:text-3xl text-gray-700 dark:text-slate-300 mt-3">
                By applying my skills and knowledge, I aspire to support
                sustainable-innovative visions and take my part in making the
                world a better place.
              </p>
              <div className="flex flex-col items-center justify-evenly -mt-4 sm:-mt-8">
                <div className="relative w-full aspect-video rounded-lg">
                  <Image
                    src="/happy-herd-16-9-ratio.jpg"
                    alt=""
                    width={650}
                    height={435}
                    className="rounded-md"
                  />
                </div>
              </div>

              <div>
                <h3>A glimpse of my past</h3>
                <p className="-my-0.5">
                  I was born in 1989 in Israel. Since childhood, I always had an{' '}
                  <em>
                    <b>interest in art, culture, and technology</b>
                  </em>
                  . I would sit for hours in the public library, surfing the
                  internet, trying to get a taste the vast knowledge of the
                  world 🤓
                </p>
                <p>
                  A dear teacher used to say I have the{' '}
                  <em>
                    <b>rare combination of a high IQ and EQ</b>
                  </em>
                  . In High School, I was an active member of The Scouts
                  Movement and a top student in my class. I majored in{' '}
                  <u>Computer Science</u>, <u>Math</u>, <u>Data Science</u>, and{' '}
                  <u>Biology</u>.
                </p>
                <p>
                  After graduating High School, I got drafted into the{' '}
                  <em>
                    <b>highly competitive intelligence IDF Unit 8200</b>
                  </em>{' '}
                  due to my <u>creativity</u>, <u>analytical thinking</u>, and{' '}
                  <u>leadership skills</u>. Throughout my military service, I
                  was a <em>Traffic Analyst and Course Instructor</em>.
                </p>
                <p>
                  In the last decade, I have studied and worked with{' '}
                  <em>
                    <b>various subjects and technologies</b>
                  </em>
                  , starting with a BA in <u>Psychology</u> and{' '}
                  <u>Literature</u> at The Hebrew University of Jerusalem, then
                  a Diploma in <u>Graphic Communication</u> at the British
                  Columbia Institute of Technology (BCIT), and now,{' '}
                  <u>Full Stack Development</u> as self-taught.
                </p>
                <p>
                  While my career path is somewhat unusual, the{' '}
                  <em>
                    <b>broad perspective I have accumulated over the years</b>
                  </em>{' '}
                  gives me a competitive advantage. I am both a{' '}
                  <u>People and Tech person</u>, which is - in my opinion - a
                  key to sustainable success in the modern world.
                </p>
              </div>
              <div>
                <h3>What values do I live by?</h3>
                <h4 className="sm:-my-0.5">Kindness ❣️</h4>
                <p>
                  I feel very fortunate for the many kind people I crossed paths
                  with who taught me the importance of kindness as a way of
                  living. Throughout my journey, I have learned that it feels
                  better to give than to take, and that if you are mindful and
                  kind to your surroundings, people remember your generosity and
                  pass that attitude onward.
                </p>
                <h4 className="sm:-my-0.5">Simplicity 🧘🏽</h4>
                <p>
                  Life is full of distractions, and one could get overwhelmed
                  when things are complicated and confusing. I found the
                  practice of simplicity to be a key to overcoming these
                  moments. Every time I get to this confused state of mind, I
                  take a deep breath and ask myself: &ldquo;what is
                  essential?&rdquo; and then prioritize.
                </p>
                <h4 className="sm:-my-0.5">Collaboration 👬</h4>
                <p>
                  I am fascinated by the open-source culture established by the
                  dev community. It is intriguing how different technologies,
                  such as version control systems like{' '}
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Git
                  </a>{' '}
                  could create paradigm shifts in other aspects of our lives. We
                  can accomplish much more together than separately.
                </p>
              </div>
              <div className="relative w-full aspect-square rounded-2xl mx-auto -mb-6 sm:-mb-10">
                <Image
                  src="/about.jpg"
                  alt="Or is getting kissed by a happy cow at the Happy Herd, BC, Canada"
                  width={672}
                  height={672}
                  className="rounded-xl"
                  title="Or and a happy cow in an intimate moment"
                />
              </div>
              <figcaption className="sm:text-sm text-left">
                Getting sniffed by a happy cow at{' '}
                <a
                  href="https://happyherd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Happy Herd Farm Sanctuary
                </a>
                .
              </figcaption>

              <div>
                <h3>Fun Facts</h3>
                <div className="divide-y divide-gray-300 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                  {funFacts.map((fact, actionIdx) => (
                    <div
                      key={fact.id}
                      className={clsx(
                        actionIdx === 0
                          ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                          : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === funFacts.length - 2
                          ? 'sm:rounded-bl-lg'
                          : '',
                        actionIdx === funFacts.length - 1
                          ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                          : '',
                        'relative group bg-gray-200 dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                      )}
                    >
                      <div>
                        <span
                          className={clsx(
                            fact.iconBackground,
                            fact.iconForeground,
                            'rounded-lg inline-flex p-3 ring-4 ring-gray-400'
                          )}
                        >
                          <fact.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-medium">
                          <p className="focus:outline-none">{fact.title}</p>
                        </h3>
                        <p className="mt-2 text-md">{fact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3>Getting in touch</h3>
                <p>
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
                      <Link href="/contact">contact page</Link>
                    </address>
                  </li>
                  <li>
                    <address>
                      Contact me through{' '}
                      <a
                        href="https://www.linkedin.com/in/or-druker"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        LinkedIn profile
                      </a>
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

export default About;
