import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';
import type IHomeResponse from './interfaces/IHomeResponse';

const selectAuth = (state: RootState): IHomeResponse => state.home;

export const selectUserId = createSelector(selectAuth, (home) => home.id);
export const selectUserToken = createSelector(selectAuth, (home) => home.token);

export const selectCurrentUser = createSelector(
  (data: IHomeResponse | undefined) => data,
  (data: IHomeResponse | undefined, userId: IHomeResponse['id'] | undefined) => userId,
  (data, userId) => (userId ? data : undefined),
);
