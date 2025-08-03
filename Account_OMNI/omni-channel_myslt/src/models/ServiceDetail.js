const mongoose = require('mongoose');

const ServiceDetailSchema = new mongoose.Schema({
  telephoneNo: String,
  status: String,
  serviceType: String,
  package: String,
  customer: {
    name: String,
    address: String
  },
  fetchedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ServiceDetail', ServiceDetailSchema);
