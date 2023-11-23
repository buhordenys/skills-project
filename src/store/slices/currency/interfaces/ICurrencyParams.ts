export interface ICurrencyLatestParams {
  base?: string
  symbols?: string
}

export interface ICurrencyHistoricalParams extends ICurrencyLatestParams {
  date: string
}
