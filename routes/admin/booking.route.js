const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const Booking = require('../../models/Booking');

router.get('/', auth, async (req, res) => {
    const bookings = await Booking.find({});
    
    res.render('admin/bookings', { 
        admin: req.admin,
        bookings: bookings
     });
});


// GET /admin/bookings/:id render booking details page
router.get('/:id', auth, async (req, res) => {
    const bookingId = req.params.id;
    const booking = await Booking.findById({ _id: bookingId });
    res.render('admin/booking-detail', { admin: req.admin, booking: booking }); 
});

//POST /admin/bookings/:id update booking status
router.post('/:id', auth, async (req, res) => {
    const bookingId = req.params.id;
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
        { _id: bookingId },
        { status: status },
        { returnDocument: 'after' }
    );

    res.redirect(`/admin/bookings`);
});


module.exports = router;





// POST /admin/bookings/:id/status

// Function: updateBookingStatus()

// Description: Change a booking's status (e.g., Pending → Completed).

// POST /admin/bookings/delete/:id

// Function: deleteBooking()

// Description: Remove a booking record.