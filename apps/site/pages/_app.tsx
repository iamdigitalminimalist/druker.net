import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';
import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { Analytics } from '@vercel/analytics/react';

const interVariable = Inter();

export default function App({ Component, pageProps }: AppProps) {
  // Google Tag Manager
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
