const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/website/booking.controller');



router.get('/', (req, res) => {
    res.render('website/booking');
});


router.post('/', bookingController.createBooking);

module.exports = router;