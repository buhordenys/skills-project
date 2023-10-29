import type { TChartsTypes } from '../../../constants/general';
import type { IGraphTab } from '../../../pages/Graphs/interfaces/IGraphsForm';

export interface ITabs {
  tab: IGraphTab
  activeGraph: TChartsTypes
  handlerChange: (activeTab: TChartsTypes) => void
}
