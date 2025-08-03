require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const usageRoutes = require('./routes/previousUsageRoute');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/usageManagement', usageRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

