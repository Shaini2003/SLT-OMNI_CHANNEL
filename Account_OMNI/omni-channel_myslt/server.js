const app = require('./src/app');
const connectDB = require('./src/config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`TMF Service Detail API running on port ${PORT}`);
});
