import { createSlice } from '@reduxjs/toolkit';

import type { IHomeState } from './interfaces/IHomeResponse';

export const initialState: IHomeState = {
  id: undefined,
  token: undefined,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    initial: () => initialState,
  },
});

export const { initial } = homeSlice.actions;

export default homeSlice.reducer;
