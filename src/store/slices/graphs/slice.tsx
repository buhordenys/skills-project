import { createSlice } from '@reduxjs/toolkit';

import { CHARTS_TYPES } from '../../../constants/general';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IGraphsState } from './interfaces/IGraphsState';

export const initialState: IGraphsState = {
  activeGraph: CHARTS_TYPES.HIGHCHARTS_LINE,
};

const graphsSlice = createSlice({
  name: 'graphs',
  initialState,
  reducers: {
    initial: () => initialState,
    setGraphsStates: (state: IGraphsState, action: PayloadAction<Partial<IGraphsState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const {
  initial,
  setGraphsStates,
} = graphsSlice.actions;

export default graphsSlice.reducer;
