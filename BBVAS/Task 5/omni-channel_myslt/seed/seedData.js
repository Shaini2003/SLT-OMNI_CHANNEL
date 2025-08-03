const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DailyUsage = require('../models/DailyUsage');
const connectDB = require('../config/db');

dotenv.config();

const sampleData = {
  subscriberID: "94112488102",
  billDate: "01",
  monthIndex: 2,
  previousmonths: [
    {
      month: "2024-05",
      totalUsageMB: 45678.12
    },
    {
      month: "2024-06",
      totalUsageMB: 51234.56
    }
  ],
  dailylist: [
    {
      date: "2024-06-01",
      usages: [
        { type: "Download", volumeMB: 1234.5 },
        { type: "Upload", volumeMB: 432.1 }
      ]
    },
    {
      date: "2024-06-02",
      usages: [
        { type: "Download", volumeMB: 987.65 },
        { type: "Upload", volumeMB: 123.45 }
      ]
    }
  ]
};

const seed = async () => {
  try {
    await connectDB();

    await DailyUsage.deleteMany({});
    await DailyUsage.insertMany([sampleData]);

    console.log('✅ Seed data inserted successfully!');
    mongoose.disconnect();
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seed();
