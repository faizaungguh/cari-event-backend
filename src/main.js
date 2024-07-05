require('dotenv').config();
const express = require('express');
const { privateRouter } = require('./routes/api');
const { publicRouter } = require('./routes/public-api');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use('/api/v1/private', privateRouter);
app.use('/api/v1/public', publicRouter);

app.listen(PORT, () => {
  console.log(`App Start on http://localhost:${PORT}`);
});
