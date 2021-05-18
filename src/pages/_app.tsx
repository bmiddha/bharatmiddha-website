import { NavBar } from '../components/NavBar';
import type { AppProps /*, AppContext */ } from 'next/app';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './_app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
