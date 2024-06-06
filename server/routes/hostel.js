const express = require('express');
const auth = require('../middleware/auth');
const HostelBooking = require('../models/HostelBooking');

const router = express.Router();

router.post('/book', auth, async (req, res) => {
  const { roomType, checkInDate, checkOutDate } = req.body;

  try {
    const booking = new HostelBooking({ userId: req.user.id, roomType, checkInDate, checkOutDate });
    await booking.save();
    res.json({ msg: 'Booking successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
