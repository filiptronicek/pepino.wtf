import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

require('dotenv').config();

export default (_request: VercelRequest, response: VercelResponse) : void => {
  const endpoint = process.env.GET_URL || "https://pepino.filiptronicek.workers.dev/";
  fetch(endpoint).then(res => res.json()).then((res => {
    response.status(200).send(res);
  }))
}
