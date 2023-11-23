import type { BUTTON, RESET, SUBMIT } from '../../../constants/general';

export type TButtonTypes = typeof BUTTON | typeof SUBMIT | typeof RESET;

export interface IButton {
  children: string
  type?: TButtonTypes
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
  className?: string
}
