import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTranslation } from 'next-i18next';

import colors from '../../../constants/colors';

import type { IGraphsHighcharts } from '../interfaces/IGraphsHighcharts';

function GraphsHighcharts({ rate }: IGraphsHighcharts) {
  const { t } = useTranslation('graphs');

  const optionsHighcharts = {
    chart: {
      type: 'column',
    },
    title: {
      text: `${t('currency')}: EURO`,
      align: 'center',
      style: {
        color: colors.tuna,
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
    xAxis: {
      type: 'category',
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: t('rate', { currency: 'EURO' }),
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: `${t('tooltipPointText')}<b>{point.y:.1f} {tooltip.valuePrefix}</b>`,
    },
    series: [{
      colors: [
        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
        '#03c69b', '#00f194',
      ],
      colorByPoint: true,
      groupPadding: 0,
      data: Object.entries(rate),
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}',
        y: 10,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    }],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsHighcharts}
    />
  );
}

export default GraphsHighcharts;
