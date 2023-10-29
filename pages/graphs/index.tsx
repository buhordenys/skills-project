import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Page from '../../src/layout/page/Page';
import GraphsView from '../../src/pages/Graphs/GraphsView';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks/useApp';
import useGetGraphsQuery from '../../src/store/slices/graphs/api/graphsApi';
import getActiveGraph from '../../src/store/slices/graphs/selectors';
import { setGraphsStates } from '../../src/store/slices/graphs/slice';

import type { TChartsTypes } from '../../src/constants/general';
import type IStaticProps from '../../src/interfaces/IStaticProps';

function Graphs() {
  const dispatch = useAppDispatch();

  const { activeGraph } = useAppSelector(getActiveGraph);

  const { data: graphs } = useGetGraphsQuery();

  const handlerChange = (active: TChartsTypes) => {
    dispatch(setGraphsStates({ activeGraph: active }));
  };

  return (
    <Page>
      <GraphsView
        graphs={graphs?.data || []}
        activeGraph={activeGraph}
        handlerChange={handlerChange}
      />
    </Page>
  );
}

export const getStaticProps = async ({ locale }: IStaticProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'graphs']),
  },
});

export default Graphs;
