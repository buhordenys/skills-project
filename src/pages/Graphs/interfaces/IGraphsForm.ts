import type { CHARTS_TYPES } from '../../../constants/general';

export interface IGraphTab {
  id: number
  title: typeof CHARTS_TYPES.HIGHCHARTS_LINE | typeof CHARTS_TYPES.APEXCHARTS_LINE
  active: boolean
}
