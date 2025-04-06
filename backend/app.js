require('dotenv').config();

// Sets up the Express server and connects the price estimation API route

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const priceEstimatorRoutes = require('./routes/priceEstimatorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
app.use(bodyParser.json());

// Routes
app.use('/api/estimate', priceEstimatorRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});