import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import type { AppProps } from 'next/app';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './_app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Bharat Middha - Coder, Tinkerer, Maker</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
