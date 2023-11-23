import type { CHARTS_TYPES } from '../../../constants/general';

export interface IGraphTab {
  id: number
  title: typeof CHARTS_TYPES.HIGHCHARTS_LINE | typeof CHARTS_TYPES.APEXCHARTS_LINE
  active: boolean
}

export type TCurrencyRates = {
  [key: string]: number
};

export interface ICurrencySymbols {
  symbols: {
    [key: string]: string
  }
}

export interface ICurrencyLatest {
  timestamp: number,
  base: string,
  date: string,
  rates: TCurrencyRates
}

export interface ICurrencyHistorical extends ICurrencyLatest {
  historical: boolean
}
