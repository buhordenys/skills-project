import type React from 'react';
import type { STATUS_CODE_RES } from '../../../constants/httpStatusCodes';

export interface IPageProps {
  children: React.ReactNode
  title?: string
  breadCrumbs?: { [key: string]: string }
  className?: string
  isLoading?: boolean
  navComponent?: React.ReactNode
  bottomPanel?: React.ReactNode
  errorStatus?: keyof typeof STATUS_CODE_RES
  showBread?: boolean
}
