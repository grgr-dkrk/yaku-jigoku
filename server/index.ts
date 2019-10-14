import * as express from 'express';
import { Translation } from './functions/translation';

const app = express();

const ARROW_ORIGIN_HEADER = 'http://localhost:1234';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ARROW_ORIGIN_HEADER);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-Shop-Type'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});


app.get('/v1/translation/', (req, res) => {
  if (!req.query.text) res.sendStatus(401);
  Translation(req.query.text).then((r) => {
    res.send(r);
  });
});

app.listen(3000, () => console.log("listening on port \x1b[36mhttp://localhost:3000\u001b[0m"));