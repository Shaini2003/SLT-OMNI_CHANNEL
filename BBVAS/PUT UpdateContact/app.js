const express = require("express");
const app = express();
const contactRoutes = require("./src/routes/contact.routes");

app.use(express.json());

// Base path for TMF APIs
app.use("/tmf-api", contactRoutes);

module.exports = app;
