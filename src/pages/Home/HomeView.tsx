import { useTranslation } from 'next-i18next';

import Title from '../../components/Title/Title';
import Layout from '../../layout/Layout';
import Cards from './components/Cards';

function HomeView() {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Title>
          {t('welcomeMessage')}
        </Title>
        <p className="text-center text-2xl my-6">
          {t('getStarted')}
        </p>
        <Cards />
      </div>
    </Layout>
  );
}

export default HomeView;
