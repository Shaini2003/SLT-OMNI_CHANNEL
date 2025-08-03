require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const usageRoutes = require('./src/routes/usageRoutes');


const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/usageManagement', usageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
