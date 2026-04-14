const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI;
global.dbConnected = false;

if (MONGODB_URI && MONGODB_URI !== 'your_mongodb_connection_string_here') {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('MongoDB connected');
            global.dbConnected = true;
        })
        .catch(err => {
            console.error('Failed to connect to MongoDB. Using memory fallback. Error:', err);
        });
} else {
    console.log('No valid MONGODB_URI found. Using in-memory fallback storage.');
}

// Routes
const bookingRoutes = require('./routes/bookings');
app.use('/api/bookings', bookingRoutes);

// Basic route for testing
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'H S Salon backend is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
