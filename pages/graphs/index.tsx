import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { POPULAR_CURRENCIES } from '../../src/constants/general';
import Page from '../../src/layout/page/Page';
import GraphsView from '../../src/pages/Graphs/GraphsView';
import { useAppDispatch, useAppSelector } from '../../src/store/hooks/useApp';
import { useGetCurrencyHistoricalQuery } from '../../src/store/slices/currency/api/currencyApis';
import useGetGraphsQuery from '../../src/store/slices/graphs/api/graphsApi';
import getActiveGraph from '../../src/store/slices/graphs/selectors';
import { setGraphsStates } from '../../src/store/slices/graphs/slice';

import type { TChartsTypes } from '../../src/constants/general';
import type IStaticProps from '../../src/interfaces/IStaticProps';

function Graphs() {
  const dispatch = useAppDispatch();

  const { activeGraph } = useAppSelector(getActiveGraph);

  const { data: graphs, isSuccess } = useGetGraphsQuery();
  const { data: currencyHistoricalQuery } = useGetCurrencyHistoricalQuery({
    date: new Date().toISOString().slice(0, 10),
    symbols: POPULAR_CURRENCIES.join(','),
  });

  const handlerChange = (active: TChartsTypes) => {
    dispatch(setGraphsStates({ activeGraph: active }));
  };

  return (
    <Page>
      {isSuccess ? (
        <GraphsView
          graphs={graphs?.data || []}
          historicalRates={currencyHistoricalQuery?.rates || {}}
          activeGraph={activeGraph}
          handlerChange={handlerChange}
        />
      ) : null}
    </Page>
  );
}

export const getStaticProps = async ({ locale }: IStaticProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'graphs']),
  },
});

export default Graphs;
