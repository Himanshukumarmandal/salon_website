const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// GET all bookings (for Admin Dashboard)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (err) {
        console.error('Error fetching bookings from MongoDB:', err);
        res.status(500).json({ message: 'Server error fetching bookings' });
    }
});

// POST a new booking
router.post('/', async (req, res) => {
    try {
        const { customerName, phoneNumber, service, appointmentDate } = req.body;

        // Basic validation
        if (!customerName || !phoneNumber || !service || !appointmentDate) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newBooking = new Booking({
            customerName,
            phoneNumber,
            service,
            appointmentDate
        });
        
        const savedBooking = await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully!', booking: savedBooking });
    } catch (err) {
        console.error('Error creating booking in MongoDB:', err);
        res.status(500).json({ message: 'Server error creating booking' });
    }
});

module.exports = router;
