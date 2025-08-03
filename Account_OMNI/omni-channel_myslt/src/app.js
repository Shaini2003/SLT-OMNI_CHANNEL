const express = require('express');
const serviceDetailRoutes = require('./routes/serviceDetail.routes');

const app = express();
app.use(express.json());

// TMF-style base path
app.use('/tmf-api/serviceManagement/v1', serviceDetailRoutes);

module.exports = app;

