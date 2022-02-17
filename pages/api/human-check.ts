import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    'g-recaptcha-response': recaptchaResponse = null,
    'h-captcha-response': hcaptchaResponse = null,
  } = req.body

  // user probably didn't solved the captcha
  if (!recaptchaResponse && !hcaptchaResponse) {
    res.redirect(301, '/denied')
    return
  }

  // find out client ip
  const response = recaptchaResponse || hcaptchaResponse
  const remoteip = (req.headers['cf-connecting-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress) as string

  // verify captcha challenge parameters
  const verification = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      response,
      remoteip,
      secret: process.env.SECRET as string,
    }),
  })

  // something went wrong with the request
  // this doesn't mean the user is necesarily a bot though
  // but for the example purposes something went wrong
  if (!verification.ok) {
    res.redirect(301, '/denied')
    return
  }

  const verificationData = await verification.json()

  // probably a bot
  if (!verificationData.success) {
    res.redirect(301, '/denied')
    return
  }

  // hurray, we are human!
  res.redirect(301, '/human')
}
