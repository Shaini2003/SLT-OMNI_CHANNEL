const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const serviceRequestRoutes = require('./routes/serviceRequest.routes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', serviceRequestRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error:', err));

module.exports = app;
