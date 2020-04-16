import cors from 'cors';

export default cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true
});
