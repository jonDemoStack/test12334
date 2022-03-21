import { Handler } from '@netlify/functions'
import cookie  from 'cookie'
export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters
  const hour = 3600000
  const twoWeeks = 14 * 24 * hour
  const myCookie = cookie.serialize('my_cookie', 'lolHi', {
    secure: true,
    httpOnly: true,
    path: '/',
    maxAge: twoWeeks,
  })
  return {
    statusCode: 200,
    'headers': {
      'Set-Cookie': myCookie,
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
