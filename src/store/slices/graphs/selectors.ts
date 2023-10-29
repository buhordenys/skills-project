import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';

const selfGraphs = (state: RootState) => state.graphs;

const getActiveGraph = createSelector(
  [selfGraphs],
  ({ activeGraph }) => ({ activeGraph }),
);

export default getActiveGraph;
