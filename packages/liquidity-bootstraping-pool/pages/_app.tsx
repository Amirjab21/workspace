import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import theme from '../styles/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GTM_ID) {
      TagManager.initialize({
        gtmId: process.env.NEXT_PUBLIC_GTM_ID,
      });
    }
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
    Router.events.on('routeChangeError', () => {
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Popcorn - DeFi for the People</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta
          name="description"
          content="Earn high yield on your cryptoassets while creating real world impact. Our fees go directly towards non-profits"
        />

        {/*  Facebook Meta Tags */}
        <meta property="og:url" content="https://popcorn.network/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Popcorn - DeFi for the People" />
        <meta
          property="og:description"
          content="Earn high yield on your cryptoassets while creating real world impact. Our fees go directly towards non-profits of your choosing."
        />
        <meta
          property="og:image"
          content="https://popcorn.network/images/popcorn_network_rocket_2.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="popcorn.network" />
        <meta property="twitter:url" content="https://popcorn.network/" />
        <meta name="twitter:title" content="Popcorn - DeFi for the People" />
        <meta
          name="twitter:description"
          content="Earn high yield on your cryptoassets while creating real world impact. Our fees go directly towards non-profits of your choosing."
        />
        <meta
          name="twitter:image"
          content="https://popcorn.network/images/popcorn_network_rocket_2.png"
        />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}