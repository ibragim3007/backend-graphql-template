import cors from 'cors';
import express from 'express';
import { PORT } from './config';

export const app = express();
const jsonMiddleWare = express.json();

const whitelist = ['http://localhost:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(jsonMiddleWare);
app.use('/api', (req, res) => {
  console.log('hello owlrd');
});

app.listen(PORT, () => {
  console.log('listen port: ' + PORT);
});
