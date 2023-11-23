import { METHOD_NOT_ALLOWED, OK } from '../../src/constants/httpStatusCodes';
import { GET } from '../../src/constants/requestUrls';

import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === GET) {
    const { sybApi, ...queryParams } = req.query;

    const queryParamsString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CURRENCY}${sybApi}?${queryParamsString}`);
    const data = await response.json();

    res.status(OK).json(data);
  } else {
    res.status(METHOD_NOT_ALLOWED).json({
      status: 'error',
      message: 'Method not allowed',
    });
  }
}

export default handler;
