import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default (_request: VercelRequest, response: VercelResponse) : void => {
  const endpoint = "https://interclips.filiptronicek.workers.dev/";
  fetch(endpoint).then(res => res.text()).then((res => {
    response.status(200).send(`Doing homework 📝`)
  }))
}
