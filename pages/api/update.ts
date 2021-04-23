import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default (request: VercelRequest, response: VercelResponse) : void => {
  const endpoint = process.env.endpoint;
  fetch(`${endpoint}?location=${request.query.location}&emoji=${request.query.emoji}&title=${request.query.title}`).then(res => res.json()).then((res => {
    response.status(200).send(res);
  }))
}
