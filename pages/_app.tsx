import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../src/store';

import type { AppProps } from 'next/app';
import type IStaticProps from '../src/interfaces/IStaticProps';

import '../src/pages/App/sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </React.StrictMode>

  );
}

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(MyApp);
