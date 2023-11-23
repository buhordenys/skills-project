export const BUTTON = 'button' as const;
export const SUBMIT = 'submit' as const;
export const RESET = 'reset' as const;

export const BUTTON_TYPES = { BUTTON, SUBMIT, RESET } as const;

export const TABS_LINE = 'line';
export const TABS_BAR = 'bar';
export const TABS_PIE = 'pie';

export const HIGHCHARTS_LINE = 'highcharts';
export const APEXCHARTS_LINE = 'apexcharts';
export const POPULAR_CURRENCIES = ['USD', 'GBP', 'CNY', 'CHF', 'CAD', 'AUD', 'HKD', 'UAH', 'NZD'];
export const TABS_TYPES = { TABS_LINE, TABS_BAR, TABS_PIE } as const;
export const CHARTS_TYPES = { HIGHCHARTS_LINE, APEXCHARTS_LINE } as const;

export type TTabsTypes = typeof TABS_TYPES[keyof typeof TABS_TYPES];
export type TButtonTypes = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES];
export type TChartsTypes = typeof CHARTS_TYPES[keyof typeof CHARTS_TYPES];
