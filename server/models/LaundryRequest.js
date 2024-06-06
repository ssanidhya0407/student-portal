const mongoose = require('mongoose');

const LaundryRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  laundryType: { type: String, required: true },
  pickupDate: { type: Date, required: true },
});

module.exports = mongoose.model('LaundryRequest', LaundryRequestSchema);
