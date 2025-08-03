const mongoose = require('mongoose');

const UsageSchema = new mongoose.Schema({
  offer_name: String,
  volume: String,
  percentage: Number,
  sorter: Number
});

const DailyUsageSchema = new mongoose.Schema({
  date: String,
  displaydate: String,
  volumeunit: String,
  daily_total_usage: String,
  daily_percentage: Number,
  usages: [UsageSchema]
});

const EnhancedUsageSchema = new mongoose.Schema({
  subscriberID: String,
  billDate: String,
  previousmonths: {
    previous1: String,
    previous2: String
  },
  dailylist: [DailyUsageSchema]
});

module.exports = mongoose.model('EnhancedCurrentDailyUsage', EnhancedUsageSchema);
