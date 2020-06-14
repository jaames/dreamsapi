import express from 'express';
import bodyParser from 'body-parser';
import { 
  requestGet,
  requestPost,
  QueryStringObject,
} from './dreamsClient';

const server = express();
const port = 3000;

server.use(express.json());
server.use(bodyParser.raw());



server.get('/*', async (req, res) => {
  const data = await requestGet(req.path, req.query as QueryStringObject);
  res.send(data);
});

server.post('/*', async (req, res) => {
  const data = await requestPost(req.path, req.body);
  res.send(data);
});

server.listen(port, () => console.log(`Dreams API server running on http://localhost:${port}`));