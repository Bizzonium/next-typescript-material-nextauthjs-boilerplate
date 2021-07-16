// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

const maxAge = 1 * 24 * 60 * 60; // 1 day

// Must contain all modifield fields used in NextAuth Options 
const jwt_options = {
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  encryption: true,
  verificationOptions: {
    maxTokenAge: `${maxAge}s`,
    algorithms: ['HS512']
  },
  maxAge: maxAge,
}

export default async function jwt(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, ...jwt_options})
  res.send(JSON.stringify(token, null, 2))
}
