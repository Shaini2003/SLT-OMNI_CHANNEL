require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const EnhancedUsage = require('../src/models/DailyUsage'); // ✅ Correct model import

const seed = async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB. Seeding data...');

    // Clear existing records
    await EnhancedUsage.deleteMany();

    // Sample data
    const sampleData = {
      subscriberID: "94112179676",
      billDate: "01",
      previousmonths: {
        previous1: "Jun2025",
        previous2: "May2025"
      },
      dailylist: [
        {
          date: "2025-07-01",
          displaydate: "Jul-01",
          volumeunit: "GB",
          daily_total_usage: "3.3",
          daily_percentage: 33.5,
          usages: [
            {
              offer_name: "ANY TIDE",
              volume: "3.3",
              percentage: 100.0,
              sorter: 1
            }
          ]
        }
      ]
    };

    await EnhancedUsage.create(sampleData);
    console.log('✅ Seed data inserted successfully.');
    process.exit();
  } catch (error) {
    console.error('❌ Seed error:', error);
    process.exit(1);
  }
};

seed();
