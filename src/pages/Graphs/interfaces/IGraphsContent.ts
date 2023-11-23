import type { TChartsTypes } from '../../../constants/general';
import type { TCurrencyRates } from './IGraphsForm';

export interface IGraphsContent {
  activeGraph: TChartsTypes
  historicalRates: TCurrencyRates
}
