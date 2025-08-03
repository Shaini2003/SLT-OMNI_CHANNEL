const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Usage = require('./src/models/Usage');

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Usage.deleteMany({});

  const sampleData = [
    {
      subscriberID: '94112488102',
      date: '2025-06-01',
      displaydate: 'Jun-01',
      volumeunit: 'GB',
      daily_total_usage: '4.6',
      daily_percentage: 50.34,
      usages: [
        {
          offer_name: 'ANY TIDE',
          volume: '4.6',
          volumes: null,
          percentage: 100.0,
          sorter: 1
        }
      ]
    },
    {
      subscriberID: '94112488102',
      date: '2025-06-02',
      displaydate: 'Jun-02',
      volumeunit: 'GB',
      daily_total_usage: '0.0',
      daily_percentage: 0.00025,
      usages: [
        {
          offer_name: 'ANY TIDE',
          volume: '0.0',
          volumes: null,
          percentage: 100.0,
          sorter: 1
        }
      ]
    }
    // Add more entries as needed
  ];

  await Usage.insertMany(sampleData);
  console.log('Data seeded');
  mongoose.disconnect();
};

seed();
