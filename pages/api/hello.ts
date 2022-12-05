// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

const throwError = (req: NextApiRequest, res: NextApiResponse) => {
  throw new Error('API throw error test')
  res.status(200).json({ name: 'John Doe' })
}
export default throwError
