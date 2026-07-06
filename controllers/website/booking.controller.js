const Booking = require('../../models/booking');

exports.createBooking = async (req, res) => {
    try {
        const { fullName, number, address, service, date, problemDescription } = req.body;
        if(!fullName || !number || !address || !service || !date || !problemDescription) {
            return res.status(400).send("All required fields are mandatory.");
        }
        const booking = new Booking({
            fullName,
            number,
            address,
            service,
            date,
            problemDescription
        });
        await booking.save();
        res.status(201).redirect('/');
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).redirect('/booking');
    }
};


