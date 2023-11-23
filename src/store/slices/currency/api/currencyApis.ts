import {
  API_BASE_URL_CURRENCY_SYMBOLS,
  GET,
  GET_CURRENCY_EXCHANGERATESAPI,
} from '../../../../constants/requestUrls';
import mainApi from '../../../apis/mainApi';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions';
import type { ICurrencyHistorical, ICurrencySymbols } from '../../../../pages/Graphs/interfaces/IGraphsForm';
import type { ICurrencyHistoricalParams } from '../interfaces/ICurrencyParams';

const currencyApis = mainApi.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, string, 'mainApi'>,
  ) => ({
    getCurrencySymbols: build.query<ICurrencySymbols, void>({
      query: () => ({
        url: GET_CURRENCY_EXCHANGERATESAPI,
        method: GET,
        params: {
          sybApi: API_BASE_URL_CURRENCY_SYMBOLS,
          access_key: process.env.NEXT_PUBLIC_EXCHANGERATESAPI_CURRENCY,
        },
      }),
    }),
    getCurrencyHistorical: build.query<ICurrencyHistorical, ICurrencyHistoricalParams>({
      query: ({ date, base, symbols }) => ({
        url: GET_CURRENCY_EXCHANGERATESAPI,
        method: GET,
        params: {
          sybApi: `/${date}`,
          access_key: process.env.NEXT_PUBLIC_EXCHANGERATESAPI_CURRENCY,
          base,
          symbols,
        },
      }),
    }),
  }),
});

export const {
  useGetCurrencySymbolsQuery,
  useGetCurrencyHistoricalQuery,
} = currencyApis;
