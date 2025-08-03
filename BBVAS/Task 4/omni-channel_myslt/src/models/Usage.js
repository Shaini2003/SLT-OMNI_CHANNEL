const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  subscriberID: String,
  date: String,
  displaydate: String,
  volumeunit: String,
  daily_total_usage: String,
  daily_percentage: Number,
  usages: [
    {
      offer_name: String,
      volume: String,
      volumes: mongoose.Schema.Types.Mixed,
      percentage: Number,
      sorter: Number
    }
  ]
});

module.exports = mongoose.model('Usage', usageSchema);
