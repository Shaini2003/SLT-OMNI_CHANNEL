const mongoose = require('mongoose');

const ProductOrderSchema = new mongoose.Schema({
  telNo: { type: String, required: true },
  productID: { type: String, required: true },
  pin: { type: String, required: true },
  requestType: { type: String, default: 'PurchaseProduct' },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProductOrder', ProductOrderSchema);
