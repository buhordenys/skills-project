import { METHOD_NOT_ALLOWED, OK } from '../../src/constants/httpStatusCodes';
import { graphsTabs } from '../../src/constants/mocks';

import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(OK).json({
      status: 'success',
      data: graphsTabs,
    });
  } else {
    res.status(METHOD_NOT_ALLOWED).json({
      status: 'error',
      message: 'Method not allowed',
    });
  }
}

export default handler;
