import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import colors from '../../../constants/colors';

import type { IGraphsApexcharts } from '../interfaces/IGraphsApexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function GraphsApexcharts({ rate }: IGraphsApexcharts) {
  const { t } = useTranslation('graphs');

  const optionsApexcharts = {
    series: [{
      name: 'Desktops',
      data: Object.values(rate),
    }],
    options: {
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: Object.keys(rate),
      },
      title: {
        text: `${t('currency')}: EURO`,
        style: {
          color: colors.tuna,
          fontWeight: 'bold',
          fontSize: '20px',
        },
      },
    },
  };

  return (
    <div>
      {(typeof window !== 'undefined') && (
        <Chart
          options={optionsApexcharts.options}
          series={optionsApexcharts.series}
          type="bar"
          width={1000}
          height={500}
        />
      )}
    </div>
  );
}

export default GraphsApexcharts;
