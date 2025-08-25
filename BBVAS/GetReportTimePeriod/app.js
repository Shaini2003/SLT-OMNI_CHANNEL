const express = require('express');
const app = express();

app.use(express.json());

// Routes
const reportTimePeriodRoutes = require('./src/routes/reportTimePeriod.routes');
app.use('/tmf-api/reportManagement/v5', reportTimePeriodRoutes);

module.exports = app;
