import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selectAuth = (state: RootState) => state.home;

export const selectUserId = createSelector(selectAuth, (home) => home.id);
export const selectUserToken = createSelector(selectAuth, (home) => home.token);
export const selectCurrentUser = createSelector(
  (data) => data,
  (data, userId) => userId,
  (data, userId) => (userId ? data : undefined),
);
