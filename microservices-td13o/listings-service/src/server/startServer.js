import express from 'express';
import accessEnv from '#root/helpers/accessEnv';
import setupRoutes from './routes';
import cors from './cors';

const PORT = accessEnv("PORT", 7100);
const app = express();

app.use(express.json());
app.use(cors);

setupRoutes(app);

app.get('/', (req, res) => {
  res.send({message: 'ok'});
});

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Listings services listening on ${PORT}`);
});
