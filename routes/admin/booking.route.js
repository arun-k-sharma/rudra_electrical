const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');

router.get('/', auth, (req, res) => {
    res.render('admin/bookings', { admin: req.admin });
});


// GET /admin/bookings/:id render booking details page
router.get('/:id', auth, (req, res) => {
    const bookingId = req.params.id;
    res.render('admin/booking-detail', { admin: req.admin, bookingId: bookingId }); 
    // Fetch booking details from the database using the bookingId
    // For demonstration, we'll use a mock booking object]
});

// Function: getBookingDetails()


module.exports = router;





// POST /admin/bookings/:id/status

// Function: updateBookingStatus()

// Description: Change a booking's status (e.g., Pending → Completed).

// POST /admin/bookings/delete/:id

// Function: deleteBooking()

// Description: Remove a booking record.