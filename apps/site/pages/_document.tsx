import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        {/*<link*/}
        {/*  rel="preload"*/}
        {/*  href="/fonts/ibm-plex-sans-var.woff2"*/}
        {/*  as="font"*/}
        {/*  type="font/woff2"*/}
        {/*  crossOrigin="anonymous"*/}
        {/*/>*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-900 w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
