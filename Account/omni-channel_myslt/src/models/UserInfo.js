const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  fiebaseId: { type: String, required: true },
  appVersion: { type: String, required: true },
  osType: { type: String, required: true },
  userName: { type: String, required: true },
  altrContact: { type: String },
  name: { type: String }
}, {
  timestamps: true,
  collection: 'userinfos' // ✅ match MongoDB Compass collection name
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
