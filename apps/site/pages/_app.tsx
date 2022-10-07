import {AppProps} from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import './styles.css';

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
