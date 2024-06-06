const express = require('express');
const auth = require('../middleware/auth');
const LaundryRequest = require('../models/LaundryRequest');

const router = express.Router();

router.post('/request', auth, async (req, res) => {
  const { laundryType, pickupDate } = req.body;

  try {
    const request = new LaundryRequest({ userId: req.user.id, laundryType, pickupDate });
    await request.save();
    res.json({ msg: 'Laundry request successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
