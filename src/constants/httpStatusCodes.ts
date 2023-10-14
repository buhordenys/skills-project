/* Successfully */
export const OK = 200;
export const NO_CONTENT = 204;

/* Errors */
export const NOT_AUTHORIZED = 401;
export const NOT_FOUND = 404;
export const FORBIDDEN = 403;
export const INTERNAL_SERVER_ERROR = 500;

export const STATUS_CODE_RES = {
  [NOT_FOUND]: 'pageNotFound',
  [FORBIDDEN]: 'forbidden',
  [INTERNAL_SERVER_ERROR]: 'internalServerError',
};

export type TTranslateStatusCodeMap = typeof STATUS_CODE_RES[keyof typeof STATUS_CODE_RES];
