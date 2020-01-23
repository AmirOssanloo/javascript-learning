const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}.`);
});
