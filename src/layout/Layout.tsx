import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import Footer from './footer/Footer';

import type { ILayoutProps } from './interfaces/ILayoutProps';

function Layout({ children }: ILayoutProps) {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-[calc(100vh-55px)] py-0.5 flex flex-col">
      <Head>
        <title>{t('myTechnology')}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="py-20 flex flex-1 flex-col">
        {children}
      </main>
      <div id="modal-container" />
      <Footer />
    </div>
  );
}

export default Layout;
