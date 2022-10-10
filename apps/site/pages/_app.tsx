import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Script from 'next/script';
import { useEffect } from 'react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

// const isProduction = process.env.NODE_ENV === 'production';

function CustomApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
