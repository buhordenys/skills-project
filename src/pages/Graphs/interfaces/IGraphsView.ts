import type { TChartsTypes } from '../../../constants/general';
import type { IGraphTab } from './IGraphsForm';

export interface IGraphsView {
  graphs: IGraphTab[]
  activeGraph: TChartsTypes
  handlerChange: (activeTab: TChartsTypes) => void
}
