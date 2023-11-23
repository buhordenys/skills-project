import type { TChartsTypes } from '../../../constants/general';
import type { IGraphTab, TCurrencyRates } from './IGraphsForm';

export interface IGraphsView {
  graphs: IGraphTab[]
  historicalRates: TCurrencyRates
  activeGraph: TChartsTypes
  handlerChange: (activeTab: TChartsTypes) => void
}
