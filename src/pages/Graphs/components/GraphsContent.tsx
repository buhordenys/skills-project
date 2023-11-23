import React from 'react';

import { APEXCHARTS_LINE, HIGHCHARTS_LINE } from '../../../constants/general';
import GraphsApexcharts from './GraphsApexcharts';
import GraphsHighcharts from './GraphsHighcharts';

import type { IGraphsContent } from '../interfaces/IGraphsContent';
import type { TCurrencyRates } from '../interfaces/IGraphsForm';

function GraphsContent({ activeGraph, historicalRates }: IGraphsContent) {
  const sortedRates: TCurrencyRates = Object.entries(historicalRates)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as TCurrencyRates);

  return (
    <div className=" flex justify-center items-center w-full h-full p-5 bg-white rounded-2xl shadow-md mt-5">
      {activeGraph === HIGHCHARTS_LINE && (
        <GraphsHighcharts rate={sortedRates} />
      )}
      {activeGraph === APEXCHARTS_LINE && (
        <GraphsApexcharts rate={sortedRates} />
      )}
    </div>
  );
}

export default GraphsContent;
