import { useTranslation } from 'next-i18next';

import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import Layout from '../../layout/Layout';

import type { IGraphsView } from './interfaces/IGraphsView';

function GraphsView({ graphs, activeGraph, handlerChange }: IGraphsView) {
  const { t } = useTranslation('graphs');

  return (
    <Layout customMainStyles="pt-0">
      <div>
        <Title customTextSize="text-4xl">
          {t('graphs')}
        </Title>
        <div className="relative">
          <div className="flex gap-5 justify-start items-center ml-20">
            {graphs.map((graph) => (
              <Tabs
                key={graph.id}
                activeGraph={activeGraph}
                tab={graph}
                handlerChange={handlerChange}
              />
            ))}
          </div>
          <div className="absolute bottom-0 w-full h-px bg-gray-300 " />
        </div>
      </div>
    </Layout>
  );
}

export default GraphsView;
