import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';
import { useEffect } from 'react';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

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
