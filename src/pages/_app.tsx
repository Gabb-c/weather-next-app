import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar closeButton={false} />
    </>
  );
}

export default MyApp;
