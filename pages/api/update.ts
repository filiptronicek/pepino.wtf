import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const sha256 = require('js-sha256');

require('dotenv').config();

export default (request: VercelRequest, response: VercelResponse) : void => {
  const providedToken = request.query.token;
  if (process.env.AUTH_TOKEN === sha256(providedToken)) {
    const endpoint = process.env.SET_URL;
    fetch(`${endpoint}?location=${request.query.location}&emoji=${request.query.emoji}&title=${request.query.title}`).then(res => res.json()).then((res => {
      response.status(200).send(res);
    }))
  } else {
    console.log(`Provided: ${providedToken}, expected: ${process.env.AUTH_TOKEN}`);
    response.status(403).send({result: "error", message: "Not allowed. Token invalid."});
  }
}
