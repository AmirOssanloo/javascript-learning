import express from 'express';
import setupRoutes from './routes';
import cors from './cors';
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7100);
const app = express();

app.use(express.json());
app.use(cors);

setupRoutes(app);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  });
});

app.get('/', (req, res) => {
  res.send({message: 'ok'});
});

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Listings services listening on ${PORT}`);
});
