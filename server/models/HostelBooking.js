const mongoose = require('mongoose');

const HostelBookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomType: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
});

module.exports = mongoose.model('HostelBooking', HostelBookingSchema);