import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import music from './playlist.js';

dotenv.config();

const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello listen music',
  });
});
app.get('/music', async (req, res) => {
  res.status(200).json({
    music,
  });
});

const startServer = async () => {
  try {
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
