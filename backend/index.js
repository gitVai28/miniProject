const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/ping', (req, res) => {
  res.send('pong');
});
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Export the app (do not use app.listen in Vercel)
module.exports = app;
