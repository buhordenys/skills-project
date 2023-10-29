import type { BUTTON, RESET, SUBMIT } from '../../../constants/general';

export interface IButton {
  children: string
  type?: typeof BUTTON | typeof SUBMIT | typeof RESET
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
  className?: string
}
