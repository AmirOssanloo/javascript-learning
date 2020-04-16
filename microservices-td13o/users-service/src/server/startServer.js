import cors from 'cors'
import express from 'express';
import accessEnv from '#root/helpers/accessEnv';

const PORT = accessEnv("PORT", 7101);
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.send({message: 'ok'});
});

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Users services listening on ${PORT}`);
});
