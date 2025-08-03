const mongoose = require('mongoose');

const UsageSchema = new mongoose.Schema({
    offer_name: String,
    volume: String,
    volumes: { type: mongoose.Schema.Types.Mixed, default: null },
    percentage: Number,
    sorter: Number
}, { _id: false });

const DailyListSchema = new mongoose.Schema({
    date: String,
    displaydate: String,
    volumeunit: String,
    daily_total_usage: String,
    daily_percentage: Number,
    usages: [UsageSchema]
}, { _id: false });

const DailyUsageSchema = new mongoose.Schema({
    subscriberID: String,
    billDate: String,
    monthIndex: Number,
    previousmonths: { type: mongoose.Schema.Types.Mixed, default: null },
    dailylist: [DailyListSchema]
});

module.exports = mongoose.model('DailyUsage', DailyUsageSchema);
