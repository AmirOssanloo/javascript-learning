import express from 'express';
import cors from './cors';
import setupRoutes from './routes';
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7101);
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
  console.info(`Users services listening on ${PORT}`);
});
