import { Container } from '@ordev/shared/ui';
import Link from 'next/link';

// TODO: Add link to the repo of the website and suggest to fork my repo and make pull requests
// TODO: Write this page in my own words

const metaUncopyrightPage = {
  title: 'Uncopyright - Or Druker',
  description: `This entire website is uncopyrighted. There is no need to email me for permission; use my content
              however you want.`,
  image: '/or-banner.png',
  type: 'website',
};

export const Uncopyright = () => {
  return (
    <Container
      title={metaUncopyrightPage.title}
      description={metaUncopyrightPage.description}
      image={metaUncopyrightPage.image}
      type={metaUncopyrightPage.type}
    >
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm md:prose-md text-black dark:text-white">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Uncopyright
            </h1>
            <h2 className="text-black dark:text-white">Disclaimer</h2>
            <p>
              {`This entire blog and website are uncopyrighted, following the same
              principles of `}
              <Link href="https://zenhabits.net/uncopyright">
                <a target="_blank">Leo Babauta&#8217;s uncopyright policy.</a>
              </Link>
            </p>
            <p>
              That means I&#8217;ve put them in the public domain, and released
              my copyright as an author (code and articles).
            </p>
            <p>
              There is no need to email me for permission &#8212; use my content
              however you want. Email it, share it, reprint it with or without
              credit. Change it around, put in a bunch of swear words and
              attribute them to me. It’s OK.
            </p>
            <p>Attribution is appreciated but not required.</p>
            <h2 className="text-black dark:text-white">
              Why I&#8217;m releasing copyright
            </h2>
            <p>
              I&#8217;m not a big fan of copyright laws, especially as
              they&#8217;re being applied by corporations, used to crack down on
              the little guys so they can continue their large profits.
            </p>
            <p>
              Copyrights are often said to protect the artist, but in most cases
              the artist gets very little while the corporations make most of
              the money.
            </p>
            <p>
              I think, in most cases, the protectionism that is touted by
              &#8220;anti-piracy&#8221; campaigns and lawsuits and lobbying
              actually hurts the artist. Limiting distribution to protect
              profits isn&#8217;t a good thing.
            </p>
            <p>
              The lack of copyright, and blatant copying by other artists and
              even businesses, never hurt Leonardo da Vinci when it comes to
              images such as the Mona Lisa. It&#8217;s never hurt Shakespeare. I
              doubt that it&#8217;s ever really hurt any artist (although I
              might just be ignorant here).
            </p>
            <p>
              And while I&#8217;m certainly not da Vinci or Shakespeare, if
              someone feels like sharing my content on their blog, or in any
              other form for that matter, that&#8217;s a good thing for me.
              That&#8217;s something to celebrate, as I see it.
            </p>
            <p>
              And if someone wants to take my work and improve upon it, as
              artists have been doing for centuries, I think that&#8217;s a
              wonderful thing. If they can take my favorite posts and make
              something funny or inspiring or thought-provoking or even sad
              &#8230; I say more power to them. The creative community only
              benefits from derivations and inspirations.
            </p>
            <p>
              This isn&#8217;t a new concept, of course, and I&#8217;m freely
              ripping ideas off here. Which is kinda the point.
            </p>
          </article>
        </div>
      </div>
    </Container>
  );
};

export default Uncopyright;
