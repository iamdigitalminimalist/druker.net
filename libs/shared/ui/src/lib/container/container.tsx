import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface ContainerProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  children: JSX.Element;
}

const mainStyle =
  'flex flex-col justify-center px-8 md:px-0 bg-gray-50 dark:bg-gray-900';

export const Container = (props: ContainerProps) => {
  const { children, ...customMeta } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={props.description} name="description" />
        <meta
          property="og:url"
          content={`https://druker.net${router.asPath}`}
        />
        <link rel="canonical" href={`https://druker.net${router.asPath}`} />
        <meta property="og:type" content={props.type} />
        <meta property="og:site_name" content="Or Druker" />
        <meta property="og:description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OrDruker" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />
      </Head>
      <div className="bg-gray-50 dark:bg-gray-900 w-screen h-screen">
        <div className="flex flex-col justify-center">
          <Navbar />
          <main id="skip" className={mainStyle}>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
