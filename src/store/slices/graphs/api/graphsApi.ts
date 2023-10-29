import { GET, GET_GRAPHS_METHODS } from '../../../../constants/requestUrls';
import mainApi from '../../../apis/mainApi';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions';
import type { IGraphTab } from '../../../../pages/Graphs/interfaces/IGraphsForm';
import type IBaseQueryResult from '../../../types/IBaseQueryResult';

const graphsApi = mainApi.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, string, 'mainApi'>,
  ) => ({
    getGraphs: build.query<IBaseQueryResult<IGraphTab[]>, void>({
      query: () => ({
        url: GET_GRAPHS_METHODS,
        method: GET,
      }),
    }),
  }),
});

const { useGetGraphsQuery } = graphsApi;

export default useGetGraphsQuery;
