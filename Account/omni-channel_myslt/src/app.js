// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const accountRoutes = require('./routes/account');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// TMF route
app.use('/tmf-api/accountManagement/v5', accountRoutes);

module.exports = app;
