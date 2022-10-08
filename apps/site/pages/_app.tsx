import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <GoogleAnalytics trackPageViews strategy="afterInteractive" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
