import { useState, useEffect } from 'react';
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import ContextProvider from '../store/context';
import ErrorBoundary from '../components/ErrorBoundary';

import '../styles/globals.css';
import '../styles/sideDrawer.css';
import '../styles/mobileNavLinks.css';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      // <ErrorBoundary fallback="An error occured!">
      <>
        <Head>
          <title>Reklaminiai.lt</title>
          <meta name="description" content="reklaminės prekės ir aksesuarai" />
        </Head>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
        </>
      // </ErrorBoundary>
    );
  }
}

export default MyApp;
