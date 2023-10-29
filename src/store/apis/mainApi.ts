import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  FORBIDDEN, INTERNAL_SERVER_ERROR, METHOD_NOT_ALLOWED, NOT_FOUND,
} from '../../constants/httpStatusCodes';
import { API_BASE_URL } from '../../constants/requestUrls';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';

const authBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const appBaseQueryWithReauth: BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await authBaseQuery(args, api, extraOptions);
  if (result.error) {
    const { status } = result.error;
    if (+status >= INTERNAL_SERVER_ERROR
      || ('originalStatus' in result.error && +result.error.originalStatus >= INTERNAL_SERVER_ERROR)
    ) {
      // TODO: add error handling or server error modal
    } else if (status === NOT_FOUND) {
      // TODO: add 404 page
    } else if (status === FORBIDDEN || status === METHOD_NOT_ALLOWED) {
      // TODO: add 403 page
    }
  }
  return result;
};

const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: appBaseQueryWithReauth,
  endpoints: () => ({}),
});

export default mainApi;
