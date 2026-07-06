const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    problemDescription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Cancelled', 'Completed'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports =
    mongoose.models.Booking ||
    mongoose.model('Booking', bookingSchema);