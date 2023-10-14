import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '../src/layout/page/Page';
import HomeView from '../src/pages/Home/HomeView';

import type IStaticProps from '../src/interfaces/IStaticProps';

function Home() {
  return (
    <Page>
      <HomeView />
    </Page>
  );
}

export const getStaticProps = async ({ locale }: IStaticProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
});

export default Home;
