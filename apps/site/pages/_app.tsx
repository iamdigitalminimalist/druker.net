import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './styles.css';
import Script from 'next/script';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const isProduction = process.env.NODE_ENV === 'production';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        {isProduction ? (
          <GoogleAnalytics trackPageViews strategy="afterInteractive" />
        ) : null}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
