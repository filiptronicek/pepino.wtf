import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default (_request: VercelRequest, response: VercelResponse) : void => {
  const endpoint = process.env.endpoint || "https://pepino.filiptronicek.workers.dev/";
  fetch(endpoint).then(res => res.json()).then((res => {
    response.status(200).send(res);
  }))
}
